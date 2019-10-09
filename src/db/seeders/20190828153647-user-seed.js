import 'regenerator-runtime/runtime'
import db from '../../models'
import bcrypt from 'bcryptjs'

function encryptPassword(password) {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      await db.User.create({
        firstName: 'Charlie',
        lastName: 'Jeppsson',
        email: 'charlie@worklife.se',
        password: encryptPassword('1234567890'),
        title: 'Community Manager',
        avatar: 'https://res.cloudinary.com/convendum/image/upload/v1564926762/p98utcvtcuxfsqopqcse.jpg'
      })

      await db.User.create({
        firstName: 'Jared',
        lastName: 'Dunn',
        email: 'fakejared@piedpiper.se',
        password: encryptPassword('1234567890'),
        title: 'COO',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567852811/jared_du8hnj.png'
      })

      await db.User.create({
        firstName: 'Richard',
        lastName: 'Hendricks',
        email: 'fakerichard@piedpiper.se',
        password: encryptPassword('1234567890'),
        title: 'CEO',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567785725/richard-hendricks_m5wydv.jpg'
      })

      await db.User.create({
        firstName: 'Bertram',
        lastName: 'Gilfoyle',
        email: 'fakegilfoyle@piedpiper.se',
        password: encryptPassword('1234567890'),
        title: 'Systems Architect',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567852854/mxdeacpnwoullwnryifa.jpg'
      })

      await db.User.create({
        firstName: 'Dinesh',
        lastName: 'Chugtai',
        email: 'fakedinesh@piedpiper.se',
        password: encryptPassword('1234567890'),
        title: 'Developer',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853019/images_cwybiz.jpg'
      })

      await db.User.create({
        firstName: 'Erlich',
        lastName: 'Bachman',
        email: 'fakeerlich@piedpiper.se',
        password: encryptPassword('1234567890'),
        title: 'Angel Investor',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853108/TJ-Miller-640x360_udqcxf.jpg'
      })

      await db.User.create({
        firstName: 'Monica',
        lastName: 'Hall',
        email: 'fakemonica@raviga.se',
        password: encryptPassword('1234567890'),
        title: 'VC Associate',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853477/undefined_clk1fv.jpg'
      })

      await db.User.create({
        firstName: 'Bighead',
        lastName: 'Bighetti',
        email: 'fakebighead@piedpiper.se',
        password: encryptPassword('1234567890'),
        title: 'Co-Founder',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853227/knqd7ud3uff8dx9kbv8r.jpg'
      })

      await db.User.create({
        firstName: 'Gavin',
        lastName: 'Belson',
        email: 'fakegavin@hooli.se',
        password: encryptPassword('1234567890'),
        title: 'Founder',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853697/images_rhdgxw.jpg'
      })

      await db.User.create({
        firstName: 'Jian-Yáng',
        lastName: '',
        email: 'fakejianyang@octopus.se',
        password: encryptPassword('1234567890'),
        title: 'Founder',
        avatar: 'https://res.cloudinary.com/charliejeppsson/image/upload/v1567853276/jian-yang-small_qygqs1.jpg'
      })
    } catch(err) {
      console.log(err)
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
}
