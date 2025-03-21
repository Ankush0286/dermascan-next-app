"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Upload, X, ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PredictionResponse {
  message: string;
  gradcam_image_url: string;
  disease: string;
  confidence: string;
  remedy: string;
  error?: string;
}

export default function ImageUploader() {
  const router = useRouter();
  // States for drag-and-drop UI and file preview
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  // State to store the actual file for API submission
  const [file, setFile] = useState<File | null>(null);
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // Process the selected file, storing both its preview and file object.
  const handleFile = (selectedFile: File) => {
    if (!selectedFile.type.match("image.*")) {
      alert("Please upload an image file");
      return;
    }
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        setImage(e.target.result);
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  // Reset image, file and prediction results.
  const removeImage = () => {
    setImage(null);
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Send the file to the Flask API for prediction and navigate to result page
  const handlePredict = async () => {
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
        cache: "no-store",
        next: { revalidate: 0 }
      });
      
      if (!res.ok) {
        throw new Error(`Server error: ${res.statusText}`);
      }
      
      const data: PredictionResponse = await res.json();
      
      // Store prediction data in localStorage for the result page to access
      localStorage.setItem("prediction", JSON.stringify(data));
      localStorage.setItem("imagePreview", image || "");
      
      // Navigate to the result page
      router.push("/result");
    } catch (error) {
      console.error("Error during prediction:", error);
      alert("An error occurred during analysis. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Drag and drop area */}
      {!image ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20" : "border-border"
            }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput} // Clicking the area also triggers the file browser.
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
              <ImageIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <p className="text-lg font-medium">Drag and drop your image here</p>
              <p className="text-sm text-muted-foreground mt-1">
                or click to browse from your device
              </p>
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                triggerFileInput();
              }}
              variant="outline"
              className="mt-4"
            >
              <Upload className="mr-2 h-4 w-4" /> Select Image
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Supported formats: JPG, PNG, HEIC - Max size: 10MB
          </p>
        </div>
      ) : (
        // Display the image preview with a remove button.
        <div className="relative rounded-lg overflow-hidden border border-border">
          <img
            src={image || "/placeholder.svg"}
            alt="Uploaded skin image"
            className="w-full h-auto max-h-[400px] object-contain"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={removeImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Analyze button */}
      {image && (
        <div className="flex justify-center">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            onClick={handlePredict}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Image"
            )}
          </Button>
        </div>
      )}
    </div>
  );
}