import express from 'express'
import companyRoutes from './companies'
import coworkingUnitRoutes from './coworkingUnits'
import userRoutes from './users'
import spaceRoutes from './spaces'
import eventRoutes from './events'
import attendanceRoutes from './attendances'

const router = express.Router()

router.use('/companies', companyRoutes)
router.use('/coworking-units', coworkingUnitRoutes) 
router.use('/users', userRoutes)
router.use('/spaces', spaceRoutes)
router.use('/events', eventRoutes)
router.use('/attendances', attendanceRoutes)

export default router
