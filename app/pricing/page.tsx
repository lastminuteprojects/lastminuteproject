"use client"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, Calculator, Info } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function PricingPage() {
  const [messagesPerDay, setMessagesPerDay] = useState(100)
  const [avgTokens, setAvgTokens] = useState(500)
  const [selectedProvider, setSelectedProvider] = useState('openai')

  const pricingTiers = [
    {
      name: 'Mini AI',
      description: 'Simple ML models and basic AI applications',
      price: '₹3k - ₹6k',
      features: [
        'Basic ML models (classification, regression)',
        'Simple data preprocessing',
        'Basic documentation',
        'Email support',
                 'Standard delivery (1 week)',
         'Express delivery (3-4 days) available'
      ],
      examples: ['Email spam classifier', 'Sales prediction model', 'Basic chatbot'],
      bestFor: 'Students starting with ML'
    },
    {
      name: 'Standard AI',
      description: 'Advanced ML models and AI applications',
      price: '₹7k - ₹15k',
      features: [
        'Advanced ML models (NLP, CV, recommendations)',
        'Data preprocessing and feature engineering',
        'Comprehensive documentation',
        'Live demo and deployment',
        'Priority support',
                 'Standard delivery (1 week)',
         'Express delivery (3-4 days) available'
      ],
      examples: ['Sentiment analysis system', 'Image classification', 'Recommendation engine'],
      bestFor: 'Intermediate projects with complex requirements'
    },
    {
      name: 'Advanced LLM/RAG',
      description: 'Complex AI systems and LLM applications',
      price: '₹16k+',
      features: [
        'LLM integration and RAG systems',
        'Custom AI agents and workflows',
        'Advanced deployment and monitoring',

        '30 days post-delivery support',
                 'Standard delivery (1 week)',
         'Express delivery (3-4 days) available'
      ],
      examples: ['RAG chatbot', 'AI agent system', 'Multi-modal AI app'],
      bestFor: 'Advanced projects requiring cutting-edge AI'
    }
  ]

  const providers = {
    openai: { name: 'OpenAI GPT-4', costPer1kTokens: 0.03 },
    anthropic: { name: 'Anthropic Claude', costPer1kTokens: 0.015 },
    groq: { name: 'Groq (Fast)', costPer1kTokens: 0.01 },
    huggingface: { name: 'Hugging Face', costPer1kTokens: 0.005 }
  }

  const calculateMonthlyCost = () => {
    const provider = providers[selectedProvider as keyof typeof providers]
    const tokensPerDay = messagesPerDay * avgTokens
    const tokensPerMonth = tokensPerDay * 30
    const costPerMonth = (tokensPerMonth / 1000) * provider.costPer1kTokens
    return costPerMonth
  }

  const monthlyCost = calculateMonthlyCost()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-brand-navy mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-brand-navy dark:text-brand-navy mb-8">
            Flexible pricing tiers to match your project needs and budget
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              All plans include complete code, documentation, and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={tier.name} className={`relative ${index === 1 ? 'border-brand-yellow border-2' : ''}`}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-yellow text-brand-navy dark:text-brand-navy">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl dark:text-white">{tier.name}</CardTitle>
                  <CardDescription className="text-lg dark:text-gray-300">{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-brand-navy dark:text-brand-navy">{tier.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-white mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-navy dark:text-white mb-3">Example Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {tier.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Best for</p>
                    <p className="text-sm font-medium text-brand-navy dark:text-white">{tier.bestFor}</p>
                  </div>
                  
                  <Button asChild variant={index === 1 ? "brand" : "outline"} className="w-full">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Token Cost Estimator */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              Token Cost Estimator
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Estimate your monthly costs for LLM-based applications
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Calculator className="h-6 w-6 text-brand-yellow mr-3" />
                <CardTitle className="dark:text-white">Cost Calculator</CardTitle>
              </div>
              <CardDescription className="dark:text-gray-300">
                Calculate estimated monthly costs for different LLM providers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Messages per Day
                  </label>
                  <Input
                    type="number"
                    value={messagesPerDay}
                    onChange={(e) => setMessagesPerDay(Number(e.target.value))}
                    min="1"
                    max="10000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Average Tokens per Message
                  </label>
                  <Input
                    type="number"
                    value={avgTokens}
                    onChange={(e) => setAvgTokens(Number(e.target.value))}
                    min="1"
                    max="4000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    LLM Provider
                  </label>
                  <select
                    value={selectedProvider}
                    onChange={(e) => setSelectedProvider(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {Object.entries(providers).map(([key, provider]) => (
                      <option key={key} value={key}>
                        {provider.name} (${provider.costPer1kTokens}/1k tokens)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="bg-brand-yellow/10 p-6 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Estimated Monthly Cost</p>
                  <p className="text-3xl font-bold text-brand-navy dark:text-brand-navy">
                    ${monthlyCost.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Based on {messagesPerDay} messages/day × {avgTokens} tokens × 30 days
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">Educational Note</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      These are estimated costs for LLM API usage. Actual costs may vary based on your specific implementation, 
                      prompt engineering, and usage patterns. We help optimize costs through efficient prompting and caching strategies.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              What Affects Pricing?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Several factors influence the final project cost
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Project Complexity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Data preprocessing requirements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Model complexity and training time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Integration requirements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Performance requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Timeline & Urgency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                                     <li className="flex items-start">
                     <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                     <span className="text-sm text-gray-600 dark:text-gray-300">Standard delivery (1 week)</span>
                   </li>
                   <li className="flex items-start">
                     <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                     <span className="text-sm text-gray-600 dark:text-gray-300">Express delivery (3-4 days)</span>
                   </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Custom timeline requirements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Priority support and updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a personalized quote based on your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="brand">
              <Link href="/contact">
                Get Your Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
