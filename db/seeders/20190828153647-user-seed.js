export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Charlie',
        lastName: 'Jeppsson',
        email: 'charlie.jeppsson1@gmail.com',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'James',
        lastName: 'Murphy',
        email: 'yadayda1@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Lisa',
        lastName: 'Hendrix',
        email: 'yadayada2@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Carl',
        lastName: 'Johnsson',
        email: 'yadayada3@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Vladimir',
        lastName: 'Putin',
        email: 'yadayada4@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Aaron',
        lastName: 'Sorkin',
        email: 'yadayada5@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Wes',
        lastName: 'Anderson',
        email: 'yadayada6@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Quentin',
        lastName: 'Tarantino',
        email: 'yadayada7@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Stanley',
        lastName: 'Kubrick',
        email: 'yadayada8@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Orson',
        lastName: 'Wells',
        email: 'yadayada9@yadayada.se',
        password: '1234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
   .catch(error => console.log('Error: ', error.name)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
}
