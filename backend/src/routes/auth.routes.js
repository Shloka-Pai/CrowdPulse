const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controllers");

// REGISTER
router.post("/registerAdmin", authController.registerAdmin);

// LOGIN
router.post("/loginAdmin", authController.loginAdmin);

// LOGOUT
router.post("/logoutAdmin", authController.logoutAdmin);

module.exports = router;