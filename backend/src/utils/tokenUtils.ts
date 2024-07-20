import jwt from 'jsonwebtoken'
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config'

interface Payload {
  userId: string
}

export const createJWT = (payload: Payload): string => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  })
  return token
}

export const verifyJWT = (token: string): Payload => {
  const decoded = jwt.verify(token, JWT_SECRET) as Payload
  return decoded
}
