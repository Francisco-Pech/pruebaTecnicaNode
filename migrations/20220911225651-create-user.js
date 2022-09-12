'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate:{
          len: [6, 12],                 
        }
      },
      gender: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      age: {
        allowNull: false,
        defaultValue: 18,
        type: Sequelize.INTEGER
      },
      state: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('Users');
  }
};