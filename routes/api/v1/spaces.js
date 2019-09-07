import express from 'express'
import SpacesController from '../../../controllers/api/v1/space'

const router = express.Router()
const spaceController = new SpacesController()

router.get('/', (req, res) => spaceController.index(req, res))
router.get('/:id', (req, res) => spaceController.read(req, res))
router.post('/', (req, res) => spaceController.create(req, res))
router.put('/:id', (req, res) => spaceController.update(req, res))
router.delete('/:id', (req, res) => spaceController.delete(req, res))

export default router
