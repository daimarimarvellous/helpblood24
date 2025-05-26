import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TestTube, Activity, Droplet, Pill, WormIcon as Virus, ChevronRight, Award, Clock } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 leading-tight mb-6">
                Fast, Reliable, Affordable Lab Services at Your Doorstep
              </h1>
              <Link href="/book-test">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-md">
                  Book a Test Now
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img1.jpg"
                alt="Doctor and patient illustration"
                width={400}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-10">Our Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <TestTube className="h-8 w-8 text-blue-600" />
              </div>
              <span className="font-medium text-navy-900">CBC</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <span className="font-medium text-navy-900">Thyroid</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <Droplet className="h-8 w-8 text-blue-600" />
              </div>
              <span className="font-medium text-navy-900">Sugar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <Pill className="h-8 w-8 text-blue-600" />
              </div>
              <span className="font-medium text-navy-900">Vitamin</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <Virus className="h-8 w-8 text-blue-600" />
              </div>
              <span className="font-medium text-navy-900">Covid-19</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <ChevronRight className="h-8 w-8 text-blue-600" />
              </div>
              <span className="font-medium text-navy-900">View All</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">NABL Certified Labs</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <Image
                  src="/home.png"
                  alt="Home Sample Collection"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Home Sample Collection</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Reports Within 24 Hours</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl text-blue-500 mb-4">"</div>
            <p className="text-xl text-navy-900 mb-6">
              The home sample collection was convenient, and I received my test results quickly. Highly recommend!
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Customer"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium text-navy-900">Neha S.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Partner With Us</h2>
              <p className="text-gray-600">
                Labs and healthcare professionals can collaborate with our company to expand their reach and provide
                better services.
              </p>
            </div>
            <div>
              <Link href="/partner">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
