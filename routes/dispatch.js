const express = require("express");

const dispatchController = require("../controllers/dispatch");

const router = express.Router();

router.post('/saveProducts', dispatchController.postProducts);
router.get('/allDispatches', dispatchController.getDispatches);
router.post('/getDispatchById', dispatchController.getDispatchById);


module.exports = router;