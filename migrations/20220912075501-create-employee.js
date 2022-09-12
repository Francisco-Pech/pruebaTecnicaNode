'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hash: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      modby: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      createdBy: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },    
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      charset: 'utf8', 
      collate: 'utf8_general_ci'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Employees');
  }
};