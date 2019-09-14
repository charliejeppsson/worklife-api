import 'regenerator-runtime/runtime'

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567873024/steve-johnson-IDmD4iw9XvE-unsplash_qesfzg.jpg',
        info: 'Photo by Steve Johnson on Unsplash',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567873809/photo-1498050108023-c5249f4df085_ge7dwt.jpg',
        info: 'Photo by Christopher Gower on Unsplash',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error))
    .then(() =>  queryInterface.bulkInsert('Collabs', [
      {
        title: 'Fintech design project',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        duration: 30,
        compensation: 2000,
        userId: 6,
        imageId: 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: 'Open-source maintainer wanted',
        description: 'Yada yada yada yada yada yada yada yada yada yada.',
        duration: 0,
        compensation: 0,
        userId: 3,
        imageId: 8,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {}))
    .catch(error => console.log('Error: ', error))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Collabs', null, {})
  }
}
