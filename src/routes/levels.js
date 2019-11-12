const express = require("express");
const router = express.Router();
const validation = require("./validation");
const levelController = require("../controllers/levelController")


router.get("/api/levels/data", levelController.data);
router.get("/levels", levelController.index);
router.get("/levels/new", levelController.new);
router.post("/levels/create", levelController.create);
router.get("/levels/:id", levelController.show);
router.post("/levels/:id/destroy", levelController.destroy);
router.get("/levels/:id/edit", levelController.edit);
router.post("/levels/:id/update", levelController.update);






module.exports = router;
