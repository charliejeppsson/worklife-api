const SpaceType = `
  type Space {
    id: ID!
    name: String!
    city: String!
    address: String!
    type: String!
    image: Image
  }
`

const SpaceQueries = `
  spaces: [Space]
  space(id: ID!): Space
`

const SpaceMutations = ``

export default {
  SpaceType, SpaceQueries, SpaceMutations
}
