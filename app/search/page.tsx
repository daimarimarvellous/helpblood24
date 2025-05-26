"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestTube, User, FlaskRoundIcon as Flask } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [activeTab, setActiveTab] = useState("all")

  // Mock search results
  const [results, setResults] = useState({
    tests: [] as any[],
    doctors: [] as any[],
    labs: [] as any[],
  })

  // Simulate search functionality
  useEffect(() => {
    if (query) {
      // In a real app, this would be an API call
      const mockSearch = () => {
        // Mock test results
        const testResults = [
          { id: 1, name: "Complete Blood Count (CBC)", price: 499, category: "Blood Test" },
          { id: 2, name: "Thyroid Profile", price: 899, category: "Hormone Test" },
          { id: 3, name: "Blood Sugar Test", price: 299, category: "Diabetes" },
        ].filter(
          (test) =>
            test.name.toLowerCase().includes(query.toLowerCase()) ||
            test.category.toLowerCase().includes(query.toLowerCase()),
        )

        // Mock doctor results
        const doctorResults = [
          { id: 1, name: "Dr. Priya Sharma", specialty: "Pathologist", experience: "12 years" },
          { id: 2, name: "Dr. Rajesh Kumar", specialty: "Hematologist", experience: "15 years" },
          { id: 3, name: "Dr. Ananya Patel", specialty: "Microbiologist", experience: "8 years" },
        ].filter(
          (doctor) =>
            doctor.name.toLowerCase().includes(query.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(query.toLowerCase()),
        )

        // Mock lab results
        const labResults = [
          { id: 1, name: "HealthFirst Diagnostics", location: "Koramangala, Bangalore" },
          { id: 2, name: "MediLab Pathology", location: "Indiranagar, Bangalore" },
          { id: 3, name: "LifeCare Diagnostics", location: "HSR Layout, Bangalore" },
        ].filter(
          (lab) =>
            lab.name.toLowerCase().includes(query.toLowerCase()) ||
            lab.location.toLowerCase().includes(query.toLowerCase()),
        )

        setResults({
          tests: testResults,
          doctors: doctorResults,
          labs: labResults,
        })
      }

      mockSearch()
    }
  }, [query])

  const totalResults = results.tests.length + results.doctors.length + results.labs.length

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900 mb-2">Search Results</h1>
      <p className="text-gray-600 mb-8">
        {totalResults} results found for "{query}"
      </p>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all">All ({totalResults})</TabsTrigger>
          <TabsTrigger value="tests">Tests ({results.tests.length})</TabsTrigger>
          <TabsTrigger value="doctors">Doctors ({results.doctors.length})</TabsTrigger>
          <TabsTrigger value="labs">Labs ({results.labs.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {totalResults === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No results found. Try a different search term.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {results.tests.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <TestTube className="mr-2 h-5 w-5 text-blue-600" />
                    Tests
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.tests.map((test) => (
                      <Card key={`test-${test.id}`}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{test.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{test.category}</p>
                          <p className="font-bold mt-2">₹{test.price}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {results.doctors.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <User className="mr-2 h-5 w-5 text-blue-600" />
                    Doctors
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.doctors.map((doctor) => (
                      <Card key={`doctor-${doctor.id}`}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-blue-600">{doctor.specialty}</p>
                          <p className="text-gray-600 mt-1">{doctor.experience} experience</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {results.labs.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Flask className="mr-2 h-5 w-5 text-blue-600" />
                    Labs
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.labs.map((lab) => (
                      <Card key={`lab-${lab.id}`}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{lab.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{lab.location}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="tests">
          {results.tests.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No test results found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.tests.map((test) => (
                <Card key={`test-tab-${test.id}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{test.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{test.category}</p>
                    <p className="font-bold mt-2">₹{test.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="doctors">
          {results.doctors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No doctor results found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.doctors.map((doctor) => (
                <Card key={`doctor-tab-${doctor.id}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-600">{doctor.specialty}</p>
                    <p className="text-gray-600 mt-1">{doctor.experience} experience</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="labs">
          {results.labs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No lab results found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.labs.map((lab) => (
                <Card key={`lab-tab-${lab.id}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{lab.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{lab.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
