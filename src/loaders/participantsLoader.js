import DataLoader from 'dataloader'
import { Participation, User } from '../models'

const batchParticipations = async (ids) => {
  // Make an inner join query, fetching all participations with their associated
  // user records
  const participations = await Participation.findAll({
    where: { collabId: ids }, include: [{ model: User, required: true }]
  })

  // Dataloader requires records to be returned in the same order as ids, and
  // since ids are the collab ids, the participants need to be ordered by collab
  const participantMap = {}
  participations.forEach(p => {
    const participant = p.User.dataValues
    if (participantMap[p.collabId]) {
      participantMap[p.collabId].push(participant)
    } else {
      participantMap[p.collabId] = [participant]
    }
  })

  return ids.map(id => participantMap[id])
}

export const participantsLoader = () => new DataLoader(
  batchParticipations, { cache: false }
)
