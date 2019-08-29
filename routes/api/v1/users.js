import express from 'express'
import UsersController from '../../../controllers/api/v1/user'

const router = express.Router()
const userController = new UsersController()

router.get('/', (req, res) => userController.index(req, res))
router.get('/:id', (req, res) => userController.read(req, res))
router.post('/', (req, res) => userController.create(req, res))
router.put('/:id', (req, res) => userController.update(req, res))
router.delete('/:id', (req, res) => userController.delete(req, res))

export default router
