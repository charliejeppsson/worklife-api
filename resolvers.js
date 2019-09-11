export default {
  Attendance: {
    user: (parent, args, context, info) => parent.getUser(),
    event: (parent, args, context, info) => parent.getEvent()
  },

  Collab: {
    participations: (parent, args, context, info) => parent.getParticipations(),
  },

  Event: {
    attendances: (parent, args, context, info) => parent.getAttendances(),
    space: (parent, args, context, info) => parent.getSpace()
  },

  NewsPost: {
    collab: (parent, args, context, info) => parent.getCollab(),
    event: (parent, args, context, info) => parent.getEvent(),
    image: (parent, args, context, info) => parent.getImage(),
    user: (parent, args, context, info) => parent.getUser()
  },

  Participation: {
    user: (parent, args, context, info) => parent.getUser(),
    collab: (parent, args, context, info) => parent.getCollab()
  },

  User: {
    newsPosts: (parent, args, context, info) => parent.getNewsPosts()
  },


  Query: {
    // Index
    attendances: (parent, args, { db }, info) => db.Attendance.findAll(),
    participations: (parent, args, { db }, info) => db.Participation.findAll(),
    newsPosts: (parent, args, { db }, info) => db.NewsPost.findAll(),
    users: (parent, args, { db }, info) => db.User.findAll(),
    // Read
    attendance: (parent, { id }, { db }, info) => db.Attendance.findByPk(id),
    participation: (parent, { id }, { db }, info) => db.Participation.findByPk(id),
    event: (parent, { id }, { db }, info) => db.Event.findByPk(id),
    newsPost: (parent, { id }, { db }, info) => db.NewsPost.findByPk(id),
    space: (parent, { id }, { db }, info) => db.Space.findByPk(id),
    user: (parent, { id }, { db }, info) => db.User.findByPk(id)
  },

  // Mutation: {
  //   createNewsPost: (parent, {
  //     title,
  //     description,
  //     content,
  //     userId
  //   }, { db }, info) => db.NewsPost.create({
  //     title,
  //     description,
  //     content,
  //     userId
  //   }),
  // }
}
