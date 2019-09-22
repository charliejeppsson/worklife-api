import express from 'express'
import authRoutes from './auth'

const router = express.Router()

router.use('/authenticate', authRoutes)

export default router
