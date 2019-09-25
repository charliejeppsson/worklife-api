import DataLoader from 'dataloader'
import { Attendance, User } from '../models'

const batchAttendants = async (ids) => {
  // Make an inner join query, fetching all attendances with their associated
  // user records
  const attendances = await Attendance.findAll({
    where: { eventId: ids }, include: [{ model: User, required: true }]
  })

  // Dataloader requires records to be returned in the same order as ids, and
  // since ids are the event ids, the attendants need to be ordered by event
  const attendantMap = {}
  attendances.forEach(a => {
    const attendant = a.User.dataValues
    if (attendantMap[a.eventId]) {
      attendantMap[a.eventId].push(attendant)
    } else {
      attendantMap[a.eventId] = [attendant]
    }
  })

  return ids.map(id => attendantMap[id])
}

export const attendantsLoader = () => new DataLoader(
  batchAttendants, { cache: false }
)
