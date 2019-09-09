import { NewsPost } from '../../../models'
import BaseController from './baseController'

class NewsPostsController extends BaseController {
  constructor() {
    super(NewsPost)
  }
}

export default NewsPostsController
