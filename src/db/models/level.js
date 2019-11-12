'use strict';
module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  Level.associate = function(models) {
    // associations can be defined here
    Level.hasMany(models.Service, {
      foreignKey: "levelId",
      as: "services"
    });
  };
  return Level;
};