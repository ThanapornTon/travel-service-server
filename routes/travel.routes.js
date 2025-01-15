const travelCtrl = require('./../controllers/travel.controller.js')
const express = require('express');
const router = express.Router();

router.post("/", travelCtrl.createTravel)

router.get("/:travelEmail/:travelPassword", travelCtrl.getAllTravel);

router.put("/:travelId", travelCtrl.editTravel);
router.delete("/:travelId", travelCtrl.deleteTravel);


module.exports = router;
