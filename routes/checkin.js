var express = require('express');
var router = express.Router();
const checkincontroller = require('../controller/checkin-controller.js');

/* GET home page. */
router.post('/', checkincontroller.user);
router.get('/list', checkincontroller.getuser);
router.get('/sec/1', checkincontroller.getuserbysec1);
router.get('/sec/2', checkincontroller.getuserbysec2);
router.get('/sec/3', checkincontroller.getuserbysec3);

module.exports = router;
