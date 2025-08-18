import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Last Minute Projects',
  description: 'Privacy Policy for Last Minute Projects - Learn how we protect your personal information in accordance with Indian data protection laws.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-brand-navy mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <strong>At Last Minute Projects</strong>, we value your privacy and are committed to protecting your personal information in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-brand-navy dark:text-white mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#information-we-collect" className="text-brand-yellow hover:text-orange-500 underline">Information We Collect</a></li>
              <li><a href="#use-of-information" className="text-brand-yellow hover:text-orange-500 underline">Use of Information</a></li>
              <li><a href="#data-sharing" className="text-brand-yellow hover:text-orange-500 underline">Data Sharing</a></li>
              <li><a href="#security" className="text-brand-yellow hover:text-orange-500 underline">Security</a></li>
              <li><a href="#your-rights" className="text-brand-yellow hover:text-orange-500 underline">Your Rights</a></li>
              <li><a href="#cookies-tracking" className="text-brand-yellow hover:text-orange-500 underline">Cookies & Tracking</a></li>
              <li><a href="#updates" className="text-brand-yellow hover:text-orange-500 underline">Updates to Policy</a></li>
              <li><a href="#contact" className="text-brand-yellow hover:text-orange-500 underline">Contact Us</a></li>
            </ol>
          </div>

          {/* Information We Collect */}
          <section id="information-we-collect" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              Information We Collect
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We collect the following types of information:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Personal Information:</strong> Name, email address, contact information, and other details you voluntarily provide when using our services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Usage Data:</strong> Information about how you interact with our website and services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Technical Data:</strong> IP address, browser type, device information, and other technical details.</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-lg">
                <p className="text-brand-navy dark:text-white text-sm">
                  <strong>Note:</strong> We do not collect sensitive personal data such as financial information, biometric data, or other highly sensitive information.
                </p>
              </div>
            </div>
          </section>

          {/* Use of Information */}
          <section id="use-of-information" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
              Use of Information
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We use the collected information for the following purposes:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Service Delivery:</strong> To provide and maintain our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Communication:</strong> To respond to your inquiries and provide support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Improvement:</strong> To analyze usage patterns and improve our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section id="data-sharing" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
              Data Sharing
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Security */}
          <section id="security" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
              Security
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We implement appropriate security measures to protect your personal information:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Encryption:</strong> Data transmission is encrypted using SSL/TLS protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Access Control:</strong> Limited access to personal information on a need-to-know basis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Regular Updates:</strong> Security measures are regularly reviewed and updated</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section id="your-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
              Your Rights
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">Under Indian data protection laws, you have the following rights:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Access:</strong> Right to know what personal data we hold about you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Correction:</strong> Right to correct inaccurate or incomplete data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Deletion:</strong> Right to request deletion of your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span><strong>Portability:</strong> Right to receive your data in a structured format</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section id="cookies-tracking" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
              Cookies & Tracking
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-3">Current Status</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">We use the following tracking technologies on our website:</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    <span><strong>Vercel Analytics:</strong> Performance and usage analytics to improve our website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    <span><strong>Vercel Speed Insights:</strong> Performance monitoring to optimize site speed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-yellow mr-2">•</span>
                    <span><strong>Cookie Consent Management:</strong> We use localStorage to remember your cookie preferences</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-3">Cookie Categories</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-brand-navy dark:text-white mb-1">Necessary Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Required for basic site functionality and cannot be disabled.</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-brand-navy dark:text-white mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Used by Vercel Analytics to understand how visitors use our site.</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-brand-navy dark:text-white mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Currently not used on our website.</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-brand-navy dark:text-white mb-1">Preferences Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Used to remember your cookie consent choices.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-2">Your Control</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">You can manage your cookie preferences through our cookie consent banner. You have the right to accept, reject, or customize which types of cookies you allow.</p>
              </div>
              
              <div className="p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-lg">
                <p className="text-brand-navy dark:text-white text-sm">
                  <strong>Future Updates:</strong> If we implement additional cookies or tracking technologies in the future, we will update this policy and provide you with appropriate notice and consent mechanisms.
                </p>
              </div>
            </div>
          </section>

          {/* Updates to Policy */}
          <section id="updates" className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center">
              <span className="bg-brand-yellow text-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
              Updates to Policy
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We may update this Privacy Policy from time to time to:</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Comply with changes in Indian laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Reflect changes in our data practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">•</span>
                  <span>Improve our privacy protections</span>
                </li>
              </ul>
              <div className="p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-lg">
                <p className="text-brand-navy dark:text-white text-sm">
                  <strong>Notification:</strong> We will notify you of any material changes to this policy by posting the updated version on our website and updating the "Last updated" date.
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
              <h3 className="text-xl font-semibold mb-4">Have Questions About Your Privacy?</h3>
              <p className="text-gray-100 dark:text-gray-200 mb-6">
                We're here to help. If you have any questions about this Privacy Policy or our data practices, please don't hesitate to reach out.
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
