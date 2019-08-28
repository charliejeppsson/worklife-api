import UsersController from '../controllers/user'
import CompaniesController from '../controllers/company'
import CoworkingUnitsController from '../controllers/coworkingUnit'

export default (app) => {
  app.get('/api/v1', (req, res) => res.status(200).send({
    message: 'Welcome to the epic first node+express+postgres API!'
  }))
  
  // Companies
  app.get('/api/v1/companies', CompaniesController.getCompanies)
  app.get('/api/v1/companies/:companyId', CompaniesController.getCompany)
  app.post('/api/v1/companies', CompaniesController.createCompany)
  app.put('/api/v1/companies/:companyId', CompaniesController.updateCompany)
  app.delete('/api/v1/companies/:companyId', CompaniesController.deleteCompany)
  
  // Coworking units
  app.get('/api/v1/coworking-units', CoworkingUnitsController.getCoworkingUnits)
  app.get(
    '/api/v1/coworking-units/:coworkingUnitId',
    CoworkingUnitsController.getCoworkingUnit
  )
  app.post(
    '/api/v1/coworking-units',
    CoworkingUnitsController.createCoworkingUnit
  )
  app.put(
    '/api/v1/coworking-units/:coworkingUnitId',
    CoworkingUnitsController.updateCoworkingUnit
  )
  app.delete(
    '/api/v1/coworking-units/:coworkingUnitId',
    CoworkingUnitsController.deleteCoworkingUnit
  )

  // Users
  app.get('/api/v1/users', UsersController.getUsers)
  app.get('/api/v1/users/:userId', UsersController.getUser)
  app.post('/api/v1/users', UsersController.createUser)
  app.put('/api/v1/users/:userId', UsersController.updateUser)
  app.delete('/api/v1/users/:userId', UsersController.deleteUser)
}
