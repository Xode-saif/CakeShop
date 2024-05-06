const User =require('../db/schema');

async function handleData(req,res){
    const {name,price,rating,desc} = req.body;
    const image = req.file.filename;
    console.log(image ,6);

    try {
        await User.create({
           name:name,
           price:price,
           rating:rating,
           prductDesc:desc,
           image:image
        })
        res.json({ success: true, message: 'Data uploaded successfully' });
    } catch (error) {
        console.log(error);   
    }
}

async function getDatabyId(req,res){
    const {id} = req.query;
    try {
        const data = await User.findById(id);
        // console.log(data);
        res.json({success:true,message:"Data fetched successfully",data:data})   
    } catch (error) {
        console.log(error);
    }
}

async function getalldata(req,res){
    try {
        const data = await User.find({});
        // console.log(data);
        res.json({success:true,message:"Data fetched successfully",data:data});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {handleData,getalldata,getDatabyId};