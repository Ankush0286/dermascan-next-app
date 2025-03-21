import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImageUploader from "@/components/image-uploader"

export default function AnalysisPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">AI Skin Analysis</h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Upload a photo of your skin concern and get instant AI-powered analysis.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="md:col-span-2 lg:col-span-1 border-t-4 border-t-blue-600">
          <CardHeader>
            <CardTitle>Upload Your Image</CardTitle>
            <CardDescription>
              Take a clear, well-lit photo of the affected area. Your privacy is our priority - all images are encrypted
              and securely stored.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ImageUploader />
          </CardContent>
        </Card>

        <div className="space-y-8 md:col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Upload a photo</h3>
                  <p className="text-sm text-muted-foreground">
                    Take a clear photo of your skin concern in good lighting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                  2
                </div>
                <div>
                  <h3 className="font-medium">AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI will analyze your image and provide preliminary results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Expert Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with a dermatologist for professional diagnosis and treatment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Your privacy is our top priority. All images are:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>End-to-end encrypted</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Stored securely in compliance with HIPAA</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Never shared with third parties</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Automatically deleted after 30 days</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

