import { Router } from 'express'
const router = Router()

import {
  createNote,
  denemelikNot,
  getNote,
} from '../controllers/noteController'

//note routes
router.get('/not-denemelik', denemelikNot)
router.get('/get-note', getNote)
router.post('/create-note', createNote)

export default router
