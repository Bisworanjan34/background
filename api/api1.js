let express=require("express")
let router=express.Router()
let {mongoConnect}=require('../mongo/mongoconnect')

router.get('/',async(req,res)=>{
   try{
    let col=await mongoConnect()
    let data=await col.find().toArray()
    res.json(data)
   }
   catch(err){
    console.log("somthing is error")
   }
})

router.post('/',async(req,res)=>{
    let connect=await mongoConnect()
    let data=await connect.insertOne(req.body)
    res.json(data)
})
module.exports={router}


// let getfun=(app,dbname,colname,mongocli)=>{
//     app.get('/',async(req,res)=>{
//        try{
//         let db=mongocli.db(dbname)
//         let col=db.collection(colname)
//         let data =await col.find().toArray()
//         res.json(data) 
//        }
//        catch(err){
//         console.error('somthing is error')
//        }
//     })
// }

// module.exports={getfun}