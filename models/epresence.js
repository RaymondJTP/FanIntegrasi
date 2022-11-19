'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Epresence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Epresence.init({
    id_users: DataTypes.STRING,
    type: DataTypes.STRING,
    is_approve: DataTypes.STRING,
    waktu: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Epresence',
  });
  return Epresence;
};