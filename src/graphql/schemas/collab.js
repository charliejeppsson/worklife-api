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
`

const CollabQueries = `
  collabs: [Collab]
  collab(id: ID!): Collab
`

const CollabMutations = ``

export default {
  CollabType, CollabQueries, CollabMutations
}
