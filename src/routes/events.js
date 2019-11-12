const express = require("express");
const router = express.Router();
const validation = require("./validation");
const eventController = require("../controllers/eventController")


router.post("/events/new", eventController.new);
router.post("/events/next/confirmation", eventController.next);
router.post("/submit-request", eventController.request);





module.exports = router;
