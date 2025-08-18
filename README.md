# Last Minute Projects - AI/ML Website

A production-ready, AI/ML-first website for "Last Minute Projects" - a business that builds AI/ML & LLM projects for students.

## 🚀 Features

- **Next.js 14+** with App Router and TypeScript
- **AI/ML Focus** with live demos and comprehensive services
- **Modern UI** with Tailwind CSS and shadcn/ui components
- **Full-Stack** with Prisma ORM and Vercel Postgres
- **Authentication** with NextAuth (Email + Google OAuth)
- **Email Integration** with Resend
- **Slack Notifications** for lead management
- **File Upload** with Vercel Blob
- **Rate Limiting** with Upstash Redis
- **SEO Optimized** with metadata and sitemap
- **Analytics** with Vercel Analytics and Speed Insights

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI, Lucide React
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: Vercel Postgres (with pgvector support)
- **Authentication**: NextAuth.js
- **Email**: Resend
- **File Storage**: Vercel Blob
- **Rate Limiting**: Upstash Redis
- **Deployment**: Vercel
- **Monitoring**: Vercel Analytics, Speed Insights

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Vercel account
- PostgreSQL database (Vercel Postgres recommended)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd last-minute-projects
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Copy the environment example file:

```bash
cp env.example .env.local
```

Fill in your environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/last_minute_projects"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"

# Slack Integration (Optional)
SLACK_WEBHOOK_URL="your-slack-webhook-url"

# File Upload (Vercel Blob)
BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"

# AI/ML Providers (Optional - feature flagged)
OPENAI_API_KEY=""
ANTHROPIC_API_KEY=""
GOOGLE_GENERATIVE_AI_API_KEY=""
GROQ_API_KEY=""
HUGGINGFACE_API_KEY=""

# Vector Database (Optional)
PINECONE_API_KEY=""
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

### 4. Database Setup

Generate Prisma client and run migrations:

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to database (for development)
pnpm db:push

# Or run migrations (for production)
pnpm db:migrate
```

### 5. Seed Database (Optional)

```bash
pnpm db:seed
```

### 6. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (public)/          # Public routes
│   │   ├── page.tsx       # Home page
│   │   ├── services/      # Services page
│   │   ├── pricing/       # Pricing page
│   │   ├── projects/      # Projects gallery
│   │   ├── demos/         # AI demos
│   │   ├── blog/          # Blog posts
│   │   └── contact/       # Contact page
│   ├── (admin)/           # Protected admin routes
│   │   └── admin/         # Admin dashboard
│   ├── api/               # API routes
│   │   ├── lead/          # Lead form endpoint
│   │   ├── chat/          # AI chat endpoint
│   │   ├── rag/           # RAG endpoints
│   │   └── upload/        # File upload endpoint
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation
│   ├── footer.tsx        # Footer
│   └── contact-form.tsx  # Contact form
├── lib/                  # Utility functions
│   ├── db.ts            # Prisma client
│   ├── auth.ts          # NextAuth config
│   ├── utils.ts         # Utility functions
│   ├── validations.ts   # Zod schemas
│   └── rate-limit.ts    # Rate limiting
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma schema
├── public/              # Static assets
│   ├── logo.svg         # Main logo
│   └── icon.svg         # Favicon
└── types/               # TypeScript types
```

## 🎯 Key Features

### 1. AI/ML Services
- **LLM & GenAI**: Chatbots, RAG systems, AI agents
- **NLP**: Text classification, sentiment analysis, NER
- **Computer Vision**: Object detection, image classification
- **Core ML**: Traditional ML models, recommendations
- **MLOps**: Pipeline development, deployment, monitoring

### 2. Live Demos
- **Chat Demo**: Interactive LLM chat with multiple providers
- **RAG Demo**: Document Q&A with vector search
- **Vision Demo**: Image analysis and classification
- **Summarize Demo**: Text and PDF summarization

### 3. Lead Management
- Comprehensive lead form with validation
- Email notifications via Resend
- Slack integration for instant notifications
- Rate limiting for API protection

### 4. Admin Dashboard
- Protected admin routes with NextAuth
- Lead management and status updates
- Project CRUD operations
- Blog post management
- RAG index management

## 🚀 Deployment

### Vercel Deployment

1. **Connect Repository**
   - Push your code to GitHub
   - Connect repository to Vercel

2. **Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Set `NEXTAUTH_URL` to your production domain

3. **Database Setup**
   - Create Vercel Postgres database
   - Update `DATABASE_URL` in environment variables
   - Run migrations: `pnpm db:migrate`

4. **Deploy**
   - Vercel will automatically deploy on push to main branch
   - Monitor deployment logs for any issues

### Environment Variables for Production

```env
# Required
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"

# Optional but recommended
RESEND_API_KEY="your-resend-key"
BLOB_READ_WRITE_TOKEN="your-blob-token"
SLACK_WEBHOOK_URL="your-slack-webhook"

# AI providers (feature flagged)
OPENAI_API_KEY="your-openai-key"
ANTHROPIC_API_KEY="your-anthropic-key"
```

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Database
pnpm db:generate      # Generate Prisma client
pnpm db:push          # Push schema to database
pnpm db:migrate       # Run migrations
pnpm db:seed          # Seed database
pnpm db:studio        # Open Prisma Studio

# Type checking
pnpm type-check       # Run TypeScript check
```

### Adding New Features

1. **New Pages**: Add to `app/(public)/` or `app/(admin)/`
2. **API Routes**: Add to `app/api/`
3. **Components**: Add to `components/`
4. **Database Models**: Update `prisma/schema.prisma`
5. **Validations**: Add to `lib/validations.ts`

## 🎨 Customization

### Branding
- Update colors in `tailwind.config.js`
- Replace logo files in `public/`
- Modify brand colors in `app/globals.css`

### Content
- Update copy in page components
- Modify services in `app/services/page.tsx`
- Update pricing in `app/pricing/page.tsx`

### Styling
- Customize shadcn/ui components in `components/ui/`
- Add custom CSS in `app/globals.css`
- Modify Tailwind config for brand colors

## 🔒 Security

- **Rate Limiting**: API endpoints are rate-limited
- **Input Validation**: All forms use Zod validation
- **Authentication**: Protected routes with NextAuth
- **CORS**: Configured for production domains
- **Environment Variables**: Sensitive data in env vars

## 📊 Analytics & Monitoring

- **Vercel Analytics**: Automatic performance tracking
- **Speed Insights**: Core Web Vitals monitoring
- **Error Tracking**: Built-in error boundaries
- **SEO**: Optimized metadata and sitemap

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: hello@lastminuteprojects.com
- Instagram: @lastminuteprojects
- Website: https://lastminuteprojects.com

## 🚀 What's Next

- [ ] Add more AI demo integrations
- [ ] Implement advanced RAG features
- [ ] Add payment integration
- [ ] Create mobile app
- [ ] Add more language support
