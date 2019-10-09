import 'regenerator-runtime/runtime'
import db from '../../models'

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      const firstImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567873024/steve-johnson-IDmD4iw9XvE-unsplash_qesfzg.jpg',
        info: 'Photo by Steve Johnson on Unsplash'
      })
      const richard = await db.User.findOne({ where: {
        email: 'fakerichard@piedpiper.se'
      }}) 
      await db.Collab.create({
        title: 'Fintech design project',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        duration: 30,
        compensation: 2000,
        userId: richard.id,
        imageId: firstImage.id
      })

      const secondImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567873809/photo-1498050108023-c5249f4df085_ge7dwt.jpg',
        info: 'Photo by Christopher Gower on Unsplash'
      })
      const erlich = await db.User.findOne({ where: {
        email: 'fakeerlich@piedpiper.se'
      }}) 
      await db.Collab.create({
        title: 'Open-source maintainer wanted',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        duration: 0,
        compensation: 0,
        userId: erlich.id,
        imageId: secondImage.id
      })
    } catch(err) {
      console.log(err)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Collabs', null, {})
  }
}
