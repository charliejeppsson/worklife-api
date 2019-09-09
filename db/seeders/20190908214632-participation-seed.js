export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Participations', [
      { // Design project
        userId: 1,
        collabId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 8,
        collabId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 2,
        collabId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { // Open-source project
        userId: 3,
        collabId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 4,
        collabId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 5,
        collabId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Participations', null, {})
  }
};
