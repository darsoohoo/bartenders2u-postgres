'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "must be a valid email" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "standard"
    },
      firstname: {
        type: DataTypes.STRING
      },
      lastname: {
        type: DataTypes.STRING
      }
    }, {});
    User.associate = function(models) {
      // associations can be defined here
      User.prototype.isStandard = function() {
        return this.role === "standard";
      };
      User.prototype.isAdmin = function() {
        return this.role === "admin";
      };
      User.prototype.isPremium = function() {
        return this.role === "premium";
      };
   };

    return User;
};