import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Last Minute Projects',
  description: 'Privacy Policy for Last Minute Projects - Learn how we protect your personal information in accordance with Indian data protection laws.',
}

export default function PrivacyPolicy() {
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
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-blue-100">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  <strong>At Last Minute Projects</strong>, we value your privacy and are committed to protecting your personal information in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (DPDP Act).
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><a href="#information-we-collect" className="text-brand-blue hover:text-brand-navy underline">Information We Collect</a></li>
                  <li><a href="#use-of-information" className="text-brand-blue hover:text-brand-navy underline">Use of Information</a></li>
                  <li><a href="#data-sharing" className="text-brand-blue hover:text-brand-navy underline">Data Sharing</a></li>
                  <li><a href="#security" className="text-brand-blue hover:text-brand-navy underline">Security</a></li>
                  <li><a href="#your-rights" className="text-brand-blue hover:text-brand-navy underline">Your Rights</a></li>
                  <li><a href="#cookies-tracking" className="text-brand-blue hover:text-brand-navy underline">Cookies & Tracking</a></li>
                  <li><a href="#updates" className="text-brand-blue hover:text-brand-navy underline">Updates to Policy</a></li>
                  <li><a href="#contact" className="text-brand-blue hover:text-brand-navy underline">Contact Us</a></li>
                </ol>
              </div>

              {/* Sections */}
              <section id="information-we-collect" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Information We Collect
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We collect the following types of information:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span><strong>Personal Information:</strong> Name, email address, contact information, and other details you voluntarily provide when using our services.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span><strong>Usage Data:</strong> Information about how you interact with our website and services.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span><strong>Technical Data:</strong> IP address, browser type, device information, and other technical details.</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> We do not collect sensitive personal data such as financial information, biometric data, or other highly sensitive information.
                    </p>
                  </div>
                </div>
              </section>

              <section id="use-of-information" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Use of Information
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>To provide and maintain our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>To communicate with you regarding our services or your inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>To improve the content and functionality of our website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>To send you important updates and notifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>To comply with legal obligations</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="data-sharing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Data Sharing
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">We Do Not Share Your Data</h3>
                    <p className="text-gray-700 mb-4">We do not sell, rent, or share your personal information with any third party for commercial purposes.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Limited Sharing</h3>
                    <p className="text-gray-700 mb-4">Information may be shared only in the following circumstances:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>When required by law, court order, or government authority under Indian law</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>To protect our rights, property, or safety</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>With your explicit consent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="security" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Security
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your personal information:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Encryption of data in transit and at rest</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Regular security assessments and updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Access controls and authentication measures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Compliance with Indian IT Rules and security practices</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="your-rights" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Your Rights (as per DPDP Act, 2023)
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">Under the Digital Personal Data Protection Act, 2023, you have the following rights:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Right to Access</h4>
                      <p className="text-gray-700 text-sm">Request a copy of your personal data that we hold.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Right to Correction</h4>
                      <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete data.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Right to Deletion</h4>
                      <p className="text-gray-700 text-sm">Request deletion of your personal data.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Right to Withdraw Consent</h4>
                      <p className="text-gray-700 text-sm">Withdraw your consent for data processing at any time.</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">
                      <strong>To exercise these rights:</strong> Contact us at{' '}
                      <a href="mailto:hello@lastminuteprojects.com" className="text-brand-blue hover:text-brand-navy underline">
                        hello@lastminuteprojects.com
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              <section id="cookies-tracking" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Cookies & Tracking
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Status</h3>
                    <p className="text-gray-700">Currently, we do not use tracking technologies or cookies on our website.</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Future Updates:</strong> If we implement cookies or tracking technologies in the future, we will update this policy and provide you with appropriate notice and consent mechanisms.
                    </p>
                  </div>
                </div>
              </section>

              <section id="updates" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                  Updates to Policy
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We may update this Privacy Policy from time to time to:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Comply with changes in Indian laws and regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Reflect changes in our data practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span>Improve our privacy protections</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Notification:</strong> We will notify you of any material changes to this policy by posting the updated version on our website and updating the "Last updated" date.
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
                  <h3 className="text-xl font-semibold mb-4">Have Questions About Your Privacy?</h3>
                  <p className="text-blue-100 mb-6">
                    We're here to help. If you have any questions about this Privacy Policy or our data practices, please don't hesitate to reach out.
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
                    <Link href="/terms" className="text-brand-blue hover:text-brand-navy text-sm underline">
                      Terms of Service
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
