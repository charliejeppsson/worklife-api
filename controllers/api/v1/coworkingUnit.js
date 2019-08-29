import { CoworkingUnit } from '../../../models'
import BaseController from './baseController'

class CoworkingUnitsController extends BaseController {
  constructor() {
    super(CoworkingUnit)
  }
}

export default CoworkingUnitsController
