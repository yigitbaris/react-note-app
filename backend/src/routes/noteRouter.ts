import { Router } from 'express'
const router = Router()

import {
  createNote,
  denemelikNot,
  getNote,
} from '../controllers/noteController'

//note routes
router.get('/not-denemelik', denemelikNot)
router.get('/getNote', getNote)
router.post('/createNote', createNote)

export default router
