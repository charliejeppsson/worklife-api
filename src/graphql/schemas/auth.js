const AuthType = `
  type AuthData {
    user: User
    accessToken: String
  }
`

const AuthMutations = `
  login(email: String!, password: String!): AuthData!
  logout: AuthData!
`

export default { AuthType, AuthMutations }
