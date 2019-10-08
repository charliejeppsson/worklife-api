import jwt from 'jsonwebtoken'
import { verifyAccessToken } from '../../middleware/auth'
import Sequelize from 'sequelize'

const checkAvailability = async (params) => {
  const { date, spaceId, userId, db } = params
  const start = new Date(date).setUTCHours(0,0,0,0)
  const end = new Date(date).setUTCHours(23,59,59,999)
  const space = await db.Space.findByPk(spaceId)
  const bookings = await db.Booking.findAll({ where: {
    spaceId,
    date: { [Sequelize.Op.between]: [start, end] }
  }})
  const bookingByMe = bookings.find(b => b.userId === userId)
  const isFullyBooked = bookings.length >= space.dataValues.capacity

  if (bookingByMe) {
    return [false, 'You already have a booking for this date.']
  } else if (isFullyBooked) {
    return [false, 'Space fully booked for this date!']
  } else {
    return [true, '']
  }
}

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
      const bookings = await db.Booking.findAll({
        where: { userId: user.id },
        order: [ ['id', 'DESC'] ]
      })
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
      const params = { date, spaceId, userId: user.id, db }
      const [spaceIsAvailable, msg] = await checkAvailability(params)
      if (spaceIsAvailable) {
        const newBooking = await db.Booking.create(
          { date: new Date(date), spaceId, userId: user.id }
        )
        return { success: true, message: msg, booking: newBooking.dataValues }
      } else {
        return { success: false, message: msg, booking: {} }
      }
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
