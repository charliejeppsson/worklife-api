const AuthType = `
  type AuthData {
    user: User
  }
`

const AuthQueries = `
  currentUser: User
`

const AuthMutations = `
  login(email: String!, password: String!): AuthData!
  logout: AuthData!
`

export default { AuthType, AuthQueries, AuthMutations }
