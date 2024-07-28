const { DataTypes } = require('sequelize');
const sequelize = require('@/server')

const Train = sequelize.define('Admin', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    require: true
  },
  number: {
    type: DataTypes.NUMBER,
    allowNull: false,
    require: true
  },
  borading_point: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  end_point: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  duration: {
    type: DataTypes.NUMBER,
    allowNull: false,
    require: true
  },
  start_time: {
    type: DataTypes.DATE,
    allowNull: true
  },
  end_time: {
    type: DataTypes.DATE,
    allowNull: true
  }

});

module.exports = Train;
