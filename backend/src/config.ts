import * as dotenv from 'dotenv'
dotenv.config()

if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
  throw new Error(
    'JWT_SECRET and JWT_EXPIRES_IN must be defined in the environment variables'
  )
}

export const JWT_SECRET = process.env.JWT_SECRET as string
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as string
