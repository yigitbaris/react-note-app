import { Request, Response, NextFunction } from 'express'
import { UnauthenticatedError } from '../errors/customErrors'
import { verifyJWT } from '../utils/tokenUtils'

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies

  if (!token) {
    throw new UnauthenticatedError('authentication invalid')
  }

  try {
    const { userId } = verifyJWT(token)
    req.user = { userId }
    next()
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid')
  }
}
