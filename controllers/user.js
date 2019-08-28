import model from '../models'

const { User } = model

class UsersController {
  static getUsers(req, res) {
    return User.findAll()
      .then(users => res.status(200).send({
        success: true,
        users
      }))
      .catch(error => res.status(400).send(error))
  }

  static getUser(req, res) {
    return User
      .findByPk(req.params.userId)
      .then(user => {
        if (user) {
          res.status(200).send({ success: true, user })
        } else {
          res.status(404).send({ success: false })
        }
      })
      .catch(error => res.status(400).send(error))
  }

  static createUser(req, res) {
    const { firstName, lastName, email, password, companyId } = req.body
    return User.create({ firstName, lastName, email, password, companyId })
      .then(userData => res.status(201).send({
        success: true,
        message: 'User successfully created.',
        userData
      }))
      .catch(error => res.status(400).send(error))
  }

  static updateUser(req, res) {
   const { firstName, lastName, email, password, companyId } = req.body
   return User
    .findByPk(req.params.userId)
    .then((user) => {
      user.update({
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
        email: email || user.email,
        password: password || user.password,
        companyId: companyId || user.companyId
      })
      .then((updatedUser) => {
        res.status(200).send({
          message: 'User updated successfully.',
          data: {
            firstName: firstName || updatedUser.firstName,
            lastName: lastName || updatedUser.lastName,
            email: email || updatedUser.email,
            password: password || updatedUser.password,
            companyId: companyId || updatedUser.companyId
          }
        })
      })
      .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
  } 

  static deleteUser(req, res) {
    return User
      .findByPk(req.params.userId)
      .then(user => {
        if(!user) {
          return res.status(400).send({ message: 'User not found.' })
        }
        return user
          .destroy()
          .then(() => res.status(200).send({
            message: 'User successfully deleted.'
          }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}

export default UsersController
