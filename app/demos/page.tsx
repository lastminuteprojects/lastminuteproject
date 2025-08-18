import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MessageSquare, FileText, Eye, Brain } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'AI/ML Demos - Live Interactive Examples',
  description: 'Try our live AI/ML demos including chat, RAG, vision, and text summarization.',
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
    id: 'rag',
    title: 'RAG Document Q&A',
    description: 'Ask questions about uploaded documents with retrieval-augmented generation.',
    icon: FileText,
    features: [
      'Document upload and processing',
      'Vector search and retrieval',
      'Source citations',
      'Multiple file formats'
    ],
    technologies: ['OpenAI Embeddings', 'Pinecone', 'LangChain', 'pgvector'],
    status: 'Live',
    url: '/demos/rag'
  },
  {
    id: 'vision',
    title: 'Computer Vision Demo',
    description: 'Image analysis, classification, and object detection using state-of-the-art models.',
    icon: Eye,
    features: [
      'Image classification',
      'Object detection',
      'Image captioning',
      'Face recognition'
    ],
    technologies: ['PyTorch', 'OpenCV', 'YOLO', 'ResNet'],
    status: 'Live',
    url: '/demos/vision'
  },
  {
    id: 'summarize',
    title: 'Text Summarization',
    description: 'Extractive and abstractive text summarization for documents and articles.',
    icon: Brain,
    features: [
      'Extractive summarization',
      'Abstractive summarization',
      'PDF document support',
      'Customizable length'
    ],
    technologies: ['Transformers', 'BERT', 'T5', 'Hugging Face'],
    status: 'Live',
    url: '/demos/summarize'
  }
]

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Live AI/ML Demos
          </h1>
          <p className="text-xl text-brand-navy mb-8">
            Experience our AI/ML capabilities firsthand with interactive demos
          </p>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo) => {
              const IconComponent = demo.icon
              return (
                <Card key={demo.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-brand-navy" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{demo.title}</CardTitle>
                          <Badge variant="domain" className="mt-2">
                            {demo.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-lg">
                      {demo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-3">Features</h4>
                      <ul className="space-y-2">
                        {demo.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-3">Technologies</h4>
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
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
            How Our Demos Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy">1</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Choose a Demo</h3>
              <p className="text-gray-600">Select from our range of AI/ML demos based on your interests.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy">2</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Interact & Test</h3>
              <p className="text-gray-600">Try out the features, upload files, and see the AI in action.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-navy">3</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Get Inspired</h3>
              <p className="text-gray-600">Use these demos as inspiration for your own AI/ML project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Your Own AI Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom AI/ML solution built for your specific needs
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
