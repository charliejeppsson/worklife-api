const ParticipationAssociations = {
  user: (parent, args, context, info) => parent.getUser(),
  collab: (parent, args, context, info) => parent.getCollab()
}

const ParticipationQueries = {
  participations: (parent, args, { db }, info) => db.Participation.findAll(),
  participation: (parent, { id }, { db }, info) => db.Participation.findByPk(id)
}

const ParticipationMutations = {
  deleteParticipation: (parent, { id }, { db }, info) => (
    db.Participation.destroy({ where: { id: id } })
  )
}

export default {
  ParticipationAssociations, ParticipationQueries, ParticipationMutations
}
