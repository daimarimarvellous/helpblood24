"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, just check if fields are filled
      if (!loginData.email || !loginData.password) {
        throw new Error("Please fill in all fields")
      }

      console.log("Login successful", loginData)
      router.push("/")
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Validation
      if (!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword) {
        throw new Error("Please fill in all fields")
      }

      if (signupData.password !== signupData.confirmPassword) {
        throw new Error("Passwords do not match")
      }

      console.log("Signup successful", signupData)
      router.push("/")
    } catch (err: any) {
      setError(err.message || "Signup failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="p-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Welcome Back</h2>
            {error && <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="text-right">
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="p-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Create an Account</h2>
            {error && <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">{error}</div>}
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={loading}>
                  {loading ? "Creating account..." : "Sign Up"}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
