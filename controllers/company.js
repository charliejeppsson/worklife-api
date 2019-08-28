import model from '../models'

const { Company } = model

class CompaniesController {
  static getCompanies(req, res) {
    return Company.findAll()
      .then(companies => res.status(200).send({
        success: true,
        companies
      }))
      .catch(error => res.status(400).send(error))
  }

  static getCompany(req, res) {
    return Company
      .findByPk(req.params.companyId)
      .then(company => {
        if (company) {
          res.status(200).send({ success: true, company })
        } else {
          res.status(404).send({ success: false })
        }
      })
      .catch(error => res.status(404).send(error))
  }

  static createCompany(req, res) {
    const { name, sector, visible, initials, coworkingUnitId } = req.body
    return Company.create({ name, sector, visible, initials, coworkingUnitId })
      .then(companyData => res.status(201).send({
        success: true,
        message: 'Company successfully created.',
        companyData
      }))
      .catch(error => res.status(400).send(error))
  }

  static updateCompany(req, res) {
   const { name, sector, visible, initials, coworkingUnitId } = req.body
   return Company
    .findByPk(req.params.companyId)
    .then((company) => {
      company.update({
        name: name || company.name,
        sector: sector || company.sector,
        visible: visible || company.visible,
        initials: initials || company.initials,
        coworkingUnitId: coworkingUnitId || company.coworkingUnitId
      })
      .then((updatedCompany) => {
        res.status(200).send({
          message: 'Company updated successfully.',
          data: {
            name: name || updatedCompany.name,
            sector: sector || updatedCompany.sector,
            visible: visible || updatedCompany.visible,
            initials: initials || updatedCompany.initials,
            coworkingUnitId: coworkingUnitId || updatedCompany.coworkingUnitId
          }
        })
      })
      .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
  } 

  static deleteCompany(req, res) {
    return Company
      .findByPk(req.params.companyId)
      .then(company => {
        if(!company) {
          return res.status(400).send({ message: 'Company not found.' })
        }
        return company
          .destroy()
          .then(() => res.status(200).send({
            message: 'Company successfully deleted.'
          }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}

export default CompaniesController
