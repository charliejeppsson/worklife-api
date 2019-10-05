import jwt from 'jsonwebtoken'
import { verifyAccessToken } from '../../middleware/auth'

const EventAssociations = {
  attendants: (parent, args, { dataLoaders }, info) => {
    return dataLoaders.attendantsLoader.load(parent.id)
  },
  image: (parent, args, { dataLoaders }, info) => {
    if (parent.imageId) { return dataLoaders.imageLoader.load(parent.imageId) }
  },
  space: (parent, args, { dataLoaders }, info) => {
    if (parent.spaceId) { return dataLoaders.spaceLoader.load(parent.spaceId) }
  },
  user: (parent, args, { dataLoaders }, info) => {
    if (parent.userId) { return dataLoaders.userLoader.load(parent.userId) }
  }
}

const EventQueries = {
  events: (parent, args, { db }, info) => db.Event.findAll(),
  event: (parent, { id }, { db }, info) => db.Event.findByPk(id)
}

const EventMutations = {
  createEvent: async (parent, args, { db, req }, info) => {
    const user = await verifyAccessToken(req)

    try {
      const newImage = await db.Image.create({ url: args.imageUrl, info: null })
      const space = await db.Space.findByPk(args.spaceId) 

      const newEvent = await db.Event.create({
        title: args.title,
        description: args.description,
        startTime: args.startTime,
        endTime: args.endTime,
        imageId: newImage.dataValues.id,
        spaceId: space.id,
        userId: user.id
      })
      return newEvent.dataValues
    } catch(err) {
      console.log(err)
    }
  },
  updateEvent: (parent, {
    id,
    title,
    description,
    startTime,
    endTime,
    imageId,
    spaceId,
    userId
  }, { db }, info) => (
    db.Event.update(
      {
        title,
        description,
        startTime,
        endTime,
        imageId,
        spaceId,
        userId
      },
      {
        where: {
          id: id
        }
      }
    )
  )
}

export default {
  EventAssociations, EventQueries, EventMutations
}
