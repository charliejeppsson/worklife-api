import express from 'express'
import NewsPostsController from '../../../controllers/api/v1/newsPost'

const router = express.Router()
const newsPostController = new NewsPostsController()

router.get('/', (req, res) => newsPostController.index(req, res))
router.get('/:id', (req, res) => newsPostController.read(req, res))
router.post('/', (req, res) => newsPostController.create(req, res))
router.put('/:id', (req, res) => newsPostController.update(req, res))
router.delete('/:id', (req, res) => newsPostController.delete(req, res))

export default router
