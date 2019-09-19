const UserType = `
  type User {
    id: ID
    firstName: String
    lastName: String
    password: String
    email: String
    title: String
    avatar: String
    newsPosts: [NewsPost]
    createdAt: Date
    updatedAt: Date
  }
`

const UserQueries = `
  users: [User!]
  user(id: ID!): User
`

const UserMutations = `
  createUser(
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    title: String,
    avatar: String
    createdAt: Date
    updatedAt: Date
  ): User

  updateUser(
    id: ID,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    title: String,
    avatar: String,
    createdAt: Date,
    updatedAt: Date
  ): User
`
export default {
  UserType, UserQueries, UserMutations
}
