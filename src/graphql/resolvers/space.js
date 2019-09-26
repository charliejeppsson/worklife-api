const SpaceAssociations = {
  image: (parent, args, { dataLoaders }, info) => {
    if (parent.imageId) { return dataLoaders.imageLoader.load(parent.imageId) }
  }
}

const SpaceQueries = {
  spaces: (parent, args, { db }, info) => db.Space.findAll(),
  space: (parent, { id }, { db }, info) => db.Space.findByPk(id),
}

const SpaceMutations = {}

export default {
  SpaceAssociations, SpaceQueries, SpaceMutations
}
