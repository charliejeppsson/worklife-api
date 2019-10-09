import 'regenerator-runtime/runtime'
import db from '../../models'

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      // Create event image records
      const firstImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1568492368/photo-1556761175-5973dc0f32e7_eqano8.jpg',
        info: 'Photo by Austin Distel on Unsplash'
      })
      const secondImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567856786/coderag_hooli_farnc5.jpg',
        info: null
      })
      const thirdImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1568476241/yux-xiang-sBNx8CBj12w-unsplash_mufuh0.jpg',
        info: 'Photo by Yux Xiang on Unsplash'
      })

      // Create event records
      const richard = await db.User.findOne({ where: {
        email: 'fakerichard@piedpiper.se' }
      }) 
      const indigo = await db.Space.findOne({ where: { name: 'Indigo' } })
      await db.Event.create({
        title: 'React meetup',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-11T16:00:00'),
        endTime: new Date('2019-10-11T17:00:00'),
        userId: richard.id,
        spaceId: indigo.id,
        imageId: firstImage.id
      })

      const gavin = await db.User.findOne({ where: {
        email: 'fakegavin@hooli.se' }
      }) 
      const artsy = await db.Space.findOne({ where: { name: 'Artsy' } })
      await db.Event.create({
        title: 'Fundraising lecture with Gavin Belson',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-15T16:00:00'),
        endTime: new Date('2019-10-15T17:00:00'),
        userId: gavin.id,
        spaceId: artsy.id,
        imageId: secondImage.id
      })

      const jianyang = await db.User.findOne({ where: {
        email: 'fakejianyang@octopus.se' }
      }) 
      const octopus = await db.Space.findOne({ where: { name: 'Octopus' } })
      await db.Event.create({
        title: 'Mandarin 101',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-21T16:00:00'),
        endTime: new Date('2019-10-21T17:00:00'),
        userId: jianyang.id,
        spaceId: octopus.id,
        imageId: thirdImage.id
      })
    } catch(err) {
      console.log(err)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  }
}
