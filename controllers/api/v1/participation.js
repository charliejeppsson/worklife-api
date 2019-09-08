import { Participation } from '../../../models'
import BaseController from './baseController'

class ParticipationsController extends BaseController {
  constructor() {
    super(Participation)
  }
}

export default ParticipationsController
