import { Company } from '../../../models'
import BaseController from './baseController'

class CompaniesController extends BaseController {
  constructor() {
    super(Company)
  }
}

export default CompaniesController
