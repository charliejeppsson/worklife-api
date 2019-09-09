export default (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    url: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Image URL is required.' }
    },
    info: {
      type: DataTypes.STRING
    }
  }, {})

  Image.associate = function(models) {

  }

  return Image
}
