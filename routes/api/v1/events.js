import express from 'express'
import EventsController from '../../../controllers/api/v1/event'

const router = express.Router()
const eventController = new EventsController()

router.get('/', (req, res) => eventController.index(req, res))
router.get('/:id', (req, res) => eventController.read(req, res))
router.post('/', (req, res) => eventController.create(req, res))
router.put('/:id', (req, res) => eventController.update(req, res))
router.delete('/:id', (req, res) => eventController.delete(req, res))

export default router
