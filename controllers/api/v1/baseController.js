class BaseController {
  constructor (model) {
    this.model = model
    this.modelName = model.getTableName()
  }

  index(req, res) {
    return this.model.findAll()
      .then(records => res.status(200).send({ [this.modelName]: records }))
      .catch(err => res.status(400).send(err))
  }
  
  read(req, res) {
    return this.model.findByPk(req.params.id)
      .then(record => {
        if (record) {
          res.status(200).send({ [this.modelName]: record })
        } else {
          res.status(404).send({ message: 'Record not found' })
        }
      })
      .catch(err => res.status(400).send(err))
  }

  create(req, res) {
    return this.model.create(req.body) 
      .then(record => res.status(201).send({
        message: 'Record successfully created.',
        [this.modelName]: record
      }))
      .catch(err => res.status(400).send(err))
  }

  update(req, res) {
    return this.model
      .findByPk(req.params.id)
      .then(record => record
        .update(req.body)
        .then(updatedUser => {
          res.status(200).send({
            message: 'Record updated successfully.',
            [this.modelName]: updatedUser
          })
        })
        .catch(err => res.status(400).send(err))
      ) 
      .catch(err => res.status(400).send(err))
  }

  delete(req, res) {
    return this.model
      .findByPk(req.params.id)
      .then(record => {
        if (record) {
          return record
            .destroy()
            .then(() => res.status(200).send({
              message: 'Record successfully deleted.'
            }))
            .catch(err => res.status(400).send(err))
        } else {
          return res.status(404).send( { message: 'Record not found.' })
        }
      })
      .catch(err => res.status(400).send(err))
  }
}

export default BaseController
