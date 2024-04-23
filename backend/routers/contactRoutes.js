const express = require("express");
const { contactForm } = require("../controller/contactController");

const router = express.Router();

router.post("/", contactForm);

module.exports = router;
