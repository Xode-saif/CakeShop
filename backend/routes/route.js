const express = require('express');
const router = express.Router();
const {getalldata,handleData} =require('../controller/shopdata');

router.post('/setData',handleData);
router.get('/getalldata',getalldata);

module.exports = router