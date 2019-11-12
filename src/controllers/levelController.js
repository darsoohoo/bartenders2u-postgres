const levelQueries = require("../db/queries.levels.js");
const userQueries = require("../db/queries.users.js");
const flash = require("express-flash");
const Authorizer = require("../policies/level");


module.exports = {

    data(req, res, next){
        levelQueries.getAll((err, levels) => {
            if(err){
                res.redirect(500, "static/index");
            } else {
                res.json(levels);
            }
        });
    },


    index(req, res, next){
        levelQueries.getAll((err, levels) => {
            if(err){
                res.redirect(500, "static/index");
            } else {
                res.render("levels/index", {levels})
            }
        })
    },


    new(req, res, next){
        res.render("levels/new", {userId: req.params.userId})
    },


    create(req, res, next){
     let newLevel = {
                title: req.body.title,
                price: req.body.price
            };
        levelQueries.addLevel(newLevel, (err, level) => {
            if(err){
                res.redirect(500, "/levels/new");
            } else {
                res.redirect(303, `/levels/${level.id}`)
            }
        })
    
    },

    show(req, res, next) {
        levelQueries.getLevel(req.params.id, (err, level) => {
            if(err || level == null){
                res.redirect(404, "/");
            } else {
                res.render("levels/show", {level});
            }
        });
    },


    edit(req, res, next){
        levelQueries.getLevel(req.params.id, (err, level) => {
            if(err || level == null){
                res.redirect(404, "/");
            } else {
                res.render("levels/edit", {level});
            }
        });
    },



    destroy(req, res, next){
        levelQueries.deleteLevel(req, (err, level) => {
            if(err){
                res.redirect(500, `/levels/${req.params.id}`);
            } else {
                res.redirect(303, "/");
            }
        });
        
    },

    update(req, res, next){
        levelQueries.updateLevel(req, req.body, (err, level) => {
            console.log(req.params.id);
            if(err || level == null){
                res.redirect(404, `/levels/${req.params.id}/edit`);
            } else {
                res.redirect(`/levels/${req.params.id}`);
            }
        });
    }



    


    
    

}