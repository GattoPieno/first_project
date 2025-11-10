'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clinic extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  clinic.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'clinic',
  });
  return clinic;
};