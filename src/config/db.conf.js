const Sequelize = require("sequelize");
const env = require("dotenv");

const dbConfigs = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3310,
    user: process.env.DB_USER ||'root',
    password: process.env.DB_PASSWORD ||'root',
    name: process.env.DB_NAME || 'node-test',
    driver: process.env.DB_DRIVER || 'mysql'
};

const sequelize = new Sequelize(dbConfigs.name, dbConfigs.user, dbConfigs.password, {
    dialect: dbConfigs.driver,
    host: dbConfigs.host
});

module.exports = {
    sequelize,
    sync: sequelize.sync()
};