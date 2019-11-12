const Level = require("./models").Level;
const Service = require("./models").Service;
const Authorizer = require("../policies/level");
const User = require("./models").User;



module.exports = {

  getAll(callback){
    return Level.all({
      include: [
        {
          model: Service,
          as: "services"
        }
      ]
    })
    .then((levels) => {
      callback(null, levels);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addLevel(newLevel, callback){
    return Level.create({
      title: newLevel.title,
      price: newLevel.price
    })
    .then((level) => {
      callback(null, level);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getLevel(id, callback){
    return Level.findById(id, {
      include: [{
        model: Service,
        as: "services"
      }]
    })
    .then((level) => {
      callback(null, level);
    })
    .catch((err) => {
      callback(err);
    })
  },

  deleteLevel(req, callback){

    // #1
        return Level.findById(req.params.id)
        .then((level) => {
   
    // #2
          const authorized = new Authorizer(req.user, level).destroy();
   
          if(authorized) {
    // #3
            level.destroy()
            .then((res) => {
              callback(null, level);
            });
            
          } else {
   
    // #4
            req.flash("notice", "You are not authorized to do that.")
            callback(401);
          }
        })
        .catch((err) => {
          callback(err);
        });
    },

    updateLevel(req, updatedLevel, callback){
          
      return Level.findById(req.params.id)
           .then((level) => {
  
             if(!level){
               return callback("Level not found");
             }

             const authorized = new Authorizer(req.user, level).update();
      
             if(authorized) {
      
               level.update(updatedLevel, {
                 fields: Object.keys(updatedLevel)
               })
               .then(() => {
                 callback(null, level);
               })
               .catch((err) => {
                 callback(err);
               });
             } else {
      
               req.flash("notice", "You are not authorized to do that.");
               callback("Forbidden");
             }
           });
      }

}



