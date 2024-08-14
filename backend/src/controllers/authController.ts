import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import User from '../models/UserModel'
import { createJWT } from '../utils/tokenUtils'
import { UnauthenticatedError } from '../errors/customErrors'

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ msg: 'user created' })
  } catch (error) {
    next(error)
  }
}

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user || req.body.password !== user.password) {
      throw new UnauthenticatedError('invalid credentials')
    }

    const token = createJWT({ userId: user._id.toString() })

    const oneDay = 1000 * 60 * 60 * 24

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === 'production',
    })

    res.status(StatusCodes.OK).json({ msg: 'user logged in' })
  } catch (error) {
    next(error)
  }
}

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(StatusCodes.CREATED).json({ msg: 'denemelik logout route' })
  } catch (error) {
    next(error)
  }
}
