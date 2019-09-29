export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Spaces',
      'capacity',
     Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Spaces',
      'capacity'
    )
  }
}
