"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  // { name: 'Projects', href: '/projects' }, // Temporarily hidden
  { name: 'Demos', href: '/demos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'
      }`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 rounded-md">
              <span className="sr-only">Last Minute Projects</span>
              <Image
                src="/logo.png"
                alt="Last Minute Projects"
                width={500}
                height={150}
                className="h-12 lg:h-14 w-auto"
                priority
                quality={100}
                unoptimized
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 rounded-md px-2 py-1 ${
                  isActiveLink(item.href)
                    ? 'text-brand-yellow'
                    : 'text-gray-900 dark:text-gray-100 hover:text-brand-yellow'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                  isActiveLink(item.href) 
                    ? 'w-full bg-brand-yellow' 
                    : 'w-0 bg-brand-yellow group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}
            <Button asChild variant="brand" className="transition-transform hover:scale-105 focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile menu */}
          <div className="fixed inset-y-0 right-0 w-80 max-w-[80vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Last Minute Projects</span>
                  <Image
                    src="/logo.png"
                    alt="Last Minute Projects"
                    width={400}
                    height={120}
                    className="h-10 w-auto"
                    priority
                    quality={100}
                    unoptimized
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-6 py-6 overflow-y-auto">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 ${
                        isActiveLink(item.href)
                          ? 'text-brand-yellow bg-brand-yellow/10 dark:bg-brand-yellow/20'
                          : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-6 space-y-4">
                {mounted && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2" />
                    <span>Toggle theme</span>
                  </Button>
                )}
                <Button asChild variant="brand" className="w-full transition-transform hover:scale-105 focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
