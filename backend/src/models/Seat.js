const { DataTypes } = require('sequelize');
const sequelize = require('@/server')

const Admin = sequelize.define('Admin', {
    seats_sleeper: {
        type: DataTypes.NUMBER,
        default: -1
    },
    seats_chair: {
        type: DataTypes.NUMBER,
        default: -1
    },
    seats_ac: {
        type: DataTypes.NUMBER,
        default: -1
    },
});

module.exports = Admin;
