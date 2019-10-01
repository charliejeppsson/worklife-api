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
  createBooking(date: Date!, spaceId: ID!): Booking
  cancelBooking(id: ID!): DeleteSuccess
`

export default { BookingType, BookingQueries, BookingMutations }
