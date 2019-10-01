import attendanceSchemas from './schemas/attendance'
import authSchemas from './schemas/auth'
import bookingSchemas from './schemas/booking'
import collabSchemas from './schemas/collab'
import eventSchemas from './schemas/event'
import imageSchemas from './schemas/image'
import newsPostSchemas from './schemas/newsPost'
import participationSchemas from './schemas/participation'
import spaceSchemas from './schemas/space'
import userSchemas from './schemas/user'
import scalarTypes from './scalars'

export default `
  ${scalarTypes}

  ${attendanceSchemas.AttendanceType}
  ${authSchemas.AuthType}
  ${bookingSchemas.BookingType}
  ${collabSchemas.CollabType}
  ${eventSchemas.EventType}
  ${imageSchemas.ImageType}
  ${newsPostSchemas.NewsPostType}
  ${participationSchemas.ParticipationType}
  ${spaceSchemas.SpaceType}
  ${userSchemas.UserType}
  
  type Query {
    ${attendanceSchemas.AttendanceQueries}
    ${bookingSchemas.BookingQueries}
    ${collabSchemas.CollabQueries}
    ${eventSchemas.EventQueries}
    ${imageSchemas.ImageQueries}
    ${newsPostSchemas.NewsPostQueries}
    ${participationSchemas.ParticipationQueries}
    ${spaceSchemas.SpaceQueries}
    ${userSchemas.UserQueries}
  }

  type Mutation {
    ${attendanceSchemas.AttendanceMutations}
    ${authSchemas.AuthMutations}
    ${bookingSchemas.BookingMutations}
    ${eventSchemas.EventMutations}
    ${imageSchemas.ImageMutations}
    ${newsPostSchemas.NewsPostMutations}
    ${participationSchemas.ParticipationMutations}
    ${spaceSchemas.SpaceMutations}
    ${userSchemas.UserMutations}
  }
`
