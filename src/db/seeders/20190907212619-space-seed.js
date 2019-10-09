import 'regenerator-runtime/runtime'
import db from '../../models'

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      // Create space image records
      const firstImage = await db.Image.create({
        url: 'https://images.pexels.com/photos/2159074/pexels-photo-2159074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Quang Nguyen Vinh from Pexels'
      })
      const secondImage = await db.Image.create({
        url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Tom Balabaud from Pexels'
      })
      const thirdImage = await db.Image.create({
        url: 'https://images.pexels.com/photos/2067576/pexels-photo-2067576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Marta Dzedyshko from Pexels'
      })

      // Create space records
      await db.Space.create({
        name: 'Indigo',
        city: 'Stockholm',
        address: 'Blue Street 34',
        type: 'Café',
        capacity: 30,
        wifi: true,
        coffee: true,
        tea: true,
        snacks: true,
        meals: true,
        opensAt: '09:00',
        closesAt: '17:00',
        imageId: firstImage.id
      })
      await db.Space.create({
        name: 'Artsy',
        city: 'Stockholm',
        address: 'Renaissance Road 108',
        type: 'Restaurant',
        capacity: 20,
        wifi: true,
        coffee: true,
        tea: true,
        snacks: true,
        meals: false,
        opensAt: '10:00',
        closesAt: '16:00',
        imageId: secondImage.id
      })
      await db.Space.create({
        name: 'Octopus',
        city: 'Stockholm',
        address: 'P Sherman, 42 Wallaby Way',
        type: 'Bar',
        capacity: 25,
        wifi: true,
        coffee: true,
        tea: true,
        snacks: false,
        meals: false,
        opensAt: '8:00',
        closesAt: '17:00',
        imageId: thirdImage.id
      })
    } catch(err) {
      console.log(err)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {})
  }
}
