
const express = require("express");
const router = express.Router();


const serviceController = require("../controllers/serviceController")
const validation = require("./validation");
const helper = require("../auth/helpers");


router.get("/levels/:levelId/services/new", serviceController.new);

router.post("/levels/:levelId/services/create",
helper.ensureAuthenticated,
serviceController.create);

router.get("/levels/:levelId/services/:id", serviceController.show);
router.post("/levels/:levelId/services/:id/destroy", serviceController.destroy);
router.get("/levels/:levelId/services/:id/edit", serviceController.edit);
router.post("/levels/:levelId/services/:id/update", serviceController.update); 


module.exports = router;