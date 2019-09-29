const SpaceType = `
  type Space {
    id: ID
    name: String
    city: String
    address: String
    type: String
    capacity: Int
    image: Image
    imageId: Int
    wifi: Boolean
    coffee: Boolean
    tea: Boolean
    snacks: Boolean
    meals: Boolean
    opensAt: String
    closesAt: String
  }
`

const SpaceQueries = `
  spaces: [Space]
  space(id: ID!): Space
`

const SpaceMutations = `
  updateSpace(
    id: ID,
    name: String,
    city: String,
    address: String,
    type: String,
    capacity: Int,
    imageId: Int,
    wifi: Boolean,
    coffee: Boolean,
    tea: Boolean,
    snacks: Boolean,
    meals: Boolean,
    opensAt: String,
    closesAt: String
  ): Space
`

export default {
  SpaceType, SpaceQueries, SpaceMutations
}
