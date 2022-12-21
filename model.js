const mongoose=require('mongoose');


const women_schema=new mongoose.Schema({
    imageUrl:{type: String},
    desc:{type:String},
    ratings:{type:String},
    price:{type:Number},
    cuttoff_price:{type:Number},
    id:{type: Number}

})
const women_model=mongoose.model('womenSneakers',women_schema);


module.exports={women_model}