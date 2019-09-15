const AttendanceAssociations = {
  user: (parent, args, context, info) => parent.getUser(),
  event: (parent, args, context, info) => parent.getEvent()
}

const AttendanceQueries = {
  attendances: (parent, args, { db }, info) => db.Attendance.findAll(),
  attendance: (parent, { id }, { db }, info) => db.Attendance.findByPk(id)
}

const AttendanceMutations = {
  deleteAttendance: (parent, { id }, { db }, info) => (
    db.Attendance.destroy({ where: { id: id } })
  )
}

export default {
  AttendanceAssociations, AttendanceQueries, AttendanceMutations
}
