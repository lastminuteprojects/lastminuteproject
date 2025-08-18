import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// For development without Redis, use a simple in-memory limiter
const memoryStore = new Map<string, { count: number; resetTime: number }>()

const simpleRateLimit = async (identifier: string) => {
  const now = Date.now()
  const windowMs = 10 * 1000 // 10 seconds
  const maxRequests = 5

  const record = memoryStore.get(identifier)
  
  if (!record || now > record.resetTime) {
    memoryStore.set(identifier, { count: 1, resetTime: now + windowMs })
    return { success: true }
  }

  if (record.count >= maxRequests) {
    return { success: false }
  }

  record.count++
  return { success: true }
}

// Use Upstash if available, otherwise fall back to simple memory limiter
export const rateLimit = async (identifier: string) => {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
      
      const ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, '10 s'),
        analytics: true,
        prefix: '@upstash/ratelimit',
      })
      
      return await ratelimit.limit(identifier)
    } catch (error) {
      console.error('Redis rate limiting failed, falling back to memory:', error)
      return await simpleRateLimit(identifier)
    }
  }
  
  return await simpleRateLimit(identifier)
}
