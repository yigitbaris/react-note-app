import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import Note from '../models/NoteModel'

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
    //  const userId = req.user

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
