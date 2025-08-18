import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - Last Minute Projects',
  description: 'Terms of Service for Last Minute Projects - Learn about the terms and conditions governing the use of our services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-bold text-brand-navy">
              Last Minute Projects
            </Link>
            <Link 
              href="/"
              className="text-brand-blue hover:text-brand-navy font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-brand-navy to-brand-blue px-8 py-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-xl text-blue-100">
                Please read these terms carefully before using our services.
              </p>
              <div className="mt-6 flex items-center space-x-4 text-sm text-blue-100">
                <span>Last updated: August 18, 2025</span>
                <span>•</span>
                <span>Version: 1.0</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-12">
            <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mb-8 rounded-r-lg">
                <p className="text-gray-700 mb-0">
                  <strong>Welcome to Last Minute Projects.</strong> By accessing our website and using our services, you agree to be bound by these Terms of Service, which are governed by the laws of India.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><a href="#services" className="text-brand-blue hover:text-brand-navy underline">Services</a></li>
                  <li><a href="#user-responsibility" className="text-brand-blue hover:text-brand-navy underline">User Responsibility</a></li>
                  <li><a href="#privacy-commitment" className="text-brand-blue hover:text-brand-navy underline">Privacy Commitment</a></li>
                  <li><a href="#accuracy-content" className="text-brand-blue hover:text-brand-navy underline">Accuracy of Content</a></li>
                  <li><a href="#disclaimer" className="text-brand-blue hover:text-brand-navy underline">Disclaimer of Liability</a></li>
                  <li><a href="#governing-law" className="text-brand-blue hover:text-brand-navy underline">Governing Law & Jurisdiction</a></li>
                  <li><a href="#updates" className="text-brand-blue hover:text-brand-navy underline">Updates to Terms</a></li>
                  <li><a href="#contact" className="text-brand-blue hover:text-brand-navy underline">Contact Us</a></li>
                </ol>
              </div>

              {/* Sections */}
              <section id="services" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Services
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">Last Minute Projects provides the following services:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span><strong>Educational Content:</strong> AI/ML & LLM project ideas, tutorials, and learning resources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span><strong>Project Development:</strong> Custom project development with documentation and demos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span><strong>Technical Support:</strong> Guidance and support for students and developers</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Important:</strong> All material provided is for learning and informational purposes only. We do not guarantee specific outcomes or results.
                    </p>
                  </div>
                </div>
              </section>

              <section id="user-responsibility" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  User Responsibility
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">By using our services, you agree to:</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Compliance</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Not use this website for any unlawful activities under the Indian Penal Code, IT Act, 2000, or any applicable Indian law</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Comply with all applicable laws and regulations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Usage</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Not copy, redistribute, or use our content for commercial purposes without explicit permission</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Respect intellectual property rights</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Security</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Maintain the security of your account credentials</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Notify us immediately of any unauthorized access</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="privacy-commitment" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Privacy Commitment
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We are committed to protecting your privacy and personal data:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">✓ We Will</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Use your data only to provide services</li>
                        <li>• Communicate with you about our services</li>
                        <li>• Protect your data with security measures</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">✗ We Won't</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Sell or rent your personal data</li>
                        <li>• Share data with third parties unnecessarily</li>
                        <li>• Use data for unrelated purposes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Legal Requirements:</strong> We may disclose your data only when required by Indian law or government authorities.
                    </p>
                  </div>
                </div>
              </section>

              <section id="accuracy-content" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Accuracy of Content
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We strive to provide accurate and reliable content, but please note:</p>
                  <ul className="space-y-3 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Content is provided "as is" for educational purposes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Technology evolves rapidly, and information may become outdated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>We encourage users to verify details where necessary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>We regularly update content to maintain accuracy</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Recommendation:</strong> Always test and validate any code or technical solutions in your own environment before implementing them in production.
                    </p>
                  </div>
                </div>
              </section>

              <section id="disclaimer" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Disclaimer of Liability
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provision</h3>
                    <p className="text-gray-700 mb-4">Our website and services are provided on an "as-is" and "as-available" basis without any warranties.</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                    <p className="text-gray-700 mb-4">We are not liable for any:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Direct, indirect, or consequential losses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Damages arising from the use of our content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Issues with third-party services or tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Data loss or security breaches</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      <strong>Important:</strong> You use our services at your own risk. We recommend implementing appropriate testing and backup procedures.
                    </p>
                  </div>
                </div>
              </section>

              <section id="governing-law" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Governing Law & Jurisdiction
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Applicable Law</h3>
                      <p className="text-gray-700">These Terms are governed by and construed in accordance with the laws of India.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Jurisdiction</h3>
                      <p className="text-gray-700">Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Dhule, Maharashtra, India.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
                      <p className="text-gray-700">We encourage resolving disputes through mutual discussion and negotiation before pursuing legal action.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="updates" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                  Updates to Terms
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We may modify these Terms of Service for the following reasons:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Changes in applicable laws and regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Updates to our business practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Improvements to our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Security and compliance requirements</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Notification:</strong> Updated terms will be posted on this page with a new "Last updated" date. Continued use of our services constitutes acceptance of the updated terms.
                    </p>
                  </div>
                </div>
              </section>

              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
                  Contact Us
                </h2>
                <div className="bg-gradient-to-r from-brand-navy to-brand-blue text-white rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
                  <p className="text-blue-100 mb-6">
                    If you have any questions about these Terms of Service or need clarification on any section, please contact us.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href="mailto:hello@lastminuteprojects.com" className="text-blue-100 hover:text-white underline">
                        hello@lastminuteprojects.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-100">Response within 24-48 hours</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-8 mt-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-600 text-sm">
                    © 2025 Last Minute Projects. All rights reserved.
                  </p>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="/privacy" className="text-brand-blue hover:text-brand-navy text-sm underline">
                      Privacy Policy
                    </Link>
                    <Link href="/" className="text-brand-blue hover:text-brand-navy text-sm underline">
                      Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
