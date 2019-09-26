export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Attendances', [
      { // React meetup --------------
        userId: 1,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 4,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 5,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 6,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { // Fundraising lecture --------------
        userId: 6,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 7,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 2,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 8,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { // Mandarin 101 --------------
        userId: 7,
        eventId: 3, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 5,
        eventId: 3, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 1,
        eventId: 3, 
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Attendances', null, {})
  }
}
