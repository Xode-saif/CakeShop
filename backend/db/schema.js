const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:String,required:true},
    rating:{type:String,required:true},
    prductDesc:{type:String,required:true},
    // image:{type:String,required:true},
},{timestamps:true});

module.exports = mongoose.model('storeData',storeSchema)