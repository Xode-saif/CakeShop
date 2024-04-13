const User =require('../db/schema');
async function handleData(req,res){
    const {name,price,rating,desc} = req.body;
    console.log(req.body.name);
    try {
        await User.create({
           name:name,
           price:price,
           rating:rating,
           prductDesc:desc
        })
        res.json({ success: true, message: 'SignUp successful' });
    } catch (error) {
        console.log(error);   
    }
}

async function getDatabyId(req,res){
    const {id} = req.body;
    try {
        const data = await User.findById(id);
        console.log(data);   
    } catch (error) {
        console.log(error);
    }
}

async function getalldata(req,res){
    try {
        const data = await User.find({});
        console.log(data);
        res.json({success:true,message:"Data fetched successfully",data:data});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {handleData,getalldata,getDatabyId};