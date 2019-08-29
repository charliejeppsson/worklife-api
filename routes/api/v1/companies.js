import express from 'express'
import CompaniesController from '../../../controllers/company'

const router = express.Router()

router.get('/', CompaniesController.getCompanies)
router.get('/:companyId', CompaniesController.getCompany)
router.post('/', CompaniesController.createCompany)
router.put('/:companyId', CompaniesController.updateCompany)
router.delete('/:companyId', CompaniesController.deleteCompany)

export default router
