export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CoworkingUnits', [
      {
        city: 'Göteborg',
        address: 'Kungsportsavenyn 21',
        email: 'ka21@convendum.se',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        city: 'Stockholm',
        address: 'Vasagatan 16',
        email: 'vg16@convendum.se',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        city: 'Stockholm',
        address: 'Regeringsgatan 30',
        email: 'rg30@convendum.se',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        city: 'Stockholm',
        address: 'Katarinavägen 15',
        email: 'kv15@convendum.se',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        city: 'Stockholm',
        address: 'Västra Järnvägsgatan 3',
        email: 'vj3@convendum.se',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
   .catch(error => console.log('Error: ', error.name)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CoworkingUnits', null, {});
  }
}
