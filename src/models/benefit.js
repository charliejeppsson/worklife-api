export default (sequelize, DataTypes) => {
  const Benefit = sequelize.define('Benefit', {
    title: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Title is required.' }
    },
    company: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Company is required.' }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Description is required.' }
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Each benefit must have an image.' },
      references: { model: 'Images', key: 'id', as: 'imageId' }
    }
  }, {})

  Benefit.associate = (models) => {
    Benefit.belongsTo(models.Image, {
      foreignKey: 'imageId'
    })
  }

  return Benefit
}
