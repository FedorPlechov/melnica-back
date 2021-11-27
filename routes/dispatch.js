const express = require("express");

const dispatchController = require("../controllers/dispatch");

const router = express.Router();

router.post('/saveProducts', dispatchController.postProducts);

module.exports = router;