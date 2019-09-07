export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [
      {
        name: 'Indigo',
        city: 'Stockholm',
        address: 'Blue Street 34',
        type: 'Café',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Artsy',
        city: 'Stockholm',
        address: 'Renaissance Road 108',
        type: 'Restaurant',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Octopus Bar',
        city: 'Stockholm',
        address: 'P Sherman, 42 Wallaby Way',
        type: 'Bar',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error.name)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {})
  }
}
