'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Allcode.init({
    key: DataTypes.INTEGER,
    type: DataTypes.STRING,
    valueEN: DataTypes.STRING,
    value_VI: DataTypes.STRING
    
   
  }, {
    sequelize,
    modelName: 'Allcode',
  });
  return Allcode;
};