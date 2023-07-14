const express = require("express");
const router = express.Router();
const authController = require("./../controller/authContoller");

router.route("/").post(authController.signup);
router.route("/").post(authController.login);

module.exports = router;
