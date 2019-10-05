import jwt from 'jsonwebtoken'
import { verifyAccessToken } from '../../middleware/auth'

const BookingAssociations = {
  space: (parent, args, { dataLoaders }, info) => {
    if (parent.spaceId) { return dataLoaders.spaceLoader.load(parent.spaceId) }
  },
  user: (parent, args, { dataLoaders }, info) => {
    if (parent.userId) { return dataLoaders.userLoader.load(parent.userId) }
  }
}

const BookingQueries = {
  bookings: (parent, args, { db }, info) => db.Booking.findAll(),
  myBookings: async (parent, args, { db, req }, info) => {
    const user = await verifyAccessToken(req)

    try {
      const bookings = await db.Booking.findAll({ where: { userId: user.id } })
      return bookings.map(b => b.dataValues)
    } catch(err) {
      console.log(err)
      return []
    }
  },
  booking: (parent, { id }, { db }, info) => db.Booking.findByPk(id)
}

const BookingMutations = {
  createBooking: async (parent, { date, spaceId }, { db, req }, info) => {
    const user = await verifyAccessToken(req)

    try {
      const newBooking = await db.Booking.create(
        { date: new Date(date), spaceId, userId: user.id }
      )
      return newBooking.dataValues
    } catch(err) {
      console.log(err)
    }
  },

  cancelBooking: async (parent, { id }, { db, req }, info) => {
    const user = await verifyAccessToken(req)
    const booking = await db.Booking.findByPk(id)
    if (booking && booking.userId === user.id) {
      try {
        const deletedRows = await db.Booking.destroy({ where: { id: booking.id } })
        return { success: deletedRows === 1 }
      } catch(err) {
        console.log(err)
        return { success: false }
      }
    }
  }
}

export default {
  BookingAssociations, BookingQueries, BookingMutations
}
