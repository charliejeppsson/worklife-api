import express from 'express'
import jwt from 'jsonwebtoken'

import db from '../../../models'
import {
  createAccessToken,
  createRefreshToken,
  setRefreshTokenCookie
} from '../../../middleware/auth'

const router = express.Router()
require('dotenv').config() // Env variables
const { REFRESH_TOKEN_AUTH_SECRET } = process.env

const serializeUser = (user) => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  title: user.title,
  avatar: user.avatar
})

router.post('/', async (req, res) => {
  const { refreshToken } = req.cookies
  if (!refreshToken) { // Don't refresh tokens if no existing refreshToken
    return res.send({ user: {}, accessToken: '' });
  }

  let payload = null
  try {
    payload = jwt.verify(refreshToken, REFRESH_TOKEN_AUTH_SECRET)
  } catch (err) { // Don't refresh tokens if refreshToken is invalid
    console.log('Refresh token verification error: ', err);
    return res.send({ user: {}, accessToken: '' });
  }

  const user = await db.User.findByPk(payload.userId);
  if (!user) { // Don't refresh tokens if user can't be found
    return res.send({ user: {}, accessToken: '' });
  }

  // Refresh both tokens
  const newRefreshToken = await createRefreshToken(payload.userId)
  const newAccessToken = await createAccessToken(payload.userId)

  // Send refresh token as cookie and access token in res body (local storage) 
  res = setRefreshTokenCookie(newRefreshToken, res)
  return res.send({ accessToken: newAccessToken, user: serializeUser(user)})
})

export default router
