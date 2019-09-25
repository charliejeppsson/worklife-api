import { collabLoader } from './collabLoader'
import { eventLoader } from './eventLoader'
import { imageLoader } from './imageLoader'
import { newsPostsLoader } from './newsPostsLoader'
import { spaceLoader } from './spaceLoader'
import { userLoader } from './userLoader'

export default {
  collabLoader: collabLoader(),
  eventLoader: eventLoader(),
  imageLoader: imageLoader(),
  newsPostsLoader: newsPostsLoader(),
  spaceLoader: spaceLoader(),
  userLoader: userLoader()
}
