import express from 'express'

import userRoutes from './users'
import spaceRoutes from './spaces'
import eventRoutes from './events'
import attendanceRoutes from './attendances'
import collabRoutes from './collabs'
import participationRoutes from './participations'
import newsPostRoutes from './newsPosts'

const router = express.Router()

router.use('/users', userRoutes)
router.use('/spaces', spaceRoutes)
router.use('/events', eventRoutes)
router.use('/attendances', attendanceRoutes)
router.use('/collabs', collabRoutes)
router.use('/participations', participationRoutes)
router.use('/news-posts', newsPostRoutes)

export default router
