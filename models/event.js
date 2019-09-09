export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Title is required.' }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Description is required.' }
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: { args: false, msg: 'Start time is required.' }
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: { args: false, msg: 'Start time is required.' }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Each event must have a user.' },
      references: { model: 'Users', key: 'id', as: 'userId' }
    },
    spaceId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Each event must have a space.' },
      references: { model: 'Spaces', key: 'id', as: 'spaceId' }
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Each event must have an image.' },
      references: { model: 'Images', key: 'id', as: 'imageId' }
    }
  }, {})

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Event.belongsTo(models.Space, {
      foreignKey: 'spaceId'
    })
    Event.belongsTo(models.Image, {
      foreignKey: 'imageId'
    })
  }

  return Event
}
