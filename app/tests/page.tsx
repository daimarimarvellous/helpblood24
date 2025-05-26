import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TestTube, Activity, Droplet, Pill, WormIcon as Virus, Search } from "lucide-react"

export default function TestsPage() {
  const tests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      description:
        "Measures different components of your blood including red and white blood cells, platelets, and hemoglobin.",
      price: 499,
      icon: <TestTube className="h-6 w-6 text-blue-600" />,
      popular: true,
    },
    {
      id: 2,
      name: "Thyroid Profile",
      description: "Checks the function of your thyroid gland by measuring hormone levels in your blood.",
      price: 899,
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      popular: false,
    },
    {
      id: 3,
      name: "Blood Sugar Test",
      description: "Measures the amount of glucose in your blood to diagnose and monitor diabetes.",
      price: 299,
      icon: <Droplet className="h-6 w-6 text-blue-600" />,
      popular: true,
    },
    {
      id: 4,
      name: "Vitamin D Test",
      description: "Measures the level of vitamin D in your blood to check for deficiency.",
      price: 799,
      icon: <Pill className="h-6 w-6 text-blue-600" />,
      popular: false,
    },
    {
      id: 5,
      name: "COVID-19 RT-PCR Test",
      description: "Detects the genetic material of the SARS-CoV-2 virus to diagnose COVID-19 infection.",
      price: 999,
      icon: <Virus className="h-6 w-6 text-blue-600" />,
      popular: true,
    },
    {
      id: 6,
      name: "Lipid Profile",
      description: "Measures the levels of fats in your blood, including cholesterol and triglycerides.",
      price: 599,
      icon: <TestTube className="h-6 w-6 text-blue-600" />,
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900 mb-8">Available Tests</h1>

      <div className="relative mb-8">
        <Input type="text" placeholder="Search for tests..." className="pl-10 pr-4 py-2 w-full md:max-w-md" />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test) => (
          <Card key={test.id} className={`overflow-hidden ${test.popular ? "border-blue-500" : ""}`}>
            {test.popular && (
              <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 absolute right-0">Popular</div>
            )}
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">{test.icon}</div>
              <CardTitle className="text-xl">{test.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{test.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="font-bold text-lg">₹{test.price}</div>
              <Link href={`/book-test?test=${test.id}`}>
                <Button className="bg-blue-500 hover:bg-blue-600">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
