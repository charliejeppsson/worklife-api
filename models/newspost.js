export default (sequelize, DataTypes) => {
  const NewsPost = sequelize.define('NewsPost', {
    title: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Title is required.' }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Description is required.' }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Content is required.' }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Author is required.' }
    },
    eventId: {
      type: DataTypes.INTEGER,
    },
    collabId: {
      type: DataTypes.INTEGER
    },
    imageId: {
      type: DataTypes.INTEGER
    }
  }, {})

  NewsPost.associate = function(models) {
    NewsPost.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    NewsPost.belongsTo(models.Event, {
      foreignKey: 'eventId'
    })
    NewsPost.belongsTo(models.Collab, {
      foreignKey: 'collabId'
    })
    NewsPost.belongsTo(models.Image, {
      foreignKey: 'imageId'
    })
  }

  return NewsPost
}
