const CollabType = `
  type Collab {
    id: ID!
    title: String!
    description: String!
    duration: Int!
    compensation: Int!
    userId: ID!
    user: User!
    imageId: ID!
    image: Image!
    createdAt: Date!
    updatedAt: Date!
    participants: [User]
  }

  type JoinResponse {
    success: Boolean
    collab: Collab
    message: String
  }
`

const CollabQueries = `
  collabs: [Collab]
  collab(id: ID!): Collab
`

const CollabMutations = `
  createCollab(
    title: String!,
    description: String!,
    duration: Int!,
    compensation: Int!,
    imageUrl: String!
  ): Collab!

  joinCollab(id: ID!): JoinResponse!
`

export default {
  CollabType, CollabQueries, CollabMutations
}
