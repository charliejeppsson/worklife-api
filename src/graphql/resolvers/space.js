import Sequelize from 'sequelize'

const addAvailability = async (spaces, args, db) => {
  const start = new Date(args.date).setUTCHours(0,0,0,0)
  const end = new Date(args.date).setUTCHours(23,59,59,999)
  const spaceIds = spaces.map(space => space.id)

  const bookings = await db.Booking.findAll({ where: {
    spaceId: { [Sequelize.Op.or]: [...spaceIds] },
    date: { [Sequelize.Op.between]: [start, end] }
  }})

  // Add availableSeats field to each space
  spaces.forEach((s) => {
    const spaceBookings = bookings.filter((booking) => (
      booking.dataValues.spaceId === s.dataValues.id
    ))
    s.dataValues['availableSeats'] = s.dataValues.capacity - spaceBookings.length
  })

  return spaces
}

const SpaceAssociations = {
  image: (parent, args, { dataLoaders }, info) => {
    if (parent.imageId) { return dataLoaders.imageLoader.load(parent.imageId) }
  }
}

const SpaceQueries = {
  searchSpaces: async (parent, args, { db }, info) => {
    const spaces = await db.Space.findAll({ where: {
      name: { [Sequelize.Op.iLike]: `%${args.name}%` }
    }})
    const updatedSpaces = await addAvailability(spaces, args, db)
    return updatedSpaces.map(s => s.dataValues)
  },
  space: (parent, { id }, { db }, info) => db.Space.findByPk(id),
}

const SpaceMutations = {
  updateSpace: (parent, args, { db }, info) => {
    db.Space.update({
      name: args.name,
      city: args.city,
      address: args.address,
      type: args.type,
      capacity: args.capacity,
      imageId: args.imageId,
      wifi: args.wifi,
      coffee: args.coffee,
      tea: args.tea,
      snacks: args.snacks,
      meals: args.meals,
      opensAt: args.opensAt,
      closesAt: args.closesAt
    }, { returning: true, where: { id: args.id } })
      .then(([ rowsUpdate, [ updatedSpace ]]) => updatedSpace.dataValues)
      .catch(err => console.log(err))
  }
}

export default {
  SpaceAssociations, SpaceQueries, SpaceMutations
}
