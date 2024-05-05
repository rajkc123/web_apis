const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/create", userController.addUser);

module.exports = router;
