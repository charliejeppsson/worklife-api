export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Collabs', [
      {
        title: 'Fintech design project',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        duration: 30,
        compensation: 2000,
        userId: 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'Open-source maintainer wanted',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        duration: 0,
        compensation: 0,
        userId: 21,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error.name))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Collabs', null, {})
  }
}
