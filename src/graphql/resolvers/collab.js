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
  collabs: (parent, args, { db }, info) => db.Collab.findAll({
    order: [ ['id', 'DESC'] ]
  }),
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

  joinCollab: async (parent, { id }, { db, req }, info) => {
    const user = await verifyAccessToken(req)

    try {
      const collab = await db.Collab.findByPk(id) 
      const existingParticipation = await db.Participation.findOne({ where: {
        userId: user.id,
        collabId: collab.id
      }})

      if (existingParticipation) {
        return {
          success: false,
          collab: collab.dataValues,
          message: "You've already attended."
        }
      } else {
        await db.Participation.create({ collabId: collab.id, userId: user.id })
        return {
          success: true,
          collab: collab.dataValues,
          message: ''
        }
      }
    } catch(err) {
      console.log(err)
    }
  }
}

export default {
  CollabAssociations, CollabQueries, CollabMutations
}
