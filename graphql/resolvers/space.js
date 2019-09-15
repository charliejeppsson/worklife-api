const SpaceAssociations = {}

const SpaceQueries = {
  space: (parent, { id }, { db }, info) => db.Space.findByPk(id),
}

const SpaceMutations = {}

export default {
  SpaceAssociations, SpaceQueries, SpaceMutations
}
