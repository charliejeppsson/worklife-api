import 'regenerator-runtime/runtime'

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567779514/react-logo_wgzm79.png',
        info: null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567856786/coderag_hooli_farnc5.jpg',
        info: null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567875138/photo-1508804185872-d7badad00f7d_nl1haf.jpg',
        info: 'Photo by Hanson Lu on Unsplash',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error)) 
    .then(() => queryInterface.bulkInsert('Events', [
      {
        title: 'React meetup',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-11T16:00:00'),
        endTime: new Date('2019-10-11T17:00:00'),
        userId: 3,
        spaceId: 1,
        imageId: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'Fundraising lecture with Gavin Belson',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-15T16:00:00'),
        endTime: new Date('2019-10-15T17:00:00'),
        userId: 9,
        spaceId: 2,
        imageId: 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'Mandarin 101',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        startTime: new Date('2019-10-21T16:00:00'),
        endTime: new Date('2019-10-21T17:00:00'),
        userId: 10,
        spaceId: 3,
        imageId: 6,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {}))
    .catch(error => console.log('Error: ', error)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  }
}
