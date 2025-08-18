import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  studyYear: z.string().optional(),
  domain: z.string().optional(),
  title: z.string().min(5, 'Project title must be at least 5 characters'),
  details: z.string().min(20, 'Project details must be at least 20 characters'),
  dataset: z.enum(['provided', 'need_help', 'public_source']).optional(),
  budgetMin: z.number().min(1000, 'Minimum budget must be at least ₹1,000').optional(),
  budgetMax: z.number().min(1000, 'Maximum budget must be at least ₹1,000').optional(),
  deadline: z.string().optional(),
  fileUrl: z.string().url().optional(),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const projectSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  summary: z.string().min(20, 'Summary must be at least 20 characters'),
  domain: z.enum(['LLM', 'RAG', 'NLP', 'CV', 'ML', 'FS']),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  difficulty: z.number().min(1).max(5),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  demoUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  reportUrl: z.string().url().optional(),
})

export const postSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters'),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  published: z.boolean().default(true),
})

export const chatSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
  model: z.string().optional(),
})

export const ragQuerySchema = z.object({
  query: z.string().min(1, 'Query cannot be empty'),
  topK: z.number().min(1).max(10).default(3),
})
