export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Participations', [
      { // Design project
        userId: 7,
        collabId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 25,
        collabId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 28,
        collabId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { // Open-source project
        userId: 23,
        collabId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 24,
        collabId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error.name)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Participations', null, {})
  }
};
