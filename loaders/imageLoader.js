import DataLoader from 'dataloader'
import { Image } from '../models'

const batchImages = async (ids) => {
  const images = await Image.findAll({ where: { id: ids } })
  // Dataloader requires records to be returned in the same order as ids
  const imageMap = {}
  images.forEach(u => imageMap[u.id] = u)
  return ids.map(id => imageMap[id])
}

export const imageLoader = () => new DataLoader(batchImages, { cache: false })
