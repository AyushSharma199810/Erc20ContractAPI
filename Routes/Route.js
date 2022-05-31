const express = require("express");
const register = require("../Controller/Controller")
const router = express.Router();
router.post("/mint", register.mint);
router.post("/transferFrom",register.transfer);
// router.get("/", );
router.post("/checkbalance", register.checkbalance);


module.exports = {router};
 