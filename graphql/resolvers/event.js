const EventAssociations = {
  attendances: (parent, args, context, info) => parent.getAttendances(),
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
