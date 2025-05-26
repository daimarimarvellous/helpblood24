import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/about" className="text-navy-900 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-navy-900 hover:text-blue-600">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="text-navy-900 hover:text-blue-600">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com" className="text-navy-900 hover:text-blue-600">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://linkedin.com" className="text-navy-900 hover:text-blue-600">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Helpblood24.com. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
