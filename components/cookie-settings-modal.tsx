'use client'

import { useState } from 'react'
import Link from 'next/link'

interface CookieSettingsModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (settings: CookieSettings) => void
}

interface CookieSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export function CookieSettingsModal({ isOpen, onClose, onSave }: CookieSettingsModalProps) {
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  })

  const handleSave = () => {
    localStorage.setItem('cookie-settings', JSON.stringify(settings))
    localStorage.setItem('cookie-consent', 'customized')
    onSave(settings)
    onClose()
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    setSettings(allAccepted)
    localStorage.setItem('cookie-settings', JSON.stringify(allAccepted))
    localStorage.setItem('cookie-consent', 'accepted')
    onSave(allAccepted)
    onClose()
  }

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Always true
      analytics: false,
      marketing: false,
      preferences: false,
    }
    setSettings(allRejected)
    localStorage.setItem('cookie-settings', JSON.stringify(allRejected))
    localStorage.setItem('cookie-consent', 'rejected')
    onSave(allRejected)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-navy to-brand-blue px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Cookie Preferences
              </h3>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <p className="text-gray-600 mb-6">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              You can choose which types of cookies to allow below.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Necessary Cookies</h4>
                    <p className="text-sm text-gray-600">Essential for the website to function properly</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.necessary}
                      disabled
                      className="h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  These cookies are required for basic site functionality and cannot be disabled.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors interact with our website</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.analytics}
                      onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                      className="h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  These cookies collect information about how you use our website, such as which pages you visit most often.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">Used to deliver relevant advertisements and track campaign performance</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.marketing}
                      onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                      className="h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  These cookies may be set by our advertising partners to build a profile of your interests.
                </p>
              </div>

              {/* Preferences Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Preferences Cookies</h4>
                    <p className="text-sm text-gray-600">Remember your settings and preferences for a better experience</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.preferences}
                      onChange={(e) => setSettings({ ...settings, preferences: e.target.checked })}
                      className="h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  These cookies allow the website to remember choices you make and provide enhanced features.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
                <div className="flex space-x-4">
                  <Link href="/privacy" className="text-brand-blue hover:text-brand-navy underline">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-brand-blue hover:text-brand-navy underline">
                    Terms of Service
                  </Link>
                </div>
                <span className="text-gray-500">
                  Last updated: August 18, 2025
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-brand-blue hover:bg-brand-navy rounded-lg transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 text-sm font-medium text-white bg-brand-navy hover:bg-gray-800 rounded-lg transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
