import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'AI/ML Blog - Latest Insights and Tutorials',
  description: 'Read our latest articles on AI/ML, tutorials, case studies, and industry insights.',
}

const blogPosts = [
  {
    id: '1',
    slug: 'getting-started-with-llm-projects',
    title: 'Getting Started with LLM Projects: A Complete Guide',
    excerpt: 'Learn how to build your first LLM project from scratch, including setup, API integration, and best practices.',
    content: 'Full article content here...',
    author: 'AI Team',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    tags: ['LLM', 'Tutorial', 'Beginner'],
    featured: true
  },
  {
    id: '2',
    slug: 'rag-implementation-guide',
    title: 'Building RAG Systems: Implementation Guide',
    excerpt: 'Step-by-step guide to implementing Retrieval-Augmented Generation systems for document Q&A.',
    content: 'Full article content here...',
    author: 'AI Team',
    publishedAt: '2024-01-10',
    readTime: '12 min read',
    tags: ['RAG', 'NLP', 'Advanced'],
    featured: true
  },
  {
    id: '3',
    slug: 'computer-vision-best-practices',
    title: 'Computer Vision Best Practices for Students',
    excerpt: 'Essential tips and best practices for building computer vision projects in academic settings.',
    content: 'Full article content here...',
    author: 'AI Team',
    publishedAt: '2024-01-05',
    readTime: '10 min read',
    tags: ['Computer Vision', 'Best Practices', 'Students'],
    featured: false
  },
  {
    id: '4',
    slug: 'mlops-for-students',
    title: 'MLOps for Students: From Model to Production',
    excerpt: 'Introduction to MLOps concepts and tools for students working on ML projects.',
    content: 'Full article content here...',
    author: 'AI Team',
    publishedAt: '2023-12-28',
    readTime: '15 min read',
    tags: ['MLOps', 'Deployment', 'Production'],
    featured: false
  },
  {
    id: '5',
    slug: 'nlp-project-ideas',
    title: '10 NLP Project Ideas for Your Portfolio',
    excerpt: 'Creative NLP project ideas that will help you build a strong portfolio and learn practical skills.',
    content: 'Full article content here...',
    author: 'AI Team',
    publishedAt: '2023-12-20',
    readTime: '6 min read',
    tags: ['NLP', 'Projects', 'Portfolio'],
    featured: false
  },
  {
    id: '6',
    slug: 'ai-cost-optimization',
    title: 'AI Cost Optimization: Tips for Students',
    excerpt: 'How to build AI projects on a budget without compromising on quality and performance.',
    content: 'Full article content here...',
    author: 'AI Team',
    publishedAt: '2023-12-15',
    readTime: '7 min read',
    tags: ['Cost Optimization', 'Budget', 'Tips'],
    featured: false
  }
]

const categories = [
  'All',
  'LLM',
  'NLP', 
  'Computer Vision',
  'MLOps',
  'Tutorial',
  'Best Practices',
  'Projects'
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-yellow to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-brand-navy mb-6">
            AI/ML Blog
          </h1>
          <p className="text-xl text-brand-navy dark:text-brand-navy mb-8">
            Latest insights, tutorials, and guides for AI/ML students and enthusiasts
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-brand-yellow hover:text-brand-navy dark:text-gray-300 dark:border-gray-600 dark:hover:bg-brand-yellow dark:hover:text-brand-navy"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our most popular and comprehensive guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl dark:text-white">{post.title}</CardTitle>
                  <CardDescription className="text-lg dark:text-gray-300">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs dark:text-gray-300 dark:border-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="brand" className="w-full">
                    <Link href={`/blog/${post.slug}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay updated with the latest in AI/ML
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl dark:text-white">{post.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs dark:text-gray-300 dark:border-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest AI/ML insights and tutorials delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow dark:placeholder-gray-400"
            />
            <Button variant="brand">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
