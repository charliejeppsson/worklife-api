export default (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Events',
        key: 'id',
        as: 'eventId'
      }
    }
  }, {});

  Attendance.associate = (models) => {
    Attendance.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    Attendance.belongsTo(models.Event, {
      foreignKey: 'eventId',
      onDelete: 'CASCADE'
    })
  };
  return Attendance;
};
