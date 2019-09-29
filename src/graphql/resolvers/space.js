const SpaceAssociations = {
  image: (parent, args, { dataLoaders }, info) => {
    if (parent.imageId) { return dataLoaders.imageLoader.load(parent.imageId) }
  }
}

const SpaceQueries = {
  spaces: (parent, args, { db }, info) => db.Space.findAll(),
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
