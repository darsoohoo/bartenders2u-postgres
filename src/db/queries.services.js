const Service = require("./models").Service;
const Level = require("./models").Level;
const User = require("./models").User;



module.exports = {

    addService(newService, callback){
        return Service.create(newService)
        .then((service) => {
          callback(null, service);
        })
        .catch((err) => {
          callback(err);
        })
    },


    getService(id, callback){
      return Service.findById(id)
        .then((service) => {
          callback(null, service);
        })
        .catch((err) => {
          callback(err);
        })
    },


    deleteService(id, callback){
        return Service.destroy({
          where: { id }
        })
        .then((deletedRecordsCount) => {
          callback(null, deletedRecordsCount);
        })
        .catch((err) => {
          callback(err);
        })
    },


    updateService(id, updatedService, callback){
        return Service.findById(id)
        .then((service) => {
          if(!service){
            return callback("Service not found");
          }
   
          service.update(updatedService, {
            fields: Object.keys(updatedService)
          })
          .then(() => {
            callback(null, service);
          })
          .catch((err) => {
            callback(err);
          });
        });
    }

}