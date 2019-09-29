export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Spaces', 'opensAt', {
          type: Sequelize.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('Spaces', 'closesAt', {
          type: Sequelize.STRING,
        }, { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Spaces', 'opensAt', { transaction: t }),
        queryInterface.removeColumn('Spaces', 'closesAt', { transaction: t })
      ])
    })
  }
}
