import express from 'express'
import AttendancesController from '../../../controllers/api/v1/attendance'

const router = express.Router()
const attendanceController = new AttendancesController()

router.get('/', (req, res) => attendanceController.index(req, res))
router.get('/:id', (req, res) => attendanceController.read(req, res))
router.post('/', (req, res) => attendanceController.create(req, res))
router.put('/:id', (req, res) => attendanceController.update(req, res))
router.delete('/:id', (req, res) => attendanceController.delete(req, res))

export default router
