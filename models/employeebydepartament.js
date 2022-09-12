'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeByDepartament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Company, {
        foreignKey: 'id',
        target_key: 'companyId'
      });

      this.belongsTo(models.Department, {
        foreignKey: 'id',
        target_key: 'departamentId'
      });

      this.belongsTo(models.Employee, {
        foreignKey: 'id',
        target_key: 'employeeId'
      });
    }
  }
  EmployeeByDepartament.init({
    companyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    departamentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Department',
        key: 'id'
      }
    },
    employeeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Employee',
        key: 'id'
      }
    },
    antiquity: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.DOUBLE
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
    tableName: 'employeebydepartaments',
    modelName: 'EmployeeByDepartament',
    timestamps: true,
    paranoid:   true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return EmployeeByDepartament;
};