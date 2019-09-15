const EventAssociations = {
  attendances: (parent, args, context, info) => parent.getAttendances(),
  space: (parent, args, context, info) => parent.getSpace(),
  image: (parent, args, context, info) => parent.getImage(),
  user: (parent, args, context, info) => parent.getUser()
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
