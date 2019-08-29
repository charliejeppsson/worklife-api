import express from 'express'
import UsersController from '../../../controllers/user'

const router = express.Router()

router.get('/', UsersController.getUsers)
router.get('/:userId', UsersController.getUser)
router.post('/', UsersController.createUser)
router.put('/:userId', UsersController.updateUser)
router.delete('/:userId', UsersController.deleteUser)

export default router
