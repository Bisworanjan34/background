let mongoose=require('mongoose');
let obj={
    username:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        required:true
    }
}
let schema=new mongoose.Schema(obj);
let model=mongoose.model('model',schema);
module.exports=model;
