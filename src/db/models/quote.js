'use strict';
module.exports = (sequelize, DataTypes) => {
  var Quote = sequelize.define('Quote', {
    eventDate: DataTypes.STRING,
    eventStartTime: DataTypes.STRING,
    eventEndTime: DataTypes.STRING,
    venueName: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    package: DataTypes.STRING,
    packagePrice: DataTypes.FLOAT,
    eventSize: DataTypes.STRING,
    eventType: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {});
  Quote.associate = function(models) {
    // associations can be defined here
  };
  return Quote;
};