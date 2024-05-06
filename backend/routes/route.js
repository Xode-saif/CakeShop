const express = require('express');
const router = express.Router();
const {getalldata,handleData, getDatabyId} =require('../controller/shopdata');

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => { //cb-> callback
        cb(null,'public/photos') //null == inplace or error
    },
    filename: (req, file, cb) => {
        cb(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage
})


router.post('/setData',upload.single('file'),handleData);
router.get('/getalldata',getalldata);
router.get('/getdatabyid',getDatabyId);

module.exports = router