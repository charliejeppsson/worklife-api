export default (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    date: {
      type: DataTypes.DATE,
      allowNull: { args: false, msg: 'Date is required.' }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Each booking must have a user.' },
      references: { model: 'Users', key: 'id', as: 'userId' }
    },
    spaceId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Each booking must have a space.' },
      references: { model: 'Spaces', key: 'id', as: 'spaceId' }
    }
  }, {})

  Booking.associate = (models) => {
    Booking.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Booking.belongsTo(models.Space, {
      foreignKey: 'spaceId'
    })
  }

  return Booking
}
