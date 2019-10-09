import 'regenerator-runtime/runtime'
import db from '../../models'

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      // Create news post image records
      const firstImage = await db.Image.create({
        url: 'https://images.pexels.com/photos/2067576/pexels-photo-2067576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Marta Dzedyshko from Pexels'
      })
      const secondImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1568476241/yux-xiang-sBNx8CBj12w-unsplash_mufuh0.jpg',
        info: 'Photo by Yux Xiang on Unsplash'
      })
      const thirdImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567873809/photo-1498050108023-c5249f4df085_ge7dwt.jpg',
        info: 'Photo by Christopher Gower on Unsplash'
      })
      const fourthImage = await db.Image.create({
        url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Tom Balabaud from Pexels'
      })
      const fifthImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1568492368/photo-1556761175-5973dc0f32e7_eqano8.jpg',
        info: 'Photo by Austin Distel on Unsplash'
      })
      const sixthImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567873024/steve-johnson-IDmD4iw9XvE-unsplash_qesfzg.jpg',
        info: 'Photo by Steve Johnson on Unsplash'
      })
      const seventhImage = await db.Image.create({
        url: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567856786/coderag_hooli_farnc5.jpg',
        info: null
      })
      const eighthImage = await db.Image.create({
        url: 'https://images.pexels.com/photos/2159074/pexels-photo-2159074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info: 'Photo by Quang Nguyen Vinh from Pexels',
      })

      // Find news posts author
      const charlie = await db.User.findOne({ where: {
        email: 'charlie@worklife.se'
      }})

      // Create news post records
      await db.NewsPost.create({
        title: 'Octopus bar is open for business',
        description: "Have you ever been able to brag to your friends about your workspace offering all...",
        content: "Have you ever been able to brag to your friends about your workspace offering all of the 7 great recipes for octopus? Didn't think so. Well, now you can brag all you want since our latest addition to our network of spaces does just that.",
        userId: charlie.id,
        eventId: null,
        collabId: null,
        imageId: firstImage.id
      })

      const learnMandarinEvent = await db.Event.findOne({ where: {
        title: 'Mandarin 101'
      }})
      await db.NewsPost.create({
        title: 'Learn mandarin from a master',
        description: 'Take a once-in-a-lifetime opportunity to learn a bit of Chinese, by a true master...',
        content: 'Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada.',
        userId: charlie.id,
        eventId: learnMandarinEvent.id,
        collabId: null,
        imageId: secondImage.id
      })

      const openSourceProject = await db.Collab.findOne({ where: {
        title: 'Open-source maintainer wanted'
      }})
      await db.NewsPost.create({
        title: 'Open-source maintainers needed',
        description: 'Our agency just caught a big fintech fish for a large-scale project and...',
        content: 'Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada.',
        userId: charlie.id,
        eventId: null,
        collabId: openSourceProject.id,
        imageId: thirdImage.id
      })

      await db.NewsPost.create({
        title: 'Please give it up for restaurant Artsy',
        description: "Ever wondered what it's like to work inside of a painting? Well, now you can find...",
        content: 'Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada.',
        userId: charlie.id,
        eventId: null,
        collabId: null,
        imageId: fourthImage.id
      })

      const reactMeetup = await db.Event.findOne({ where: {
        title: 'React meetup'
      }})
      await db.NewsPost.create({
        title: 'The React meetup of the year right here @ Wörklife',
        description: 'The time is once again upon us to share, learn, laugh and perhaps even cry...',
        content: 'The time is once again upon us to share, learn, laugh and perhaps even cry a little together, basking in the bliss the is React. The speakers this time include Dan Abramov, Ryan Florence and N Parashuram.',
        userId: charlie.id,
        eventId: reactMeetup.id,
        collabId: null,
        imageId: fifthImage.id,
      })

      const designProject = await db.Collab.findOne({ where: {
        title: 'Fintech design project'
      }})
      await db.NewsPost.create({
        title: 'Epic designers wanted',
        description: 'Our agency just caught a big fish and need experienced designers ASAP...',
        content: 'Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada.',
        userId: charlie.id,
        eventId: null,
        collabId: designProject.id,
        imageId: sixthImage.id
      })

      const belsonLecture = await db.Event.findOne({ where: {
        title: 'Fundraising lecture with Gavin Belson'
      }})
      await db.NewsPost.create({
        title: 'Get inspired by the one and only Gavin Belson',
        description: 'Wörklife members have been blessed with an exclusive opportunity to learn all abo...',
        content: 'Wörklife members have been blessed with an exclusive opportunity to learn all abo...',
        userId: charlie.id,
        eventId: belsonLecture.id,
        collabId: null,
        imageId: seventhImage.id
      })

      await db.NewsPost.create({
        title: 'Café Indigo just joined the club',
        description: "Unless you've been living in a cave for the past seven years, odds are you've already heard about these guys. They're the best...",
        content: "Unless you've been living in a cave for the past seven years, odds are you've already heard about these guys. They're the best in the biz.",
        userId: charlie.id,
        eventId: null,
        collabId: null,
        imageId: eighthImage.id
      })
    } catch(err) {
      console.log(err)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('NewsPosts', null, {});
  }
};
