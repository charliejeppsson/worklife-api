import express from 'express'
import companyRoutes from './companies'
import coworkingUnitRoutes from './coworkingUnits'
import userRoutes from './users'

const router = express.Router()

router.use('/companies', companyRoutes)
router.use('/coworking-units', coworkingUnitRoutes) 
router.use('/users', userRoutes)

export default router