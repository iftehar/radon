const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const wethercontroller = require("../controllers/weather")
const memescontroller = require("../controllers/memes")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//-------------------------------------------------//

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/weather", wethercontroller.weatherDetails)
router.get("/weathertemp", wethercontroller.weathertemp)
router.get("/weathertempsort", wethercontroller.weathertempshorted)

//---------------------------------------------------------//

router.get("/memes", memescontroller.memes)



module.exports = router;