const router = require("express").Router();

const reservationController = require("../controllers/reservation");

router.post("/save", reservationController.addReservation);

module.exports = router;
