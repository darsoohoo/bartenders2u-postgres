'use strict';
module.exports = (sequelize, DataTypes) => {
  var Service = sequelize.define('Service', {
    body: {
      type: DataTypes.STRING
    },
    levelId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    listorder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
    Service.belongsTo(models.Level, {
      foreignKey: "levelId",
      onDelete: "CASCADE"
    });
  };
  return Service;
};