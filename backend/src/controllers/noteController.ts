import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import Note from '../models/NoteModel'
import { log } from 'console'

export const denemelikNot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(StatusCodes.OK).json({ msg: 'denelik note route' })
}

export const createNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.createdBy = req.userNumber.userId

    const note = await Note.create(req.body)
    res.status(StatusCodes.CREATED).json({ note })
  } catch (error) {
    next(error)
  }
}
export const getNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const note = await Note.findById(req.params.id)
  res.status(StatusCodes.CREATED).json({ note })
}
