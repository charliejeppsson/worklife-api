export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Charlie',
        lastName: 'Jeppsson',
        email: 'charlie.jeppsson1@gmail.se',
        password: '1234567890',
        title: 'Community Manager',
        avatar: 'https://res.cloudinary.com/convendum/image/upload/v1564926762/p98utcvtcuxfsqopqcse.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Jared',
        lastName: 'Dunn',
        email: 'fakejared@piedpiper.se',
        password: '1234567890',
        title: 'COO',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567852811/jared_du8hnj.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Richard',
        lastName: 'Hendricks',
        email: 'fakerichard@piedpiper.se',
        password: '1234567890',
        title: 'CEO',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567785725/richard-hendricks_m5wydv.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Bertram',
        lastName: 'Gilfoyle',
        email: 'fakegilfoyle@piedpiper.se',
        password: '1234567890',
        title: 'Systems Architect',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567852854/mxdeacpnwoullwnryifa.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Dinesh',
        lastName: 'Chugtai',
        email: 'fakedinesh@piedpiper.se',
        password: '1234567890',
        title: 'Developer',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853019/images_cwybiz.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Erlich',
        lastName: 'Bachman',
        email: 'fakeerlich@piedpiper.se',
        password: '1234567890',
        title: 'Angel Investor',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853108/TJ-Miller-640x360_udqcxf.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Monica',
        lastName: 'Hall',
        email: 'fakemonica@raviga.se',
        password: '1234567890',
        title: 'VC Associate',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853477/undefined_clk1fv.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Bighead',
        lastName: 'Bighetti',
        email: 'fakebighead@piedpiper.se',
        password: '1234567890',
        title: 'Co-Founder',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853227/knqd7ud3uff8dx9kbv8r.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Gavin',
        lastName: 'Belson',
        email: 'fakegavin@hooli.se',
        password: '1234567890',
        title: 'Founder',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853697/images_rhdgxw.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Jian-Yáng',
        lastName: '',
        email: 'fakejianyang@octopus.se',
        password: '1234567890',
        title: 'Founder',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853276/jian-yang-small_qygqs1.jpg',
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
