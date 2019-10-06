const EventType = `
  type Event {
    id: ID
    title: String
    description: String
    startTime: Date
    endTime: Date
    imageId: ID
    image: Image
    spaceId: ID
    space: Space
    userId: ID
    user: User
    createdAt: Date
    updatedAt: Date
    attendants: [User]
  }

  type AttendResponse {
    success: Boolean
    event: Event
    message: String
  }
`

const EventQueries = `
  events: [Event]
  event(id: ID!): Event
`

const EventMutations = `
  createEvent(
    title: String!,
    description: String!,
    startTime: Date!,
    endTime: Date!,
    imageUrl: String!,
    spaceId: ID!,
  ): Event!

  updateEvent(
    id: ID,
    title: String,
    description: String,
    startTime: Date,
    endTime: Date,
    imageId: ID,
    spaceId: ID,
    userId: ID,
    createdAt: Date,
    updatedAt: Date
  ): Event!

  attendEvent(id: ID!): AttendResponse!
`

export default {
  EventType, EventQueries, EventMutations
}
