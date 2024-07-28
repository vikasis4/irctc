const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// We are connecting to our MySql database

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

// IIFE is invoked to authenticate and test the connection and catch any error

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected Successfully to the Database");
    } catch (error) {
        console.log("Connection failed to the Database ", error);
    }
})();

module.exports = sequelize