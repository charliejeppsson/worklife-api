import express from 'express'
import CompaniesController from '../../../controllers/api/v1/company'

const router = express.Router()
const companyController = new CompaniesController()

router.get('/', (req, res) => companyController.index(req, res))
router.get('/:id', (req, res) => companyController.read(req, res))
router.post('/', (req, res) => companyController.create(req, res))
router.put('/:id', (req, res) => companyController.update(req, res))
router.delete('/:id', (req, res) => companyController.delete(req, res))

export default router
