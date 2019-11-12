const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const flash = require("express-flash");



module.exports = {

    signUp(req, res, next){
        res.render("users/signup");
    },

    create(req, res, next){
    
            let newUser = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body.passwordConfirmation
            };
    
            userQueries.createUser(newUser, (err, user) => {
            if(err){
                req.flash("error", err);
                res.redirect("/users/signup");
            } else {
    
    
                passport.authenticate("local")(req, res, () => {
                req.flash("notice", "You've successfully signed in!");
                res.redirect("/");
                })
            }
            });

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: newUser.email,
            from: 'darsoohoo@yahoo.com',
            subject: 'test email',
            text: 'test body email'
        };
        sgMail.send(msg);

    },

    signInForm(req, res, next) {
        res.render("users/signin");
    },

    signIn(req, res, next){
        passport.authenticate("local")(req, res, function () {
          if(!req.user){
            req.flash("notice", "Sign in failed. Please try again.")
            console.log("not logged in")
            res.redirect("/users/signin");
          } else {
            req.flash("notice", "You've successfully signed in!");
            console.log("logged in")
            res.redirect("/");
          }
        })
    },

    signOut(req, res, next) {
        req.logout();
        req.flash("notice", "You've successfully signed out!");
        res.redirect("/")
        console.log("logged out")
    },

    show(req, res, next) {
        userQueries.getUser(req.params.id, (err, result) => {
            if(err || result.user === undefined) {
                req.flash("notice", "No user found with that ID");
                console.log("couldnt get user")
                res.redirect("/");
            } else {
                console.log("got user")
                res.render("users/show", {...result});
            }
        });
    },

    edit(req, res, next){
        userQueries.getUser(req.params.id, (err, result) => {
            if(err || result.user === undefined) {
                req.flash("notice", "No user found with that ID");
                console.log("couldnt get user")
                res.redirect("/");
            } else {
                console.log("got user")
                res.render("users/edit", {...result});
            }
        });
    },

    update(req, res, next){
        userQueries.updateUser(req, req.body, (err, wiki) => {
            console.log(req.params.id);
            if(err || wiki == null){
                res.redirect(404, `/users/${req.params.id}/edit`);
            } else {
                res.redirect(`/users/${req.params.id}`);
            }
        });
    },


    upgrade(req, res, next){
        userQueries.upgrade(req.user.dataValues.id);
        res.redirect(`/users/${req.params.id}`);
    },

    downgrade(req, res, next){
        userQueries.downgrade(req.user.dataValues.id);
        res.redirect(`/users/${req.params.id}`);
    }



}