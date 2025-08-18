import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Instagram, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
                             <Image
                 src="/logo.png"
                 alt="Last Minute Projects"
                 width={600}
                 height={180}
                 className="h-20 w-auto"
                 priority
                 quality={100}
                 unoptimized
               />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              AI/ML & LLM projects for students—any stack, on time. From idea to working code with docs, demos and explanation.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://instagram.com/lastminuteprojects" target="_blank">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:hello@lastminuteprojects.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#llm" className="text-gray-300 hover:text-white transition-colors">
                  LLM & GenAI
                </Link>
              </li>
              <li>
                <Link href="/services#nlp" className="text-gray-300 hover:text-white transition-colors">
                  NLP
                </Link>
              </li>
              <li>
                <Link href="/services#cv" className="text-gray-300 hover:text-white transition-colors">
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link href="/services#ml" className="text-gray-300 hover:text-white transition-colors">
                  Core ML
                </Link>
              </li>
              <li>
                <Link href="/services#mlops" className="text-gray-300 hover:text-white transition-colors">
                  MLOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/demos" className="text-gray-300 hover:text-white transition-colors">
                  Demos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 Last Minute Projects. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
