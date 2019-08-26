export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'First name is required.' }
    },
    last_name: {
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
    }
  }, {})
  
  User.associate = (models) => {
    User.belongsTo(models.Company, {
      foreignKey: 'companyId',
      onDelete: 'CASCADE'
    })
  }
  
  return User
}
