export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        title: 'React meetup',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-11T16:00:00'),
        endTime: new Date('2019-10-11T17:00:00'),
        userId: 7,
        spaceId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'Fundraising lecture with Gavin Belson',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-15T16:00:00'),
        endTime: new Date('2019-10-15T17:00:00'),
        userId: 19,
        spaceId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'React meetup',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-11T16:00:00'),
        endTime: new Date('2019-10-11T17:00:00'),
        userId: 13,
        spaceId: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error.name)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  }
}
