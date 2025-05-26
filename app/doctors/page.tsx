import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Star } from "lucide-react"

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Pathologist",
      experience: "12 years",
      rating: 4.9,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Hematologist",
      experience: "15 years",
      rating: 4.8,
      reviews: 98,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Dr. Ananya Patel",
      specialty: "Microbiologist",
      experience: "8 years",
      rating: 4.7,
      reviews: 76,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      specialty: "Biochemist",
      experience: "10 years",
      rating: 4.9,
      reviews: 112,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Dr. Meera Reddy",
      specialty: "Pathologist",
      experience: "14 years",
      rating: 4.8,
      reviews: 87,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Dr. Arjun Nair",
      specialty: "Hematologist",
      experience: "9 years",
      rating: 4.6,
      reviews: 65,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900 mb-8">Our Doctors</h1>

      <div className="relative mb-8">
        <Input type="text" placeholder="Search for doctors..." className="pl-10 pr-4 py-2 w-full md:max-w-md" />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-square w-full relative">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle className="text-xl mb-2">{doctor.name}</CardTitle>
              <p className="text-blue-600 font-medium">{doctor.specialty}</p>
              <p className="text-gray-600 mt-1">{doctor.experience} experience</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center text-yellow-500 mr-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 font-medium">{doctor.rating}</span>
                </div>
                <span className="text-gray-500 text-sm">({doctor.reviews} reviews)</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/doctors/${doctor.id}`} className="w-full">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">View Profile</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
