const User = require("./models").User;
const bcrypt = require("bcryptjs");


module.exports = {
    
    createUser(newUser, callback) {
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(newUser.password, salt);

        return User.create({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
            password: hashedPassword
        })
        .then((user) => {
            callback(null, user);
        })
        .catch((err) => {
            callback(err);
        })
    },




    updateUser(req, updatedUser, callback){
          
        return User.findById(req.params.id)
            .then((user) => {
    
               if(!user){
                 return callback("User not found");
               }
                 user.update(updatedUser, {
                   fields: Object.keys(updatedUser)
                 })
                 .then(() => {
                   callback(null, user);
                 })
                 .catch((err) => {
                   callback(err);
                 });
               
            });
    },

    upgrade(id, callback){
        return User.findById(id)
        .then((user) => {
          if(!user){
            return callback("User does not exist!");
          } else {
            return user.updateAttributes({role: "premium"});
          }
        }) .catch((err) => {
          callback(err);
        })
      },


    downgrade(id, callback){
        return User.findById(id)
        .then((user) => {
          if(!user){
            return callback("User does not exist!");
          } else {
            return user.updateAttributes({role: "standard"});
          }
        }) .catch((err) => {
          callback(err);
        })
      },
 
 }