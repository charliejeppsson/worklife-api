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
    createdAt: Date!
    updatedAt: Date!
    attendances: [Attendance]
  }
`

const EventQueries = `
  events: [Event]
  event(id: ID!): Event
`

const EventMutations = `
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
`

export default {
  EventType, EventQueries, EventMutations
}
