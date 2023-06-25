const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// customer Routes

router.get("/", customerController.hompage);
router.get("/add", customerController.addCustomer);
router.post("/add", customerController.postCustomer);

// ALWAYS NEVER FORGET TO EXPORT THIS ROUTER
module.exports = router;
