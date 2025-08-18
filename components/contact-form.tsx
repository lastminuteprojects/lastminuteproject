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
  'LLM & GenAI',
  'NLP',
  'Computer Vision',
  'Core ML',
  'MLOps',
  'Web Development',
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
  { value: 'provided', label: 'I have my own dataset' },
  { value: 'need_help', label: 'I need help finding/creating data' },
  { value: 'public_source', label: 'I want to use public datasets' }
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
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

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      toast.success('Thank you! We\'ll get back to you within 24 hours.')
      reset()
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

          {/* Dataset Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Dataset Availability
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
            <label htmlFor="fileUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Files (Optional)
            </label>
            <Input
              id="fileUrl"
              type="file"
              accept=".pdf,.doc,.docx,.txt,.zip,.rar"
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-yellow file:text-brand-navy hover:file:bg-brand-yellow/90"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Upload project brief, requirements document, or any reference materials (Max 10MB)
            </p>
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
