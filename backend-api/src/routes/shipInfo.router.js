const express = require("express");
const shipInfoController = require("../controllers/shipInfo.controller");
const router = express.Router();


module.exports.setup = (app) => {
    app.use('/api/v1/shipInfo', router);




    router.post("/", shipInfoController.addNewShipInfo);
    router.get("/:customerId", shipInfoController.getShipInfoByCustomerId);


    router.all('/',methodNotAllowed)
    router.all('/:id',methodNotAllowed)
}