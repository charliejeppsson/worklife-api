import attendanceResolver from './resolvers/attendance'
import authResolver from './resolvers/auth'
import bookingResolver from './resolvers/booking'
import collabResolver from './resolvers/collab'
import eventResolver from './resolvers/event'
import imageResolver from './resolvers/image'
import newsPostResolver from './resolvers/newsPost'
import participationResolver from './resolvers/participation'
import spaceResolver from './resolvers/space'
import userResolver from './resolvers/user'

export default {
  // Associations
  Attendance: attendanceResolver.AttendanceAssociations,
  Booking: bookingResolver.BookingAssociations,
  Collab: collabResolver.CollabAssociations,
  Event: eventResolver.EventAssociations,
  Image: imageResolver.ImageAssociations,
  NewsPost: newsPostResolver.NewsPostAssociations,
  Participation: participationResolver.ParticipationAssociations,
  Space: spaceResolver.SpaceAssociations,
  User: userResolver.UserAssociations,

  Query: {
    ...attendanceResolver.AttendanceQueries,
    ...bookingResolver.BookingQueries,
    ...collabResolver.CollabQueries,
    ...eventResolver.EventQueries,
    ...imageResolver.ImageQueries,
    ...newsPostResolver.NewsPostQueries,
    ...participationResolver.ParticipationQueries,
    ...spaceResolver.SpaceQueries,
    ...userResolver.UserQueries
  },

  Mutation: {
    ...attendanceResolver.AttendanceMutations,
    ...authResolver.AuthMutations,
    ...bookingResolver.BookingMutations,
    ...collabResolver.CollabMutations,
    ...eventResolver.EventMutations,
    ...imageResolver.ImageMutations,
    ...newsPostResolver.NewsPostMutations,
    ...participationResolver.ParticipationMutations,
    ...spaceResolver.SpaceMutations,
    ...userResolver.UserMutations
  }
}
