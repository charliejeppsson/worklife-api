const ParticipationType = `
  type Participation {
    id: ID
    userId: ID
    user: User
    collabId: ID
    collab: Collab
  }
`

const ParticipationQueries = `
  participations: [Participation]
  participation: Participation
`

const ParticipationMutations = `
  deleteParticipation(id: ID): Participation
`

export default {
  ParticipationType, ParticipationQueries, ParticipationMutations
}
