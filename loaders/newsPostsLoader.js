import DataLoader from 'dataloader'
import { NewsPost } from '../models'

const batchNewsPosts = async (ids) => {
  const newsPosts = await NewsPost.findAll({ where: { userId: ids } })
  
  // Dataloader requires records to be returned in the same order as ids, and
  // since ids are the user ids, the news posts need to be ordered by user
  const newsPostMap = {}
  newsPosts.forEach(n => {
    if (newsPostMap[n.userId]) {
      newsPostMap[n.userId].push(n)
    } else {
      newsPostMap[n.userId] = [n]
    }
  })

  return ids.map(id => newsPostMap[id])
}

export const newsPostsLoader = () => new DataLoader(batchNewsPosts, { cache: false })
