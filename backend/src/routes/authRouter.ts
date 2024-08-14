import { Router } from 'express'
const router = Router()

import { login, register, logout } from '../controllers/authController'

//auth routes
router.post('/login', login)
router.get('/log-out', logout)
router.post('/register', register)

export default router
