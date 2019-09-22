import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'
import db from '../models'

require('dotenv').config() // Env variables
const { ACCESS_TOKEN_AUTH_SECRET, REFRESH_TOKEN_AUTH_SECRET } = process.env

export const createAccessToken = async (userId) => {
  return jwt.sign({ userId }, ACCESS_TOKEN_AUTH_SECRET, { expiresIn: '15m' })
}

export const createRefreshToken = async (userId) => {
  return jwt.sign({ userId }, REFRESH_TOKEN_AUTH_SECRET, { expiresIn: '30d' })
}

export const setRefreshTokenCookie = (refreshToken, res) => {
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days in milliseconds
  })
  return res
}

export const verifyAccessToken = async (req) => {
  const authError = new AuthenticationError(
    "Couldn't authenticate user. Please log in again."
  )
  if (!req.headers.authorization) { return authError }

  const accessToken = req.headers.authorization.split(' ')[1]
  console.log('accessToken from headers: ', accessToken)
  if (!accessToken) { return authError }

  let userId
  try {
    const payload = jwt.verify(accessToken, ACCESS_TOKEN_AUTH_SECRET)
    userId = payload.userId
  } catch(err) {
    console.log('Invalid access token! Error: ', err)
    return authError
  }
  if (!userId) { return authError }

  const user = await db.User.findByPk(userId)
  if (!user) { return authError }
}
