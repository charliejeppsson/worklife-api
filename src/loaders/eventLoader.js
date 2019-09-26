import DataLoader from 'dataloader'
import { Event } from '../models'

const batchEvents = async (ids) => {
  const events = await Event.findAll({ where: { id: ids } })
  // Dataloader requires records to be returned in the same order as ids
  const eventMap = {}
  events.forEach(u => eventMap[u.id] = u)
  return ids.map(id => eventMap[id])
}

export const eventLoader = () => new DataLoader(batchEvents, { cache: false })
