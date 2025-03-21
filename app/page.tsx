import Link from "next/link"
import { ArrowRight, Upload, Calendar, Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroImage from "@/components/hero-image"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-slate-200/50 bg-[length:16px_16px] dark:bg-grid-slate-800/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full mb-2 backdrop-blur-sm">
                AI-Powered Dermatology
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                AI-Powered Skin Analysis & Expert Dermatology Consultation
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Get instant AI analysis of skin conditions and connect with certified dermatologists for professional
                consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href={"/analysis"}>
                <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                  Analyze Your Skin <Upload className="h-4 w-4" />
                </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
                >
                  <Link href="/consultation" className="gap-2">
                    Book Consultation <Calendar className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <HeroImage />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">How DermaScan Works</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Our advanced AI technology combined with expert dermatologists provides accurate skin analysis and
              personalized treatment plans.
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Key Features</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              DermaScan combines cutting-edge AI technology with professional dermatology expertise.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Upload className="h-10 w-10 text-blue-600" />}
              title="AI Skin Analysis"
              description="Upload a photo and get instant AI-powered analysis of potential skin conditions."
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-blue-600" />}
              title="Expert Consultation"
              description="Connect with certified dermatologists for professional diagnosis and treatment plans."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title="Secure & Private"
              description="Your data and images are encrypted and handled with the highest privacy standards."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              See how DermaScan has helped people identify and treat skin conditions.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Sarah Johnson"
              condition="Eczema"
              quote="DermaScan identified my eczema immediately and connected me with a dermatologist who prescribed the perfect treatment."
              rating={5}
            />
            <TestimonialCard
              name="Michael Chen"
              condition="Psoriasis"
              quote="After struggling with undiagnosed skin issues for years, DermaScan helped me get a proper diagnosis and treatment plan."
              rating={5}
            />
            <TestimonialCard
              name="Emma Rodriguez"
              condition="Acne"
              quote="The AI analysis was spot on, and the dermatologist consultation helped me clear my persistent acne in just weeks."
              rating={4}
            />
          </div>
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              asChild
              className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
            >
              <Link href="/testimonials" className="gap-2">
                View All Success Stories <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Start Your Skin Health Journey Today
            </h2>
            <p className="text-blue-100 text-lg max-w-3xl mb-8">
              Get instant AI analysis and expert dermatology consultation from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/analysis" className="gap-2">
                  Analyze Your Skin <Upload className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <User className="h-4 w-4" />
                  Sign In
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

