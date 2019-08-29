import bcrypt from 'bcryptjs'
import { User } from '../../../models'
import BaseController from './baseController'

class UsersController extends BaseController {
  constructor() {
    super(User)
  }

  create(req, res) {
    let newUser = User.build(req.body)
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser.save()
          .then(user => res.status(201).send({
            message: 'Record successfully created.',
            user
          }))
          .catch(err => res.status(400).send(err))
      })
    })
  }

  update(req, res) {
    return User
      .findByPk(req.params.id)
      .then(user => {
        if (user) {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (err) throw err
              req.body.password = hash
              user.update(req.body)
                .then(updatedUser => {
                  res.status(200).send({
                    message: 'Record updated successfully.',
                    user: updatedUser
                  })
                })
                .catch(err => res.status(400).send(err))
            })
          })
        } else {
          res.status(404).send({ message: 'Record not found.' })
        }
      })
      .catch(err => res.status(400).send(err))
  }
}

export default UsersController
