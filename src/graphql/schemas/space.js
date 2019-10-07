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
    availableSeats: Int
  }
`

const SpaceQueries = `
  spaces: [Space]
  searchSpaces(name: String, date: Date!): [Space]
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
