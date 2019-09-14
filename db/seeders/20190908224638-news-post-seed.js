import 'regenerator-runtime/runtime'

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        url: 'https://images.pexels.com/photos/2067576/pexels-photo-2067576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Marta Dzedyshko from Pexels',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567875138/photo-1508804185872-d7badad00f7d_nl1haf.jpg',
        info: 'Photo by Hanson Lu on Unsplash',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567873809/photo-1498050108023-c5249f4df085_ge7dwt.jpg',
        info: 'Photo by Christopher Gower on Unsplash',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Tom Balabaud from Pexels',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567779514/react-logo_wgzm79.png',
        info: null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567873024/steve-johnson-IDmD4iw9XvE-unsplash_qesfzg.jpg',
        info: 'Photo by Steve Johnson on Unsplash',
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
        url: 'https://images.pexels.com/photos/2159074/pexels-photo-2159074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Quang Nguyen Vinh from Pexels',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    .catch(error => console.log('Error: ', error)) 
    
    .then(() => queryInterface.bulkInsert('NewsPosts', [
      {
        title: 'Octopus bar is open for business',
        description: "Have you ever been able to brag to your friends about your workspace offering all...",
        content: "Have you ever been able to brag to your friends about your workspace offering all of the 7 great recipes for octopus? Didn't think so. Well, now you can brag all you want since our latest addition to our network of spaces does just that.",
        userId: 1,
        eventId: null,
        collabId: null,
        imageId: 9,
        createdAt : new Date('2019-08-27T16:15:00'),
        updatedAt : new Date('2019-08-27T16:15:00')
      },
      {
        title: 'Learn mandarin from a master',
        description: 'Take a once-in-a-lifetime opportunity to learn a bit of Chinese, by a true master...',
        content: 'Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada.',
        userId: 10,
        eventId: 3,
        collabId: null,
        imageId: 10,
        createdAt : new Date('2019-08-28T11:20:00'),
        updatedAt : new Date('2019-08-28T11:20:00')
      },
      {
        title: 'Open-source maintainers needed',
        description: 'Our agency just caught a big fintech fish for a large-scale project and...',
        content: 'Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada.',
        userId: 4,
        eventId: null,
        collabId: 2,
        imageId: 11,
        createdAt : new Date('2019-09-02T12:20:00'),
        updatedAt : new Date('2019-09-02T12:20:00')
      },
      {
        title: 'Please give it up for restaurant Artsy',
        description: "Ever wondered what it's like to work inside of a painting? Well, now you can find...",
        content: 'Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada.',
        userId: 7,
        eventId: null,
        collabId: null,
        imageId: 12,
        createdAt : new Date('2019-09-03T15:00:00'),
        updatedAt : new Date('2019-09-03T15:00:00')
      },
      {
        title: 'The React meetup of the year right here @ Wörklife',
        description: 'The time is once again upon us to share, learn, laugh and perhaps even cry...',
        content: 'The time is once again upon us to share, learn, laugh and perhaps even cry a little together, basking in the bliss the is React. The speakers this time include Dan Abramov, Ryan Florence and N Parashuram.',
        userId: 3,
        eventId: 1,
        collabId: null,
        imageId: 13,
        createdAt : new Date('2019-09-04T14:00:00'),
        updatedAt : new Date('2019-09-04T14:00:00')
      },
      {
        title: 'Epic designers wanted',
        description: 'Our agency just caught a big fish and need experienced designers ASAP...',
        content: 'Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada.',
        userId: 6,
        eventId: null,
        collabId: 1,
        imageId: 14,
        createdAt : new Date('2019-09-06T10:00:00'),
        updatedAt : new Date('2019-09-06T10:00:00')
      },
      {
        title: 'Get inspired by the one and only Gavin Belson',
        description: 'Wörklife members have been blessed with an exclusive opportunity to learn all abo...',
        content: 'Wörklife members have been blessed with an exclusive opportunity to learn all abo...',
        userId: 9,
        eventId: 2,
        collabId: null,
        imageId: 15,
        createdAt : new Date('2019-09-07T17:05:00'),
        updatedAt : new Date('2019-09-07T17:05:00')
      },
      {
        title: 'Café Indigo just joined the club',
        description: "Unless you've been living in a cave for the past seven years, odds are you've already heard about these guys. They're the best...",
        content: "Unless you've been living in a cave for the past seven years, odds are you've already heard about these guys. They're the best in the biz.",
        userId: 1,
        eventId: null,
        collabId: null,
        imageId: 16,
        createdAt : new Date('2019-09-09T13:45:00'),
        updatedAt : new Date('2019-09-09T13:45:00')
      }
    ], {})
    )
    .catch(error => console.log('Error: ', error)) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('NewsPosts', null, {});
  }
};
