import express from 'express'
import CollabsController from '../../../controllers/api/v1/collab'

const router = express.Router()
const collabController = new CollabsController()

router.get('/', (req, res) => collabController.index(req, res))
router.get('/:id', (req, res) => collabController.read(req, res))
router.post('/', (req, res) => collabController.create(req, res))
router.put('/:id', (req, res) => collabController.update(req, res))
router.delete('/:id', (req, res) => collabController.delete(req, res))

export default router
