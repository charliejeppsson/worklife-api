const CollabAssociations = {
  participations: (parent, args, context, info) => parent.getParticipations(),
  image: (parent, args, context, info) => parent.getImage(),
  user: (parent, args, context, info) => parent.getUser()
}

const CollabQueries = {
  collabs: (parent, args, { db }, info) => db.Collab.findAll(),
  collab: (parent, { id }, { db }, info) => db.Collab.findByPk(id)
}

const CollabMutations = {}

export default {
  CollabAssociations, CollabQueries, CollabMutations
}
