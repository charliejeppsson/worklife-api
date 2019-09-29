export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Spaces', 'wifi', {
          type: Sequelize.BOOLEAN
        }, { transaction: t }),
        queryInterface.addColumn('Spaces', 'coffee', {
          type: Sequelize.BOOLEAN,
        }, { transaction: t }),
        queryInterface.addColumn('Spaces', 'tea', {
          type: Sequelize.BOOLEAN,
        }, { transaction: t }),
        queryInterface.addColumn('Spaces', 'snacks', {
          type: Sequelize.BOOLEAN,
        }, { transaction: t }),
        queryInterface.addColumn('Spaces', 'meals', {
          type: Sequelize.BOOLEAN,
        }, { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Spaces', 'wifi', { transaction: t }),
        queryInterface.removeColumn('Spaces', 'coffee', { transaction: t }),
        queryInterface.removeColumn('Spaces', 'tea', { transaction: t }),
        queryInterface.removeColumn('Spaces', 'snacks', { transaction: t }),
        queryInterface.removeColumn('Spaces', 'meals', { transaction: t }),
      ])
    })
  }
}
