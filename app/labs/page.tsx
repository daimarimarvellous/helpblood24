import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, Award } from "lucide-react"

export default function LabsPage() {
  const labs = [
    {
      id: 1,
      name: "HealthFirst Diagnostics",
      location: "Koramangala, Bangalore",
      distance: "2.5 km",
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=400",
      certified: true,
      homeCollection: true,
    },
    {
      id: 2,
      name: "MediLab Pathology",
      location: "Indiranagar, Bangalore",
      distance: "4.1 km",
      rating: 4.7,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=400",
      certified: true,
      homeCollection: true,
    },
    {
      id: 3,
      name: "LifeCare Diagnostics",
      location: "HSR Layout, Bangalore",
      distance: "3.2 km",
      rating: 4.9,
      reviews: 189,
      image: "/placeholder.svg?height=200&width=400",
      certified: true,
      homeCollection: true,
    },
    {
      id: 4,
      name: "City Scan Centre",
      location: "Jayanagar, Bangalore",
      distance: "5.7 km",
      rating: 4.6,
      reviews: 98,
      image: "/placeholder.svg?height=200&width=400",
      certified: true,
      homeCollection: false,
    },
    {
      id: 5,
      name: "Apollo Diagnostics",
      location: "Whitefield, Bangalore",
      distance: "8.3 km",
      rating: 4.8,
      reviews: 210,
      image: "/placeholder.svg?height=200&width=400",
      certified: true,
      homeCollection: true,
    },
    {
      id: 6,
      name: "Metropolis Healthcare",
      location: "Electronic City, Bangalore",
      distance: "10.5 km",
      rating: 4.7,
      reviews: 176,
      image: "/placeholder.svg?height=200&width=400",
      certified: true,
      homeCollection: true,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900 mb-8">Partner Labs</h1>

      <div className="relative mb-8">
        <Input type="text" placeholder="Search for labs near you..." className="pl-10 pr-4 py-2 w-full md:max-w-md" />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {labs.map((lab) => (
          <Card key={lab.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="h-full relative">
                  <Image src={lab.image || "/placeholder.svg"} alt={lab.name} fill className="object-cover" />
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <CardTitle className="text-xl mb-2">{lab.name}</CardTitle>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{lab.location}</span>
                  <span className="ml-2 text-sm">({lab.distance})</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex items-center text-yellow-500 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 font-medium">{lab.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({lab.reviews} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lab.certified && (
                    <Badge variant="outline" className="flex items-center gap-1 border-blue-500 text-blue-600">
                      <Award className="h-3 w-3" />
                      NABL Certified
                    </Badge>
                  )}
                  {lab.homeCollection && (
                    <Badge variant="outline" className="border-green-500 text-green-600">
                      Home Collection
                    </Badge>
                  )}
                </div>
                <Link href={`/labs/${lab.id}`}>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">View Details</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
