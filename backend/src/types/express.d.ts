import { Request } from 'express'

interface UserPayload {
  userId: string
  role?: string
  testUser?: boolean
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserPayload
  }
}
