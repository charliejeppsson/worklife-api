import { Event } from '../../../models'
import BaseController from './baseController'

class EventsController extends BaseController {
  constructor() {
    super(Event)
  }
}

export default EventsController
