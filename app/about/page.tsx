import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About DermaScan</h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Combining cutting-edge AI technology with expert dermatology care to revolutionize skin health.
        </p>
      </div>

      <div className="grid gap-12 md:gap-16">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At DermaScan, our mission is to make professional dermatology care accessible to everyone, everywhere. By
              combining advanced AI technology with the expertise of board-certified dermatologists, we're breaking down
              barriers to quality skin care.
            </p>
            <p className="text-muted-foreground">
              We believe that early detection and proper treatment of skin conditions can significantly improve quality
              of life and health outcomes. That's why we've developed a platform that allows for quick, accurate, and
              convenient skin analysis and professional consultation.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="DermaScan mission" fill className="object-cover" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Our AI Technology</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Image Recognition</h3>
                <p className="text-muted-foreground">
                  Our AI uses deep learning algorithms trained on millions of dermatological images to identify patterns
                  associated with various skin conditions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  The system continuously improves through machine learning, incorporating new data and dermatologist
                  feedback to enhance accuracy over time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Clinical Validation</h3>
                <p className="text-muted-foreground">
                  Our AI has been validated through rigorous clinical studies, demonstrating accuracy comparable to
                  board-certified dermatologists for common conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="DermaScan team" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground mb-6">
              DermaScan was founded by a team of dermatologists, AI researchers, and healthcare technology experts who
              recognized the potential for artificial intelligence to transform dermatological care.
            </p>
            <p className="text-muted-foreground">
              Our medical team consists of board-certified dermatologists with diverse specialties, ensuring
              comprehensive expertise across all skin conditions. Our technology team includes AI researchers and
              engineers from leading institutions, dedicated to developing and refining our cutting-edge platform.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Our Commitment</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Privacy & Security</h3>
                <p className="text-muted-foreground">
                  We adhere to the highest standards of data protection and privacy, with HIPAA-compliant systems and
                  end-to-end encryption for all patient data.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Medical Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain rigorous medical standards, with all AI analyses reviewed by board-certified
                  dermatologists when needed.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We're committed to making dermatology care accessible to underserved populations and regions with
                  limited access to specialists.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  We're dedicated to ongoing research and development to enhance our AI capabilities and expand the
                  range of detectable conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

