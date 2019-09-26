import { attendantsLoader } from './attendantsLoader'
import { collabLoader } from './collabLoader'
import { eventLoader } from './eventLoader'
import { imageLoader } from './imageLoader'
import { newsPostsLoader } from './newsPostsLoader'
import { participantsLoader } from './participantsLoader'
import { spaceLoader } from './spaceLoader'
import { userLoader } from './userLoader'

export default {
  attendantsLoader: attendantsLoader(),
  collabLoader: collabLoader(),
  eventLoader: eventLoader(),
  imageLoader: imageLoader(),
  newsPostsLoader: newsPostsLoader(),
  participantsLoader: participantsLoader(),
  spaceLoader: spaceLoader(),
  userLoader: userLoader()
}
