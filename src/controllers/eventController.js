const quoteQueries = require("../../src/db/queries.quotes.js");

module.exports = {

//ejs
    new(req, res, next) {
        let newLevels = {
            bronzename: req.body.bronzename,
            bronzeprice: req.body.bronzeprice,
            silvername: req.body.silvername,
            silverprice: req.body.silverprice,
            goldname: req.body.goldname,
            goldprice: req.body.goldprice,
            platinumname: req.body.platinumname,
            platinumprice: req.body.platinumprice,
            diamondname: req.body.diamondname,
            diamondprice: req.body.diamondprice
        }
        res.render("events/new", {newLevels});
    },


    //ejs
    next(req, res, next) {

        let newEvent = {
            package: req.body.package,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            venuename: req.body.venuename,
            address: req.body.address,
            city: req.body.city,
            zip: req.body.zip,
            state: req.body.state,
            eventdate: req.body.eventdate,
            starttime: req.body.starttime,
            endtime: req.body.endtime
        };

        res.render("events/confirmation", {newEvent});
    },


//react
    request(req, res, next){
        let newQuote = {
          eventDate: req.body.date,
          eventStartTime: req.body.starttime,
          eventEndTime: req.body.endtime,
          eventType: req.body.eventtype,
          eventSize: req.body.eventsize,
          package: req.body.selectedpackage,
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          email: req.body.email,
          phoneNumber: req.body.phonenumber,
          venueName: req.body.venuename,
          address1: req.body.address,

          
        };
        quoteQueries.addQuote(newQuote, (err, quote) => {
          if(err){
            res.redirect(500, "fail");
          } else {
            res.redirect(200, "/success");
          }
        });
      },







};
