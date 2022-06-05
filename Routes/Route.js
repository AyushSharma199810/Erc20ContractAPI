const express = require("express");
const register = require("../Controller/Controller")
const router = express.Router();
router.post("/mint", register.mint);
router.post("/transfer",register.transfer);
router.post("/transferFrom", register.transferFrom );
router.post("/balanceof", register.balanceof);
router.post("/approve", register.approve);

module.exports = {router};
 