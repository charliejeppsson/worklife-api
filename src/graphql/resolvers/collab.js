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

const CollabMutations = {}

export default {
  CollabAssociations, CollabQueries, CollabMutations
}