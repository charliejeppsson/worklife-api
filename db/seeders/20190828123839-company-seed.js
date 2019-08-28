export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'Convendum Test',
        sector: 'Real Estate',
        visible: true,
        initials: 'CT',
        coworkingUnitId: 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Tesla Motors',
        sector: 'Transportation',
        visible: true,
        initials: 'TM',
        coworkingUnitId: 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'SpaceX',
        sector: 'Transportation',
        visible: true,
        initials: 'SX',
        coworkingUnitId: 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Neuralink',
        sector: 'Biotechnology',
        visible: true,
        initials: 'NL',
        coworkingUnitId: 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'The Boring Company',
        sector: 'Infrastructure',
        visible: true,
        initials: 'TBC',
        coworkingUnitId: 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Hyperloop',
        sector: 'Transportation',
        visible: true,
        initials: 'HL',
        coworkingUnitId: 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'PayPal',
        sector: 'Fintech',
        visible: true,
        initials: 'PP',
        coworkingUnitId: 6,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
   .catch(error => console.log('Error: ', error.name)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  }
}
