import express from 'express'
import CoworkingUnitsController from '../../../controllers/coworkingUnit'

const router = express.Router()

router.get('/', CoworkingUnitsController.getCoworkingUnits)
router.get('/:coworkingUnitId', CoworkingUnitsController.getCoworkingUnit)
router.post('/', CoworkingUnitsController.createCoworkingUnit)
router.put('/:coworkingUnitId', CoworkingUnitsController.updateCoworkingUnit)
router.delete('/:coworkingUnitId', CoworkingUnitsController.deleteCoworkingUnit)

export default router
