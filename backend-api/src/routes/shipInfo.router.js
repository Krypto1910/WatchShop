const express = require("express");
const shipInfoController = require("../controllers/shipInfo.controller");
const router = express.Router();

router.post("/", shipInfoController.addNewShipInfo);
router.get("/:customerId", shipInfoController.getShipInfoByCustomerId);

module.exports = router