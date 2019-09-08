import { Attendance } from '../../../models'
import BaseController from './baseController'

class AttendancesController extends BaseController {
  constructor() {
    super(Attendance)
  }
}

export default AttendancesController
