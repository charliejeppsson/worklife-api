const UserAssociations = {
  newsPosts: (parent, args, { dataLoaders }, info) => {
    return dataLoaders.newsPostsLoader.load(parent.id)
  },
}

const UserQueries = {
  users: (parent, args, { db }, info) => db.User.findAll(),
  user: (parent, { id }, { db }, info) => db.User.findByPk(id)
}

const UserMutations = {
  createUser: (parent, { firstName, lastName, email, password }, { db }, info) => (
    db.User.create({ firstName, lastName, email, password })
  )
}

export default {
  UserAssociations, UserQueries, UserMutations
}
