import * as dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

import authRouter from './routes/authRouter'
import noteRouter from './routes/noteRouter'
import { authenticateUser } from './middlewares/authMiddleware'

const app = express()
const port = 3000
app.use(express.json())

//routers
app.use('/auth', authRouter)
//authenticate router eklenecek
app.use('/note', noteRouter)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})

const startServer = async () => {
  const mongoUrl = process.env.MONGO_URL

  if (!mongoUrl) {
    throw new Error('MONGO_URL is not defined in environment variables')
  }
  try {
    await mongoose.connect(mongoUrl)
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`)
    })
    console.log(`Connected to MongoDB`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

startServer()
