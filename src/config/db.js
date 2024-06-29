const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config').database;
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

module.exports = {
    connectDB,
    sequelize,
    Sequelize,
    DataTypes
};
