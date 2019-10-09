import 'regenerator-runtime/runtime'
import db from '../../models'

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      // Create react meetup attendances
      const reactMeetup = await db.Event.findOne({ where: {
        title: 'React meetup'
      }})

      const charlie = await db.User.findOne({ where: {
        email: 'charlie@worklife.se'
      }})
      await db.Attendance.create({
        userId: charlie.id,
        eventId: reactMeetup.id
      })

      const erlich = await db.User.findOne({ where: {
        email: 'fakeerlich@piedpiper.se'
      }}) 
      await db.Attendance.create({
        userId: erlich.id,
        eventId: reactMeetup.id
      })

      const gilfoyle = await db.User.findOne({ where: {
        email: 'fakegilfoyle@piedpiper.se'
      }}) 
      await db.Attendance.create({
        userId: gilfoyle.id,
        eventId: reactMeetup.id
      })

      const dinesh = await db.User.findOne({ where: {
        email: 'fakedinesh@piedpiper.se'
      }}) 
      await db.Attendance.create({
        userId: dinesh.id,
        eventId: reactMeetup.id
      })

      // Create fundraising lecture attendances
      const belsonLecture = await db.Event.findOne({ where: {
        title: 'Fundraising lecture with Gavin Belson'
      }})

      await db.Attendance.create({
        userId: charlie.id,
        eventId: belsonLecture.id
      })
      await db.Attendance.create({
        userId: erlich.id,
        eventId: belsonLecture.id
      })

      const monica = await db.User.findOne({ where: {
        email: 'fakemonica@raviga.se'
      }}) 
      await db.Attendance.create({
        userId: monica.id,
        eventId: belsonLecture.id
      })

      const jared = await db.User.findOne({ where: {
        email: 'fakejared@piedpiper.se'
      }}) 
      await db.Attendance.create({
        userId: jared.id,
        eventId: belsonLecture.id
      })

      const jianyang = await db.User.findOne({ where: {
        email: 'fakejianyang@octopus.se'
      }}) 
      await db.Attendance.create({
        userId: jianyang.id,
        eventId: belsonLecture.id
      })

      // Create fundraising lecture attendances
      const mandarinEvent = await db.Event.findOne({ where: {
        title: 'Mandarin 101'
      }})

      await db.Attendance.create({
        userId: charlie.id,
        eventId: mandarinEvent.id
      })

      const bighead = await db.User.findOne({ where: {
        email: 'fakebighead@piedpiper.se'
      }})
      await db.Attendance.create({
        userId: bighead.id,
        eventId: mandarinEvent.id
      })

      await db.Attendance.create({
        userId: jared.id,
        eventId: mandarinEvent.id
      })

      const richard = await db.User.findOne({ where: {
        email: 'fakerichard@piedpiper.se'
      }}) 
      await db.Attendance.create({
        userId: richard.id,
        eventId: mandarinEvent.id
      })
    } catch(err) {
      console.log(err)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Attendances', null, {})
  }
}
