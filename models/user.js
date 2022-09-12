'use strict';
const { Model } = require('sequelize');
const { hash }  = require('../helpers/response');
const bcrypt    = require('bcrypt');
require('dotenv').config();

module.exports  = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(255),
      validate:{
        len: [6, 12]                
      }
    },
    gender: {
      allowNull: true,
      type: DataTypes.STRING(255),
      validate:{
        isIn: [['M', 'F']]
      }
    },
    age: {
      allowNull: false,
      defaultValue: 18,
      type: DataTypes.INTEGER
    },
    state: {
      allowNull: true,
      type: DataTypes.STRING
    },
    city: {
      allowNull: true,
      type: DataTypes.STRING
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
      beforeCreate: (record, options) => {
        record.dataValues.password  = bcrypt.hashSync(record.dataValues.password, Number.parseInt(process.env.ROUNDS_TOKEN));
        record.dataValues.hash      = hash();
      },
      afterCreate: (record, options) => {
        delete record.dataValues.password;
      },
      afterUpdate: (record, options) => {
          delete record.dataValues.password;
      }
    },
    sequelize,
    tableName: 'users',
    modelName: 'User',
    timestamps: true,
    paranoid:   true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return User;
};