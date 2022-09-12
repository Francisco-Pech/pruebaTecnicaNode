'use strict';
const { Model } = require('sequelize');
const { hash }  = require('../helpers/response');

module.exports  = (sequelize, DataTypes) => {
  class CompanyByDepartament extends Model {
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
    }
  }
  CompanyByDepartament.init({
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
    tableName: 'companybydepartaments',
    modelName: 'CompanyByDepartament',
    timestamps: true,
    paranoid:   true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return CompanyByDepartament;
};