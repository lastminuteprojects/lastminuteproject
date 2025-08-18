import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Bot, Brain, Eye, Database, Cpu, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'AI/ML Services - LLM, NLP, Computer Vision & More',
  description: 'Comprehensive AI/ML services including LLM & GenAI, NLP, Computer Vision, Core ML, and MLOps for students.',
}

const services = [
  {
    id: 'llm',
    title: 'LLM & GenAI',
    description: 'Build intelligent chatbots, RAG systems, AI agents, and generative AI applications',
    icon: Bot,
    features: [
      'Custom chatbots with context awareness',
      'RAG (Retrieval-Augmented Generation) systems',
      'AI agents and autonomous workflows',
      'Text generation and content creation',
      'Cost optimization and evaluation frameworks',
      'Multi-modal AI applications'
    ],
    examples: ['Customer support chatbot', 'Document Q&A system', 'AI writing assistant', 'Code generation tools'],
    technologies: ['OpenAI GPT', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'Hugging Face'],
    priceRange: '₹7k - ₹25k+',
    difficulty: 'Advanced'
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Text analysis, classification, sentiment analysis, and language understanding systems',
    icon: Brain,
    features: [
      'Text classification and categorization',
      'Named Entity Recognition (NER)',
      'Sentiment analysis and opinion mining',
      'Question answering systems',
      'Text summarization and extraction',
      'Language translation and processing'
    ],
    examples: ['Email spam classifier', 'Social media sentiment analyzer', 'Document summarizer', 'Entity extraction system'],
    technologies: ['BERT', 'RoBERTa', 'Transformers', 'spaCy', 'NLTK', 'FastAPI'],
    priceRange: '₹5k - ₹15k',
    difficulty: 'Intermediate'
  },
  {
    id: 'cv',
    title: 'Computer Vision',
    description: 'Image and video analysis, object detection, and visual AI applications',
    icon: Eye,
    features: [
      'Object detection and recognition',
      'Image classification and segmentation',
      'Face recognition and analysis',
      'OCR (Optical Character Recognition)',
      'Video analysis and processing',
      'Medical imaging applications'
    ],
    examples: ['Product detection system', 'Face recognition app', 'Document scanner', 'Quality inspection system'],
    technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'ResNet', 'EfficientNet'],
    priceRange: '₹6k - ₹20k',
    difficulty: 'Intermediate'
  },
  {
    id: 'ml',
    title: 'Core Machine Learning',
    description: 'Traditional ML models for tabular data, recommendations, and predictive analytics',
    icon: Cpu,
    features: [
      'Tabular data analysis and modeling',
      'Recommendation systems',
      'Time series forecasting',
      'Regression and classification',
      'Clustering and pattern recognition',
      'Feature engineering and selection'
    ],
    examples: ['Sales prediction model', 'Movie recommendation system', 'Customer churn predictor', 'Fraud detection'],
    technologies: ['scikit-learn', 'XGBoost', 'LightGBM', 'Pandas', 'NumPy', 'Matplotlib'],
    priceRange: '₹4k - ₹12k',
    difficulty: 'Beginner'
  },
  {
    id: 'mlops',
    title: 'MLOps & Deployment',
    description: 'End-to-end ML pipeline development, deployment, and monitoring',
    icon: Zap,
    features: [
      'Data pipeline development',
      'Model training and experiment tracking',
      'Model deployment and serving',
      'Performance monitoring and alerting',
      'CI/CD for ML systems',
      'Scalable infrastructure setup'
    ],
    examples: ['Automated ML pipeline', 'Model serving API', 'A/B testing framework', 'ML monitoring dashboard'],
    technologies: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'AWS/GCP', 'FastAPI'],
    priceRange: '₹8k - ₹25k+',
    difficulty: 'Advanced'
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Full-stack web applications with AI/ML integration',
    icon: Database,
    features: [
      'React/Next.js frontend development',
      'Backend API development',
      'AI/ML model integration',
      'Database design and optimization',
      'Cloud deployment and hosting',
      'Performance optimization'
    ],
    examples: ['AI-powered web app', 'Dashboard with ML insights', 'Real-time data visualization', 'E-commerce with recommendations'],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Vercel'],
    priceRange: '₹5k - ₹18k',
    difficulty: 'Intermediate'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-brand-navy mb-6">
            AI/ML Services
          </h1>
          <p className="text-xl text-brand-navy dark:text-brand-navy mb-8">
            From simple ML models to complex AI systems - we build it all with complete documentation and support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
