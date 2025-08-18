import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

const featuredProjects = [
  {
    id: '1',
    title: 'AI Chatbot with RAG',
    summary: 'Intelligent chatbot with document retrieval and context-aware responses',
    domain: 'LLM',
    tags: ['OpenAI', 'RAG', 'Python'],
    difficulty: 4,
    demoUrl: '/demos/chat',
  },
  {
    id: '2',
    title: 'Image Classification Model',
    summary: 'Deep learning model for multi-class image classification with 95% accuracy',
    domain: 'CV',
    tags: ['PyTorch', 'CNN', 'Transfer Learning'],
    difficulty: 3,
    demoUrl: '/demos/vision',
  },
  {
    id: '3',
    title: 'Text Summarization API',
    summary: 'RESTful API for extractive and abstractive text summarization',
    domain: 'NLP',
    tags: ['Transformers', 'FastAPI', 'BERT'],
    difficulty: 3,
    demoUrl: '/demos/summarize',
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Share Requirements',
    description: 'Tell us about your project idea, timeline, and any specific requirements.',
    icon: '📝',
  },
  {
    step: 2,
    title: 'Scope & Quote',
    description: 'We analyze your requirements and provide a detailed quote with timeline.',
    icon: '💰',
  },
  {
    step: 3,
    title: 'Build & Develop',
            description: 'We build your project with daily updates and progress reports.',
    icon: '⚡',
  },
  {
    step: 4,
    title: 'Delivery & Demo',
    description: 'Get your working code, documentation, and live demo.',
    icon: '🎯',
  },
  {
    step: 5,
    title: 'Support & Q&A',
    description: 'We provide post-delivery support and answer all your questions.',
    icon: '🤝',
  },
]

const faqs = [
  {
    question: 'What datasets do you work with?',
    answer: 'We work with any dataset you provide, help you find public datasets, or create synthetic data when needed. We ensure data privacy and can sign NDAs.',
  },
  {
    question: 'How long does a typical project take?',
            answer: 'All projects are completed in 1 week. For urgent projects, we offer express delivery in 3-4 days. We provide daily updates and can work with your deadlines.',
  },
  {
    question: 'Is the code original and plagiarism-free?',
    answer: 'Yes, all code is written from scratch. We use best practices and can explain every line of code to ensure you understand the implementation.',
  },
  {
    question: 'What documentation do you provide?',
    answer: 'We provide comprehensive documentation including setup instructions, API documentation, code comments, and a detailed project report.',
  },
  {
    question: 'Do you provide post-delivery support?',
    answer: 'Yes, we provide 30 days of free support after delivery. We can also help with deployment, modifications, and future enhancements.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy dark:text-brand-navy mb-6">
            AI/ML & LLM Projects for Students
            <br />
            <span className="text-white">—any stack, on time.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-navy dark:text-brand-navy mb-8 max-w-3xl mx-auto">
            From idea to working code with docs, demos and explanation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/demos">
                Try Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://instagram.com/last_minuteprojects" target="_blank">
                Chat on Instagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-brand-yellow mb-2" />
              <p className="font-semibold text-brand-navy dark:text-white">Any Language</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-brand-yellow mb-2" />
              <p className="font-semibold text-brand-navy dark:text-white">Flexible Pricing</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-brand-yellow mb-2" />
              <p className="font-semibold text-brand-navy dark:text-white">Fast Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-brand-yellow mb-2" />
              <p className="font-semibold text-brand-navy dark:text-white">Full Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              Featured AI Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of our recent AI/ML projects. Each comes with complete code, documentation, and live demos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="domain">{project.domain}</Badge>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      {project.difficulty}/5
                    </div>
                  </div>
                  <CardTitle className="text-xl dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{project.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="brand" className="w-full">
                    <Link href={project.demoUrl}>
                      Try Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              How It Works
            </h2>
                         <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
               Simple 5-step process from idea to working project. Express delivery available for urgent projects.
             </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto relative">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="text-center relative z-10 mb-8 md:mb-0 flex-1">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-lg relative z-20">
                  {step.icon}
                </div>
                {/* Connecting line between circles */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-brand-yellow z-10" />
                )}
                <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-2">
                  {step.step}. {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your AI Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started today with a free consultation and quote.
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
