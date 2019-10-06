import jwt from 'jsonwebtoken'
import { verifyAccessToken } from '../../middleware/auth'

const CollabAssociations = {
  participants: (parent, args, { dataLoaders }, info) => {
    return dataLoaders.participantsLoader.load(parent.id)
  },
  image: (parent, args, { dataLoaders }, info) => {
    if (parent.imageId) { return dataLoaders.imageLoader.load(parent.imageId) }
  },
  user: (parent, args, { dataLoaders }, info) => {
    if (parent.userId) { return dataLoaders.userLoader.load(parent.userId) }
  }
}

const CollabQueries = {
  collabs: (parent, args, { db }, info) => db.Collab.findAll(),
  collab: (parent, { id }, { db }, info) => db.Collab.findByPk(id)
}

const CollabMutations = {
  createCollab: async (parent, args, { db, req }, info) => {
    const user = await verifyAccessToken(req)

    try {
      const newImage = await db.Image.create({ url: args.imageUrl, info: null })
      const newCollab = await db.Collab.create({
        title: args.title,
        description: args.description,
        duration: args.duration,
        compensation: args.compensation,
        imageId: newImage.dataValues.id,
        userId: user.id
      })
      return newCollab.dataValues
    } catch(err) {
      console.log(err)
    }
  },
}

export default {
  CollabAssociations, CollabQueries, CollabMutations
}
