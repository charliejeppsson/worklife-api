import { Image } from '../../../models'
import BaseController from './baseController'

class ImagesController extends BaseController {
  constructor() {
    super(Image)
  }
}

export default ImagesController
