export default (sequelize, DataTypes) => {
  const Space = sequelize.define('Space', {
    name: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Name is required.' }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'City is required.' }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Address is required.' }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Type is required.' }
    },
  }, {})

  return Space
}
