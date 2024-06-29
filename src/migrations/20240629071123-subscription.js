'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Subscriptions', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      chatId: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      product: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
        allowNull: false
      },
    })
  },

  async down (queryInterface) {
    return queryInterface.dropTable('Subscriptions')
  }
};
