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
    // Image.hasOne(models.Space, {
    //   onDelete: 'CASCADE'
    // })
    // Image.hasOne(models.Event, {
    //   onDelete: 'CASCADE'
    // })
    // Image.hasOne(models.Collab, {
    //   onDelete: 'CASCADE'
    // })
    // Image.hasOne(models.NewsPost, {
    //   onDelete: 'CASCADE'
    // })
  }

  return Image
}
