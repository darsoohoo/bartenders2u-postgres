const Service = require("./models").Service;
const Level = require("./models").Level;
const User = require("./models").User;
const Quote = require("./models").Quote;



module.exports = {

    addQuote(newQuote, callback){
      return Quote.create({

        eventDate: newQuote.eventDate,
        eventStartTime: newQuote.eventStartTime,
        eventEndTime: newQuote.eventEndTime,
        eventType: newQuote.eventType,
        eventSize: newQuote.eventSize,
        package: newQuote.package,
        firstName: newQuote.firstName,
        lastName: newQuote.lastName,
        email: newQuote.email,
        phoneNumber: newQuote.phoneNumber,
        venueName: newQuote.venueName,
        address1: newQuote.address1,


    })
    .then((quote) => {
        callback(null, quote);
    })
    .catch((err) => {
        callback(err);
    })
},


    getQuote(id, callback){
      return Quote.findById(id)
        .then((quote) => {
          callback(null, quote);
        })
        .catch((err) => {
          callback(err);
        })
    },


    deleteQuote(id, callback){
        return Quote.destroy({
          where: { id }
        })
        .then((deletedRecordsCount) => {
          callback(null, deletedRecordsCount);
        })
        .catch((err) => {
          callback(err);
        })
    },



}