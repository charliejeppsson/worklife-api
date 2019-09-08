export default (sequelize, DataTypes) => {
  const Collab = sequelize.define('Collab', {
    title: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Title is required.' }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Description is required.' }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Duration is required.' }
    },
    compensation: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Compensation is required.' }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Each collab must have a user.' },
      references: { model: 'Users', key: 'id', as: 'userId' }
    }
  }, {})

  Collab.associate = function(models) {
    Collab.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  }

  return Collab
}
