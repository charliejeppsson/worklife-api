import { User } from '../../../models'
import BaseController from './baseController'

class UsersController extends BaseController {
  constructor() {
    super(User)
  }
}

export default UsersController
