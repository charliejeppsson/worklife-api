import 'regenerator-runtime/runtime'
import db from '../../models'

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      const firstImage = await db.Image.create({ url: '', info: '' })
      const secondImage = await db.Image.create({ url: '', info: '' })
      const thirdImage = await db.Image.create({ url: '', info: '' })

      await db.Benefit.create({
        title: '10% discount on accommodation',
        company: '1337 Hotels',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageId: firstImage.id
      })

      await db.Benefit.create({
        title: 'Sign up for Yber, first ride is on us',
        company: 'Yber',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageId: secondImage.id
      })

      await db.Benefit.create({
        title: '15% gym card discount',
        company: 'Wörkout',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageId: thirdImage.id
      })
    } catch(err) {
      console.log(err)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Benefits', null, {})
  }
};
