import 'regenerator-runtime/runtime'
import db from '../../models'

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      const firstImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1534944655/bnmhzpha3inywgaszua5.jpg',
        info: 'https://www.scandichotels.se/'
      })
      const secondImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1534944700/h8jujujg6wnlbegxliac.jpg',
        info: 'https://www.uber.com/se/sv/'
      })
      const thirdImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1535039760/qrbfcekt4qytbadvezl1.png',
        info: 'https://www.sats.se/'
      })

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
