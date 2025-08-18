import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MessageSquare, FileText, Eye, Brain } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Live Project Demos - Interactive Examples Across All Tech Stacks',
  description: 'Try our live demos across web development, mobile apps, AI/ML, blockchain, and more.',
}

const demos = [
  {
    id: 'chat',
    title: 'AI Chat Demo',
    description: 'Interactive chat with multiple LLM providers including OpenAI, Anthropic, and more.',
    icon: MessageSquare,
    features: [
      'Multiple LLM providers',
      'Real-time streaming responses',
      'Conversation history',
      'Model comparison'
    ],
    technologies: ['OpenAI GPT', 'Anthropic Claude', 'Groq', 'Vercel AI SDK'],
    status: 'Live',
    url: '/demos/chat'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Web App',
    description: 'Full-stack e-commerce platform with payment integration and admin dashboard.',
    icon: FileText,
    features: [
      'Product catalog and search',
      'Shopping cart and checkout',
      'Payment integration',
      'Admin dashboard'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    status: 'Live',
    url: '/demos/ecommerce'
  },
  {
    id: 'taskmanager',
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile app for task management with real-time sync.',
    icon: Eye,
    features: [
      'Task creation and management',
      'Real-time synchronization',
      'Offline functionality',
      'Push notifications'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    status: 'Live',
    url: '/demos/taskmanager'
  },
  {
    id: 'dashboard',
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for business intelligence and data visualization.',
    icon: Brain,
    features: [
      'Real-time data visualization',
      'Interactive charts and graphs',
      'Data filtering and search',
      'Export capabilities'
    ],
    technologies: ['Python', 'Tableau', 'SQL', 'D3.js'],
    status: 'Live',
    url: '/demos/dashboard'
  },
  {
    id: 'defi',
    title: 'DeFi Smart Contract',
    description: 'Decentralized finance application with smart contracts for token exchange.',
    icon: MessageSquare,
    features: [
      'Token exchange functionality',
      'Smart contract integration',
      'Wallet connection',
      'Transaction history'
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'MetaMask'],
    status: 'Live',
    url: '/demos/defi'
  },

]

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-brand-navy mb-6">
            Live Project Demos
          </h1>
          <p className="text-xl text-brand-navy dark:text-brand-navy mb-8">
            Experience our capabilities across all tech stacks with interactive demos
          </p>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => {
              const IconComponent = demo.icon
              return (
                <Card key={demo.id} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-brand-navy dark:text-brand-navy" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl dark:text-white">{demo.title}</CardTitle>
                          <Badge variant="domain" className="mt-2">
                            {demo.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-lg dark:text-gray-300">
                      {demo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-brand-navy dark:text-white mb-3">Features</h4>
                      <ul className="space-y-2">
                        {demo.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-brand-navy dark:text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {demo.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button asChild variant="brand" className="w-full">
                      <Link href={demo.url}>
                        Try Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-8">
            How Our Demos Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy dark:text-brand-navy">1</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2">Choose a Demo</h3>
              <p className="text-gray-600 dark:text-gray-300">Select from our range of demos across all tech stacks.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy dark:text-brand-navy">2</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2">Interact & Test</h3>
              <p className="text-gray-600 dark:text-gray-300">Try out the features and see the technology in action.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy dark:text-brand-navy">3</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2">Get Inspired</h3>
              <p className="text-gray-600 dark:text-gray-300">Use these demos as inspiration for your own project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Your Own Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom solution built for your specific needs across any tech stack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="brand">
              <Link href="/contact">
                Get Started
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
