const { DataTypes } = require('sequelize');
const sequelize = require('@/server')
const bcrypt = require('bcrypt');

const Admin = sequelize.define('Admin', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    require: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  allowAccess:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    require: true,
  },
  accessToken:{
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  }
}, {
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
});

module.exports = Admin;
