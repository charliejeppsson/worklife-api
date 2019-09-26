export default (sequelize, DataTypes) => {
  const Participation = sequelize.define('Participation', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },
    collabId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Collabs',
        key: 'id',
        as: 'collabId'
      }
    }
  }, {})

  Participation.associate = (models) => {
    Participation.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    Participation.belongsTo(models.Collab, {
      foreignKey: 'collabId',
      onDelete: 'CASCADE'
    })
  }

  return Participation
};
