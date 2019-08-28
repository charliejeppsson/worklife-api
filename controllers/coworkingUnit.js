import model from '../models'

const { CoworkingUnit } = model

class CoworkingUnitsController {
  static getCoworkingUnits(req, res) {
    return CoworkingUnit.findAll()
      .then(coworkingUnits => res.status(200).send({
        success: true,
        coworkingUnits
      }))
      .catch(error => res.status(400).send(error))
  }

  static getCoworkingUnit(req, res) {
    return CoworkingUnit
      .findByPk(req.params.coworkingUnitId)
      .then(coworkingUnit => {
        if (coworkingUnit) {
          res.status(200).send({ success: true, coworkingUnit })
        } else {
          res.status(404).send({ success: false })
        }
      })
      .catch(error => res.status(404).send(error))
  }

  static createCoworkingUnit(req, res) {
    const { city, address, email } = req.body
    return CoworkingUnit.create({ city, address, email })
      .then(coworkingUnit => res.status(201).send({
        success: true,
        message: 'Coworking unit successfully created.',
        coworkingUnit
      }))
      .catch(error => res.status(400).send(error))
  }

  static updateCoworkingUnit(req, res) {
   const { city, address, email } = req.body
   return CoworkingUnit
    .findByPk(req.params.coworkingUnitId)
    .then((coworkingUnit) => {
      coworkingUnit.update({
        city: city || coworkingUnit.city,
        address: address || coworkingUnit.address,
        email: email || coworkingUnit.email,
      })
      .then((updatedCoworkingUnit) => {
        res.status(200).send({
          message: 'CoworkingUnit updated successfully.',
          data: {
            city: city || updatedCoworkingUnit.city,
            address: address || updatedCoworkingUnit.address,
            email: email || updatedCoworkingUnit.email,
          }
        })
      })
      .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
  }

  static deleteCoworkingUnit(req, res) {
    return CoworkingUnit
      .findByPk(req.params.coworkingUnitId)
      .then(coworkingUnit=> {
        if(!coworkingUnit) {
          return res.status(400).send({ message: 'Coworking unit not found.' })
        }
        return coworkingUnit
          .destroy()
          .then(() => res.status(200).send({
            message: 'Coworking unit successfully deleted.'
          }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}

export default CoworkingUnitsController
