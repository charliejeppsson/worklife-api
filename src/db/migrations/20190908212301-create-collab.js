export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Collabs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      compensation: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id', as: 'userId' }
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Images', key: 'id', as: 'imageId' }
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
    return queryInterface.dropTable('Collabs')
  }
}
