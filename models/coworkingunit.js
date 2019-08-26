export default (sequelize, DataTypes) => {
  const CoworkingUnit = sequelize.define('CoworkingUnit', {
    city: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'City is required.' }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Address is required.' }
    },
    email: {
      type: DataTypes.STRING
      allowNull: { args: false, msg: 'Email is required.' }
      unique: { args: true, msg: 'Email address already exists.' },
      validate: {
        isEmail: { args: true, msg: 'Please enter a valid email address.' },
      }
    }
  }, {})

  CoworkingUnit.associate = function(models) {
    CoworkingUnit.hasMany(models.Company, {
      foreignKey: 'coworkingUnitId'
    })
  }

  return CoworkingUnit;
}
