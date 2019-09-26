import DataLoader from 'dataloader'
import { User } from '../models'

const batchUsers = async (ids) => {
  const users = await User.findAll({ where: { id: ids } })
  // Dataloader requires records to be returned in the same order as ids
  const userMap = {}
  users.forEach(u => userMap[u.id] = u)
  return ids.map(id => userMap[id])
}

export const userLoader = () => new DataLoader(batchUsers, { cache: false })
