import express from 'express'
import ParticipationsController from '../../../controllers/api/v1/participation'

const router = express.Router()
const participationController = new ParticipationsController()

router.get('/', (req, res) => participationController.index(req, res))
router.get('/:id', (req, res) => participationController.read(req, res))
router.post('/', (req, res) => participationController.create(req, res))
router.put('/:id', (req, res) => participationController.update(req, res))
router.delete('/:id', (req, res) => participationController.delete(req, res))

export default router
