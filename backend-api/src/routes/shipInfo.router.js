const express = require("express");
const shipInfoController = require("../controllers/shipInfo.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const router = express.Router();


module.exports.setup = (app) => {
    app.use('/api/v1/shipinfo', router);

    router.post("/", shipInfoController.addNewShipInfo);
    router.get("/:customerId", shipInfoController.getShipInfoByCustomerId);

    router.all('/',methodNotAllowed)
    router.all('/:id',methodNotAllowed)
}