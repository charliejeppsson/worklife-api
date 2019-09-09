import 'regenerator-runtime/runtime'

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/2159074/pexels-photo-2159074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Quang Nguyen Vinh from Pexels',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Tom Balabaud from Pexels',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/2067576/pexels-photo-2067576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Marta Dzedyshko from Pexels',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error)) 
    .then(() => queryInterface.bulkInsert('Spaces', [
      {
        id: 1,
        name: 'Indigo',
        city: 'Stockholm',
        address: 'Blue Street 34',
        type: 'Café',
        imageId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 2,
        name: 'Artsy',
        city: 'Stockholm',
        address: 'Renaissance Road 108',
        type: 'Restaurant',
        imageId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 3,
        name: 'Octopus Bar',
        city: 'Stockholm',
        address: 'P Sherman, 42 Wallaby Way',
        type: 'Bar',
        imageId: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {}))
    .catch(error => console.log('Error: ', error))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {})
  }
}
