export default (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Company name is required.' }
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Company sector is required.' }
    },
    visible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    initials: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Company initials is required.' }
    }
  }, {})

  Company.associate = function(models) {
    Company.hasMany(models.User, {
      foreignKey: 'companyId'
    })

    Company.belongsTo(models.CoworkingUnit, {
      foreignKey: 'coworkingUnitId'
    })
  }

  return Company
}
