export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sector: {
        type: Sequelize.STRING,
        allowNull: false
      },
      visible: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      initials: {
        type: Sequelize.STRING,
        allowNull: false
      },
      coworkingUnitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CoworkingUnits',
          key: 'id',
          as: 'coworkingUnitId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies')
  }
}
