import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'AI/ML Projects Portfolio - Last Minute Projects',
  description: 'Explore our portfolio of AI/ML projects including LLM, NLP, Computer Vision, and more.',
}

const projects = [
  {
    id: '1',
    slug: 'ai-chatbot-rag',
    title: 'AI Chatbot with RAG',
    summary: 'Intelligent chatbot with document retrieval and context-aware responses using OpenAI GPT and vector search.',
    domain: 'LLM',
    tags: ['OpenAI', 'RAG', 'Python', 'FastAPI'],
    difficulty: 4,
    featured: true,
    thumbUrl: '/api/placeholder/400/250',
    demoUrl: '/demos/chat',
    repoUrl: 'https://github.com/example/rag-chatbot',
    reportUrl: '/reports/rag-chatbot.pdf'
  },
  {
    id: '2',
    slug: 'image-classification',
    title: 'Image Classification Model',
    summary: 'Deep learning model for multi-class image classification with 95% accuracy using PyTorch and transfer learning.',
    domain: 'CV',
    tags: ['PyTorch', 'CNN', 'Transfer Learning', 'OpenCV'],
    difficulty: 3,
    featured: true,
    thumbUrl: '/api/placeholder/400/250',
    demoUrl: '/demos/vision',
    repoUrl: 'https://github.com/example/image-classifier'
  },
  {
    id: '3',
    slug: 'text-summarization',
    title: 'Text Summarization API',
    summary: 'RESTful API for extractive and abstractive text summarization using BERT and Transformers.',
    domain: 'NLP',
    tags: ['Transformers', 'FastAPI', 'BERT', 'Hugging Face'],
    difficulty: 3,
    featured: false,
    thumbUrl: '/api/placeholder/400/250',
    demoUrl: '/demos/summarize',
    repoUrl: 'https://github.com/example/text-summarizer'
  },
  {
    id: '4',
    slug: 'sentiment-analysis',
    title: 'Social Media Sentiment Analyzer',
    summary: 'Real-time sentiment analysis system for social media posts with dashboard and analytics.',
    domain: 'NLP',
    tags: ['BERT', 'Streamlit', 'Pandas', 'Matplotlib'],
    difficulty: 2,
    featured: false,
    thumbUrl: '/api/placeholder/400/250',
    demoUrl: '/demos/sentiment',
    repoUrl: 'https://github.com/example/sentiment-analyzer'
  },
  {
    id: '5',
    slug: 'recommendation-system',
    title: 'Movie Recommendation System',
    summary: 'Collaborative filtering recommendation system with content-based features and hybrid approach.',
    domain: 'ML',
    tags: ['scikit-learn', 'Pandas', 'NumPy', 'Flask'],
    difficulty: 2,
    featured: false,
    thumbUrl: '/api/placeholder/400/250',
    demoUrl: '/demos/recommendations',
    repoUrl: 'https://github.com/example/movie-recommender'
  },
  {
    id: '6',
    slug: 'ml-pipeline',
    title: 'ML Pipeline with MLOps',
    summary: 'End-to-end ML pipeline with experiment tracking, model serving, and monitoring using MLflow and Docker.',
    domain: 'MLOps',
    tags: ['MLflow', 'Docker', 'FastAPI', 'Prometheus'],
    difficulty: 5,
    featured: true,
    thumbUrl: '/api/placeholder/400/250',
    demoUrl: '/demos/pipeline',
    repoUrl: 'https://github.com/example/ml-pipeline'
  }
]

const domains = ['All', 'LLM', 'NLP', 'CV', 'ML', 'MLOps']
const difficulties = ['All', '1', '2', '3', '4', '5']

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            AI/ML Projects Portfolio
          </h1>
          <p className="text-xl text-brand-navy mb-8">
            Explore our collection of AI/ML projects with complete code, documentation, and live demos.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Domain:</span>
              <div className="flex space-x-1">
                {domains.map((domain) => (
                  <Badge 
                    key={domain} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-brand-yellow hover:text-brand-navy"
                  >
                    {domain}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Difficulty:</span>
              <div className="flex space-x-1">
                {difficulties.map((difficulty) => (
                  <Badge 
                    key={difficulty} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-brand-yellow hover:text-brand-navy"
                  >
                    {difficulty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-brand-yellow text-brand-navy">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="domain">{project.domain}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      {project.difficulty}/5
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.demoUrl && (
                      <Button asChild variant="brand" size="sm" className="flex-1">
                        <Link href={project.demoUrl}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Try Demo
                        </Link>
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.repoUrl} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/projects/${project.slug}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            Want a Similar Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom AI/ML project built for your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="brand">
              <Link href="/contact">
                Get Your Quote
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
