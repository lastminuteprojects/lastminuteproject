"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Send, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

const domains = [
  'Web Development',
  'Mobile Development',
  'AI & Machine Learning',
  'Blockchain & Web3',
  'Data Analytics & BI',
  'Other'
]

const studyYears = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  'Masters',
  'PhD',
  'Working Professional'
]

const datasetOptions = [
  { value: 'provided', label: 'I have my own data/requirements' },
  { value: 'need_help', label: 'I need help with data/requirements' },
  { value: 'public_source', label: 'I want to use public data/sources' }
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState<string>('')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema)
  })

  const selectedDomain = watch('domain')

  const validateFiles = (files: File[]) => {
    setFileError('')
    
    // Check number of files
    if (files.length > 5) {
      setFileError('Maximum 5 files allowed')
      return false
    }
    
    // Check total size (50MB = 50 * 1024 * 1024 bytes)
    const totalSize = files.reduce((sum, file) => sum + file.size, 0)
    const maxSize = 50 * 1024 * 1024 // 50MB
    
    if (totalSize > maxSize) {
      setFileError('Total file size must be less than 50MB')
      return false
    }
    
    return true
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || [])
    
    // Combine existing files with new files
    const allFiles = [...selectedFiles, ...newFiles]
    
    if (validateFiles(allFiles)) {
      setSelectedFiles(allFiles)
    } else {
      // Don't clear the input, just don't add the new files
      console.log('File validation failed')
    }
    
    // Clear the input so the same file can be selected again
    e.target.value = ''
  }

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    
    try {
      // Create FormData to handle file upload
      const formData = new FormData()
      
      // Add all form data
      Object.keys(data).forEach(key => {
        if (data[key as keyof LeadFormData] !== undefined && data[key as keyof LeadFormData] !== null) {
          formData.append(key, String(data[key as keyof LeadFormData]))
        }
      })
      
      // Add files if selected
      selectedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file)
      })

      const response = await fetch('/api/lead', {
        method: 'POST',
        body: formData, // Send as FormData instead of JSON
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      toast.success('Thank you! We\'ll get back to you within 24 hours.')
      reset()
      setSelectedFiles([])
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-white">Project Details</CardTitle>
        <CardDescription className="dark:text-gray-300">
          Tell us about your project requirements and we'll provide a detailed quote.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Your full name"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="your.email@example.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                {...register('phone')}
                placeholder="+91 98765 43210"
              />
            </div>
            
            <div>
              <label htmlFor="studyYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Study Year
              </label>
              <select
                id="studyYear"
                {...register('studyYear')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select your year</option>
                {studyYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Information */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Title *
            </label>
            <Input
              id="title"
              {...register('title')}
              placeholder="e.g., AI Chatbot with Document Retrieval"
              className={errors.title ? 'border-red-500' : ''}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Domain *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {domains.map((domain) => (
                <label key={domain} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value={domain}
                    {...register('domain')}
                    className="text-brand-yellow focus:ring-brand-yellow"
                  />
                  <span className="text-sm dark:text-gray-300">{domain}</span>
                </label>
              ))}
            </div>
            {errors.domain && (
              <p className="text-red-500 text-sm mt-1">{errors.domain.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Details *
            </label>
            <Textarea
              id="details"
              {...register('details')}
              placeholder="Describe your project requirements, features needed, and any specific technologies you'd like to use..."
              rows={4}
              className={errors.details ? 'border-red-500' : ''}
            />
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">{errors.details.message}</p>
            )}
          </div>

          {/* Data/Requirements Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Data/Requirements Availability
            </label>
            <div className="space-y-2">
              {datasetOptions.map((option) => (
                <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value={option.value}
                    {...register('dataset')}
                    className="text-brand-yellow focus:ring-brand-yellow"
                  />
                  <span className="text-sm dark:text-gray-300">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="budgetMin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range (Min)
              </label>
              <Input
                id="budgetMin"
                type="number"
                {...register('budgetMin', { valueAsNumber: true })}
                placeholder="3000"
                className={errors.budgetMin ? 'border-red-500' : ''}
              />
              {errors.budgetMin && (
                <p className="text-red-500 text-sm mt-1">{errors.budgetMin.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="budgetMax" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range (Max)
              </label>
              <Input
                id="budgetMax"
                type="number"
                {...register('budgetMax', { valueAsNumber: true })}
                placeholder="15000"
                className={errors.budgetMax ? 'border-red-500' : ''}
              />
              {errors.budgetMax && (
                <p className="text-red-500 text-sm mt-1">{errors.budgetMax.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Deadline
              </label>
              <Input
                id="deadline"
                type="date"
                {...register('deadline')}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="files" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Files (Optional)
            </label>
            <div className="relative">
              <input
                id="files"
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.txt,.zip,.rar"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-brand-yellow dark:hover:border-brand-yellow transition-colors bg-gray-50 dark:bg-gray-800">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {selectedFiles.length > 0 
                        ? `${selectedFiles.length} file(s) selected` 
                        : 'Click to upload or drag and drop'
                      }
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      PDF, DOC, DOCX, TXT, ZIP, RAR (Max 5 files, 50MB total)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {fileError && (
              <p className="text-red-500 text-sm mt-2">{fileError}</p>
            )}
            {selectedFiles.length > 0 && (
              <div className="mt-3 space-y-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Selected files:</p>
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{file.name}</span>
                      <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Project Requirements
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            By submitting this form, you agree to our terms of service and privacy policy.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
