export default {
  up: (queryInterface, Sequelize) => {
    // const charlieId = await queryInterface.rawSelect('User', {
    //   where: { email: 'charlie.jeppsson1@gmail.com' }
    // }, ['id'])
    // console.log('charlieId: ', charlieId)
    // const jaredId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakejared@piedpiper.se' }
    // }, ['id'])
    // const richardId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakerichard@piedpiper.se' }
    // }, ['id'])
    // const gilfoyleId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakegilfoyle@piedpiper.se' }
    // }, ['id'])
    // const dineshId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakedinesh@piedpiper.se' }
    // }, ['id'])
    // const erlichId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakeerlich@bachmanity.se' }
    // }, ['id'])
    // const monicaId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakemonica@raviga.se' }
    // }, ['id'])
    // const bigheadId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakebighead@raviga.se' }
    // }, ['id'])
    // const gavinId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakegavin@hooli.se' }
    // }, ['id'])
    // const jianyangId = await queryInterface.rawSelect('User', {
    //   where: { email: 'fakejianyang@octopus.se' }
    // }, ['id'])
    return queryInterface.bulkInsert('Attendances', [
      { // React meetup --------------
        userId: 7,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 24,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 21,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 23,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 29,
        eventId: 1, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { // Fundraising lecture --------------
        userId: 26,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 22,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 29,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 25,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 28,
        eventId: 2, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { // Mandarin 101 --------------
        userId: 29,
        eventId: 3, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 21,
        eventId: 3, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 22,
        eventId: 3, 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 7,
        eventId: 3, 
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error.name)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Attendances', null, {})
  }
}
