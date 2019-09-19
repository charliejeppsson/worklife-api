import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const AuthQueries = {
  currentUser: async (parent, args, context, info) => {
    const { token } = context.cookies
    let user = {}
    if (token) {
      const { userId } = jwt.verify(token, process.env.AUTH_SECRET)
      user = await context.db.User.findByPk(userId)
      return { ...user.dataValues }
    }
    return {
      userId: null,
      firstName: null,
      lastName: null,
      email: null,
      title: null,
      avatar: null
    }
  }
}

const AuthMutations = {
  login: async (parent, { email, password }, context, info) => {
    const user = await context.db.User.findOne({ where: { email: email }})
    const loginError = new Error('No match found for either email or password!')
    if (!user) { throw loginError }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) { throw loginError }
    const token = jwt.sign(
      { userId: user.id },
      process.env.AUTH_SECRET,
      { expiresIn: 60 * 60 * 24 * 7 }
    )
    context.res.cookie('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7
    })
    console.log('Session token cookie added!')
    return { user: user.dataValues }
  },

  logout: async (parent, args, context, info) => {
    context.res.clearCookie('token')
    console.log('Session token cookie removed!')
    return { user:
      {
        userId: null,
        firstName: null,
        lastName: null,
        email: null,
        title: null,
        avatar: null
      }
    }
  }
}

export default { AuthQueries, AuthMutations }
