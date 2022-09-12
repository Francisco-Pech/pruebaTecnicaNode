'use strict';
const { Model } = require('sequelize');
const { hash }  = require('../helpers/response');

module.exports  = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.EmployeeByDepartament, {
        foreignKey: 'employeeId'
      });
    }
  }
  Employee.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    hash: {
      unique: true,
      allowNull: true,
      type: DataTypes.STRING(255)
    },
    modby: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    createdBy: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    }
  }, {
    hooks: {
      beforeCreate : (record, options) => {
        record.dataValues.hash = hash();
      }
    },
    sequelize,
    tableName: 'employees',
    modelName: 'Employee',
    timestamps: true,
    paranoid:   true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return Employee;
};