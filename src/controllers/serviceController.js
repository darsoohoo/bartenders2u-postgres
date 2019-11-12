const serviceQueries = require("../db/queries.services.js");

module.exports = {
  new(req, res, next){
    res.render("services/new", {levelId: req.params.levelId});
  },
  create(req, res, next){
    let newService= {
      body: req.body.body,
      levelId: req.params.levelId,
    };
    serviceQueries.addService(newService, (err, service) => {
      if(err){
        res.redirect(500, "/services/new");
      } else {
        res.redirect(303, `/levels/${newService.levelId}/services/${service.id}`);
      }
    });
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
  show(req, res, next){
    serviceQueries.getService(req.params.id, (err, service) => {
      if(err || service == null){
        res.redirect(404, "/");
      } else {
        res.render("services/show", {service});
      }
    });
  },
  destroy(req, res, next){
    serviceQueries.deleteService(req.params.id, (err, service) => {
      if(err){
        res.redirect(500, `/levels/${req.params.levelId}/services/${req.params.id}`)
      } else {
        res.redirect(303, `/levels/${req.params.levelId}`)
      }
    });
  },
  edit(req, res, next){
       serviceQueries.getService(req.params.id, (err, service) => {
         if(err || service == null){
           res.redirect(404, "/");
         } else {
           res.render("services/edit", {service});
         }
       });
     },
  update(req, res, next){
     serviceQueries.updateService(req.params.id, req.body, (err, service) => {
       if(err || service == null){
         res.redirect(404, `/levels/${req.params.levelId}/services/${req.params.id}/edit`);
       } else {
         res.redirect(`/levels/${req.params.levelId}/services/${req.params.id}`);
       }
     });
   }

}