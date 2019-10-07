const BookingType = `
  type Booking {
    id: ID
    date: Date
    userId: ID
    user: User
    spaceId: ID
    space: Space
    createdAt: Date
    updatedAt: Date
  }

  type CreateResponse {
    booking: Booking
    success: Boolean!
    message: String
  }

  type DeleteSuccess {
    success: Boolean
  }
`

const BookingQueries = `
  bookings: [Booking]
  myBookings: [Booking]
  booking(id: ID!): Booking
`

const BookingMutations = `
  createBooking(date: Date!, spaceId: ID!): CreateResponse
  cancelBooking(id: ID!): DeleteSuccess
`

export default { BookingType, BookingQueries, BookingMutations }
