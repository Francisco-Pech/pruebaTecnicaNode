'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmployeeByDepartaments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departamentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Department',
          key: 'id'
        }
      },
      companyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Company',
          key: 'id'
        }
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Employee',
          key: 'id'
        }
      },
      antiquity: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('EmployeeByDepartaments');
  }
};