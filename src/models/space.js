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
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Each space must have an image.' },
      references: { model: 'Images', key: 'id', as: 'imageId' }
    },
    capacity: { type: DataTypes.INTEGER },
    wifi: {
      type: DataTypes.BOOLEAN,
      defaultValue: true 
    },
    coffee: {
      type: DataTypes.BOOLEAN,
      defaultValue: true 
    },
    tea: {
      type: DataTypes.BOOLEAN,
      defaultValue: false 
    },
    snacks: {
      type: DataTypes.BOOLEAN,
      defaultValue: false 
    },
    meals: {
      type: DataTypes.BOOLEAN,
      defaultValue: false 
    },
    opensAt: { type: DataTypes.STRING },
    closesAt: { type: DataTypes.STRING }
  }, {})

  Space.associate = (models) => {
    Space.belongsTo(models.Image, {
      foreignKey: 'imageId'
    })
  }

  return Space
}
