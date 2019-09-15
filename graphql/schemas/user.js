const UserType = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
    title: String
    avatar: String
    newsPosts: [NewsPost]
  }
`

const UserQueries = `
  users: [User!]
  user(id: ID!): User
`

const UserMutations = `
  createUser(
    firstName: String!,
    lastName: String!,
    email: String!,
    password: String!
  ): User!
`

export default {
  UserType, UserQueries, UserMutations
}
