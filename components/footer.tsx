import Link from 'next/link'
import Image from 'next/image'

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
              <Link 
                href="https://instagram.com/last_minuteprojects" 
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 hover:bg-gray-300 hover:border-gray-300 transition-colors"
              >
                {/* Instagram Icon with gradient */}
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#f09433', stopOpacity: 1}} />
                      <stop offset="25%" style={{stopColor: '#e6683c', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#dc2743', stopOpacity: 1}} />
                      <stop offset="75%" style={{stopColor: '#cc2366', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#bc1888', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                </Link>
              <Link 
                href="mailto:hello@lastminuteprojects.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 hover:bg-gray-300 hover:border-gray-300 transition-colors"
              >
                {/* Mail Icon with blue color */}
                <svg className="h-4 w-4" fill="#4285f4" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                </Link>
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
              © {new Date().getFullYear()} Last Minute Projects. All rights reserved.
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
