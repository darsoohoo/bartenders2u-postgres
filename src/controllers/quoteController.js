const quoteQueries = require("../db/queries.quotes.js");
const flash = require("express-flash");



module.exports = {

    
    addQuote(req, res, next){
        let newQuote = {
          package: req.body.selectedpackage,
          packagePrice: req.body.packageprice,
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          email: req.body.email,
          phoneNumber: req.body.phonenumber,
          venueName: req.body.venuename,
          address1: req.body.address1,
          eventDate: req.body.date,
          eventStartTime: req.body.starttime,
          eventEndTime: req.body.endtime,
          eventType: req.body.eventtype,
          eventSize: req.body.eventsize
          
        };
        quoteQueries.addQuote(newQuote, (err, quote) => {
          if(err){
            res.redirect(500, "fail");
          } else {
            res.redirect(300, "/");
          }
        });
      },


    


    
    

}