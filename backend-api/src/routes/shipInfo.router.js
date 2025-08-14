const express = require("express");
const shipInfoController = require("../controllers/shipInfo.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const router = express.Router();
const multer = require("multer");
const upload = multer(); 

module.exports.setup = (app) => {
    app.use('/api/v1/shipinfo', upload.none(),router);

    router.post("/", shipInfoController.addNewShipInfo);
    router.get("/:customerId", shipInfoController.getShipInfoByCustomerId);
    router.delete("/:customerId/:shipInfoId", shipInfoController.deleteShipInfoByCustomerId);
}