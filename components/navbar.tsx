"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-navy-900">
            Helpblood24.com
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex relative mx-4 flex-1 max-w-md">
            <Input
              type="text"
              placeholder="Search for tests, doctors, labs..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Button type="submit" variant="ghost" className="absolute right-0 top-0 h-full px-3" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-medium text-navy-900 hover:text-blue-600">
              Home
            </Link>
            <Link href="/tests" className="font-medium text-navy-900 hover:text-blue-600">
              Tests
            </Link>
            <Link href="/doctors" className="font-medium text-navy-900 hover:text-blue-600">
              Doctors
            </Link>
            <Link href="/labs" className="font-medium text-navy-900 hover:text-blue-600">
              Labs
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="font-medium text-navy-900 hover:text-blue-600">
                Login
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {/* Search Bar - Mobile */}
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input
                type="text"
                placeholder="Search for tests, doctors, labs..."
                className="pl-10 pr-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Button type="submit" variant="ghost" className="absolute right-0 top-0 h-full px-3" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
            </form>

            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-navy-900 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/tests"
                className="font-medium text-navy-900 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tests
              </Link>
              <Link
                href="/doctors"
                className="font-medium text-navy-900 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </Link>
              <Link
                href="/labs"
                className="font-medium text-navy-900 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Labs
              </Link>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="font-medium text-navy-900 hover:text-blue-600 w-full justify-start">
                  Login
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
