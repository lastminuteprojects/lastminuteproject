import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Bot, Brain, Eye, Database, Cpu, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Complete Software Development Services - Web, Mobile, AI/ML & More',
  description: 'Comprehensive software development services including Web Development, Mobile Apps, AI/ML, Blockchain, IoT, and Data Analytics for students.',
}

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Full-stack web applications with modern frameworks and responsive design',
    icon: Database,
    features: [
      'Frontend development with React/Vue/Angular',
      'Backend APIs with Node.js/Python/Java',
      'Database design and optimization',
      'E-commerce and business applications',
      'Real-time features and WebSockets',
      'Progressive Web Apps (PWA)'
    ],
    examples: ['E-commerce platform', 'Social media app', 'Project management tool', 'Booking system'],
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'],
    priceRange: '₹5k - ₹20k',
    difficulty: 'Intermediate'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Cross-platform and native mobile applications for iOS and Android',
    icon: Zap,
    features: [
      'Cross-platform apps with React Native/Flutter',
      'Native iOS and Android development',
      'Push notifications and real-time sync',
      'Offline functionality and data sync',
      'Mobile payment integration',
      'App store deployment and optimization'
    ],
    examples: ['Task management app', 'Fitness tracker', 'Food delivery app', 'Social networking app'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
    priceRange: '₹6k - ₹25k',
    difficulty: 'Intermediate'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Intelligent applications with AI/ML, specializing in LLM and computer vision',
    icon: Brain,
    features: [
      'LLM & Generative AI applications',
      'Computer vision and image processing',
      'Natural language processing (NLP)',
      'Predictive analytics and ML models',
      'Recommendation systems',
      'AI-powered chatbots and assistants'
    ],
    examples: ['AI chatbot with RAG', 'Image classification system', 'Sentiment analysis tool', 'Recommendation engine'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'scikit-learn'],
    priceRange: '₹7k - ₹30k',
    difficulty: 'Advanced'
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    description: 'Decentralized applications, smart contracts, and Web3 solutions',
    icon: Cpu,
    features: [
      'Smart contract development',
      'DeFi applications and protocols',
      'NFT marketplaces and collections',
      'DApp frontend development',
      'Blockchain integration APIs',
      'Cryptocurrency payment systems'
    ],
    examples: ['DeFi lending platform', 'NFT marketplace', 'Token exchange', 'DAO governance system'],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'Hardhat', 'MetaMask'],
    priceRange: '₹8k - ₹35k',
    difficulty: 'Advanced'
  },
  {
    id: 'data',
    title: 'Data Analytics & BI',
    description: 'Data processing, analytics dashboards, and business intelligence solutions',
    icon: Eye,
    features: [
      'Data visualization and dashboards',
      'ETL pipelines and data processing',
      'Business intelligence reports',
      'Real-time analytics',
      'Predictive analytics',
      'Data warehouse design'
    ],
    examples: ['Sales analytics dashboard', 'Customer behavior analysis', 'Financial reporting system', 'Performance monitoring'],
    technologies: ['Python', 'Tableau', 'Power BI', 'SQL', 'Apache Spark', 'Pandas'],
    priceRange: '₹4k - ₹18k',
    difficulty: 'Intermediate'
  },

]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-brand-navy mb-6">
            Complete Software Development Services
          </h1>
                     <p className="text-xl text-brand-navy dark:text-brand-navy mb-8">
             From web apps to AI/ML, mobile to blockchain - we build it all with complete documentation and support.
           </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-brand-navy dark:text-brand-navy" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <Badge variant="domain" className="mt-2">
                            {service.difficulty}
                          </Badge>
                        </div>
                      </div>
                                              <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Starting from</p>
                          <p className="text-lg font-bold text-brand-navy dark:text-white">{service.priceRange}</p>
                        </div>
                    </div>
                    <CardDescription className="text-lg dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-brand-navy dark:text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className="font-semibold text-brand-navy dark:text-white mb-3">Example Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.examples.map((example, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-brand-navy dark:text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button asChild variant="brand" className="w-full">
                      <Link href={`/contact?service=${service.id}`}>
                        Get Quote for {service.title}
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

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-8">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy dark:text-brand-navy">1</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2">Requirements Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">We analyze your requirements, suggest the best approach, and provide a detailed project plan.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy dark:text-brand-navy">2</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2">Development & Testing</h3>
              <p className="text-gray-600 dark:text-gray-300">We build your project with regular updates, thorough testing, and performance optimization.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy dark:text-brand-navy">3</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2">Delivery & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Complete code, documentation, demo, and 30 days of support to ensure your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your AI Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and detailed quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="brand">
              <Link href="/contact">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/demos">
                Try Our Demos
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
