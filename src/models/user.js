export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'First name is required.' }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Last name is required.' }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Email address is required.' },
      unique: { args: true, msg: 'Email address already exists.' },
      validate: {
        isEmail: { args: true, msg: 'Please enter a valid email address.' },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Password is required.' },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Password must be at least 8 characters.')
          }
        }
      }
    },
    title: {
      type: DataTypes.STRING
    },
    avatar: {
      type: DataTypes.STRING
    }
  }, {})
  
  User.associate = (models) => {
    User.hasMany(models.NewsPost, {
      foreignKey: 'userId'
    })
    User.belongsToMany(models.Event, {
      through: models.Attendance,
      foreignKey: 'userId'
    })
    User.belongsToMany(models.Collab, {
      through: models.Participation,
      foreignKey: 'userId'
    })
  }
  
  return User
}
