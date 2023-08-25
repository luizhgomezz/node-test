const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:memory')

const User = sequelize.define('User', {
    'first_name': DataTypes.STRING,
    'last_name': DataTypes.STRING,
    'username': DataTypes.STRING
});

module.exports = User;