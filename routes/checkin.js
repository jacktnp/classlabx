var express = require('express');
var router = express.Router();
const checkincontroller = require('../controller/checkin-controller.js');

/* GET home page. */
router.post('/', checkincontroller.user);
router.get('/list', checkincontroller.getuser);

module.exports = router;
