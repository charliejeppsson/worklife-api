import 'regenerator-runtime/runtime'
import db from '../../models'

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      // Create fintech collab participations
      const fintechProject = await db.Collab.findOne({ where: {
        title: 'Fintech design project',
      }})

      const charlie = await db.User.findOne({ where: {
        email: 'charlie@worklife.se'
      }})
      await db.Participation.create({
        userId: charlie.id,
        collabId: fintechProject.id
      })

      const bighead = await db.User.findOne({ where: {
        email: 'fakebighead@piedpiper.se'
      }})
      await db.Participation.create({
        userId: bighead.id,
        collabId: fintechProject.id
      })

      const jared = await db.User.findOne({ where: {
        email: 'fakejared@piedpiper.se'
      }}) 
      await db.Participation.create({
        userId: jared.id,
        collabId: fintechProject.id
      })

      // Create open-source collab participations
      const openSourceProject = await db.Collab.findOne({ where: {
        title: 'Open-source maintainer wanted'
      }})

      const gilfoyle = await db.User.findOne({ where: {
        email: 'fakegilfoyle@piedpiper.se'
      }}) 
      await db.Participation.create({
        userId: gilfoyle.id,
        collabId: openSourceProject.id
      })

      const dinesh = await db.User.findOne({ where: {
        email: 'fakedinesh@piedpiper.se'
      }}) 
      await db.Participation.create({
        userId: dinesh.id,
        collabId: openSourceProject.id
      })
    } catch(err) {
      console.log(err)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Participations', null, {})
  }
};
