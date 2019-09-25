import DataLoader from 'dataloader'
import { Space } from '../models'

const batchSpaces = async (ids) => {
  const spaces = await Space.findAll({ where: { id: ids } })
  // Dataloader requires records to be returned in the same order as ids
  const spaceMap = {}
  spaces.forEach(u => spaceMap[u.id] = u)
  return ids.map(id => spaceMap[id])
}

export const spaceLoader = () => new DataLoader(batchSpaces, { cache: false })
