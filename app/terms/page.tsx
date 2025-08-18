import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service - Last Minute Projects',
  description: 'Terms of Service for Last Minute Projects - Learn about the terms and conditions governing the use of our services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-brand-navy mb-4">
            Please read these terms carefully before using our services.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-brand-navy">
            <span>Last updated: August 18, 2025</span>
            <span>•</span>
            <span>Version: 1.0</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-brand-yellow/10 border-l-4 border-brand-yellow p-6 mb-8 rounded-r-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-0">
              <strong>Welcome to Last Minute Projects.</strong> By accessing our website and using our services, you agree to be bound by these Terms of Service, which are governed by the laws of India.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-brand-navy dark:text-white mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#services" className="text-brand-yellow hover:text-orange-500 underline">Services</a></li>
              <li><a href="#user-responsibility" className="text-brand-yellow hover:text-orange-500 underline">User Responsibility</a></li>
              <li><a href="#privacy-commitment" className="text-brand-yellow hover:text-orange-500 underline">Privacy Commitment</a></li>
              <li><a href="#accuracy-content" className="text-brand-yellow hover:text-orange-500 underline">Accuracy of Content</a></li>
              <li><a href="#disclaimer" className="text-brand-yellow hover:text-orange-500 underline">Disclaimer of Liability</a></li>
              <li><a href="#governing-law" className="text-brand-yellow hover:text-orange-500 underline">Governing Law & Jurisdiction</a></li>
              <li><a href="#updates" className="text-brand-yellow hover:text-orange-500 underline">Updates to Terms</a></li>
              <li><a href="#contact" className="text-brand-yellow hover:text-orange-500 underline">Contact Us</a></li>
            </ol>
          </div>

          {/* Sections */}
          <section id="services" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              Services
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">Last Minute Projects provides the following services:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Educational Content:</strong> AI/ML & LLM project ideas, tutorials, and learning resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Project Development:</strong> Custom project development with documentation and demos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Technical Support:</strong> Guidance and support for students and developers</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-lg">
                <p className="text-brand-navy dark:text-white text-sm">
                  <strong>Important:</strong> All material provided is for learning and informational purposes only. We do not guarantee specific outcomes or results.
                </p>
              </div>
            </div>
          </section>

          {/* User Responsibility */}
          <section id="user-responsibility" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
              User Responsibility
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">As a user of our services, you agree to:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-2">Legal Compliance</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-brand-yellow mr-2">•</span>
                      <span>Not use this website for any unlawful activities under the Indian Penal Code, IT Act, 2000, or any applicable Indian law</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-yellow mr-2">•</span>
                      <span>Comply with all applicable laws and regulations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-2">Content Usage</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-brand-yellow mr-2">•</span>
                      <span>Not copy, redistribute, or use our content for commercial purposes without explicit permission</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-yellow mr-2">•</span>
                      <span>Respect intellectual property rights</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-2">Account Security</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-brand-yellow mr-2">•</span>
                      <span>Maintain the security of your account credentials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-yellow mr-2">•</span>
                      <span>Notify us immediately of any unauthorized access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Commitment */}
          <section id="privacy-commitment" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
              Privacy Commitment
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We are committed to protecting your privacy and personal data:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-brand-yellow/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-navy dark:text-white mb-2">✓ We Will</h4>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>• Use your data only to provide services</li>
                    <li>• Communicate with you about our services</li>
                    <li>• Protect your data with security measures</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-navy dark:text-white mb-2">✗ We Won't</h4>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>• Sell or rent your personal data</li>
                    <li>• Share data with third parties unnecessarily</li>
                    <li>• Use data for unrelated purposes</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-lg">
                <p className="text-brand-navy dark:text-white text-sm">
                  <strong>Legal Requirements:</strong> We may disclose your data only when required by Indian law or government authorities.
                </p>
              </div>
            </div>
          </section>

          {/* Accuracy of Content */}
          <section id="accuracy-content" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
              Accuracy of Content
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We strive to provide accurate and reliable content, but please note:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Content is provided "as is" for educational purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Technology evolves rapidly, and information may become outdated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>We encourage users to verify details where necessary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>We regularly update content to maintain accuracy</span>
                </li>
              </ul>
              <div className="p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-lg">
                <p className="text-brand-navy dark:text-white text-sm">
                  <strong>Recommendation:</strong> Always test and validate any code or technical solutions in your own environment before implementing them in production.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer of Liability */}
          <section id="disclaimer" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
              Disclaimer of Liability
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">To the maximum extent permitted by Indian law:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>We provide services "as is" without warranties of any kind</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>We are not liable for any damages arising from the use of our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>We do not guarantee specific outcomes or results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Users are responsible for their own implementation and testing</span>
                </li>
              </ul>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Important:</strong> This disclaimer does not affect your statutory rights under Indian consumer protection laws.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law & Jurisdiction */}
          <section id="governing-law" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
              Governing Law & Jurisdiction
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">These terms are governed by and construed in accordance with the laws of India:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Applicable Law:</strong> Indian Information Technology Act, 2000 and related regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Jurisdiction:</strong> Courts in India shall have exclusive jurisdiction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Dispute Resolution:</strong> Any disputes shall be resolved through Indian legal processes</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Updates to Terms */}
          <section id="updates" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
              Updates to Terms
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We may update these terms from time to time:</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>To comply with changes in Indian laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>To reflect changes in our services or business practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>To improve clarity and user experience</span>
                </li>
              </ul>
              <div className="p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-lg">
                <p className="text-brand-navy dark:text-white text-sm">
                  <strong>Notification:</strong> We will notify you of any material changes by posting the updated terms on our website and updating the "Last updated" date.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
              Contact Us
            </h2>
            <div className="bg-brand-navy dark:bg-gray-800 text-white rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
              <p className="text-gray-100 dark:text-gray-200 mb-6">
                If you have any questions about these Terms of Service, please don't hesitate to contact us.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:hello@lastminuteprojects.com" className="text-brand-yellow hover:text-orange-400 underline">
                    hello@lastminuteprojects.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-100 dark:text-gray-200">Response within 24-48 hours</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
