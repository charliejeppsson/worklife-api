import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {
  createAccessToken,
  createRefreshToken,
  setRefreshTokenCookie
} from '../../middleware/auth'

const AuthMutations = {
  login: async (parent, { email, password }, context, info) => {
    // Check email
    const user = await context.db.User.findOne({ where: { email: email }})
    const loginError = new Error('No match found for either email or password!')
    if (!user) { throw loginError }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) { throw loginError }
    
    // Refresh both tokens
    const newRefreshToken = await createRefreshToken(user.id)
    const newAccessToken = await createAccessToken(user.id)

    // Send refresh token as cookie and access token in res body (local storage) 
    context.res = setRefreshTokenCookie(newRefreshToken, context.res)
    return { user: user.dataValues, accessToken: newAccessToken }
  },

  logout: async (parent, args, context, info) => {
    context.res.clearCookie('refreshToken')
    return { user: {}, accessToken: '' }
  }
}

export default { AuthMutations }
