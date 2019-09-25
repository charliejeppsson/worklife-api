import DataLoader from 'dataloader'
import { Collab } from '../models'

const batchCollabs = async (ids) => {
  const collabs = await Collab.findAll({ where: { id: ids } })
  // Dataloader requires records to be returned in the same order as ids
  const collabMap = {}
  collabs.forEach(u => collabMap[u.id] = u)
  return ids.map(id => collabMap[id])
}

export const collabLoader = () => new DataLoader(batchCollabs, { cache: false })
