import express from 'express'
import CoworkingUnitsController from '../../../controllers/api/v1/coworkingUnit'

const router = express.Router()
const coworkingUnitController = new CoworkingUnitsController()

router.get('/', (req, res) => coworkingUnitController.index(req, res))
router.get('/:id', (req, res) => coworkingUnitController.read(req, res))
router.post('/', (req, res) => coworkingUnitController.create(req, res))
router.put('/:id', (req, res) => coworkingUnitController.update(req, res))
router.delete('/:id', (req, res) => coworkingUnitController.delete(req, res))

export default router
