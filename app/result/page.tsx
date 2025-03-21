"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";


interface PredictionResponse {
  message: string;
  gradcam_image_url: string;
  disease: string;
  confidence: string;
  remedy: string;
  error?: string;
}

export default function ResultPage() {
  const router = useRouter();
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve prediction data from localStorage
    const storedPrediction = localStorage.getItem("prediction");
    const storedImage = localStorage.getItem("imagePreview");
    
    if (storedPrediction) {
      setPrediction(JSON.parse(storedPrediction));
    }
    
    if (storedImage) {
      setImagePreview(storedImage);
    }
    
    setIsLoading(false);
    
    // Optional: Clear localStorage after retrieving data
    // localStorage.removeItem("prediction");
    // localStorage.removeItem("imagePreview");
  }, []);

  const handleBackClick = () => {
    router.push("/analysis");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl">Loading results...</p>
        </div>
      </div>
    );
  }

  if (!prediction) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">No Results Found</h2>
        <p className="mb-6">We couldn't find any analysis results. Please try again.</p>
        <Button onClick={handleBackClick}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Upload
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button 
        variant="outline" 
        onClick={handleBackClick} 
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Upload
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Original image */}
        {imagePreview && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Uploaded Image</h3>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img
                src={imagePreview}
                alt="Uploaded skin image"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}
        
        {/* Prediction results */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
          
          {prediction.error ? (
            <div className="p-4 bg-red-100 text-red-700 rounded-md">
              <p>{prediction.error}</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-600">Detected Condition</h3>
                  <p className="text-2xl font-bold">{prediction.disease}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-600">Confidence</h3>
                  <p className="text-xl">{prediction.confidence}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-600">Analysis</h3>
                  <p>{prediction.message}</p>
                </div>
              </div>
              
              {prediction.gradcam_image_url && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Heat Map Visualization</h3>
                  <img
                    src={`http://localhost:5000${prediction.gradcam_image_url}`}
                    alt="Grad-CAM visualization"
                    className="max-w-full rounded-md border border-gray-200"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    This heat map highlights the areas of the image that influenced the analysis.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
        
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md my-8">
          <h2 className="text-2xl font-semibold mb-4">Remedy Results</h2>
          <p><ReactMarkdown>{prediction.remedy}</ReactMarkdown></p>
        </div>
    </div>
  );
}