'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CookieSettingsModal } from './cookie-settings-modal'

interface CookieSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
      // Add a small delay for smooth animation
      setTimeout(() => setIsVisible(true), 100)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-settings', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }))
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-settings', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }))
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  const handleCustomize = () => {
    setShowModal(true)
  }

  const handleSaveSettings = (settings: CookieSettings) => {
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  if (!showBanner) return null

  return (
    <>
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We use cookies and similar technologies to provide, protect, and improve our services. 
                    By clicking "Accept All", you consent to our use of cookies as described in our{' '}
                    <Link href="/privacy" className="text-brand-blue hover:text-brand-navy underline font-medium">
                      Privacy Policy
                    </Link>
                    {' '}and{' '}
                    <Link href="/terms" className="text-brand-blue hover:text-brand-navy underline font-medium">
                      Terms of Service
                    </Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Reject All
              </button>
              <button
                onClick={handleCustomize}
                className="px-4 py-2 text-sm font-medium text-brand-blue bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
              >
                Customize
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 text-sm font-medium text-white bg-brand-blue hover:bg-brand-navy rounded-lg transition-colors duration-200 shadow-sm"
              >
                Accept All
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                Last updated: August 18, 2025
              </span>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-gray-700 underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-gray-700 underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Cookie Settings Modal */}
      <CookieSettingsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveSettings}
      />
    </>
  )
}
