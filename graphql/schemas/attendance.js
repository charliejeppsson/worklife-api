const AttendanceType = `
  type Attendance {
    id: ID
    userId: ID
    user: User
    eventId: ID
    event: Event
  }
`

const AttendanceQueries = `
  attendances: [Attendance]
  attendance(id: ID!): Attendance
`

const AttendanceMutations = `
  deleteAttendance(id: ID): Attendance
`

export default {
  AttendanceType, AttendanceQueries, AttendanceMutations
}
