// let {MongoClient}=require("mongodb")
// let url="mongodb://localhost:27017"
// let mongocli=new MongoClient(url)
// let dbname="login"
// let colname="user"

// let mongoConnect= async()=>{
//     await mongocli.connect()

//     let db=mongocli.db(dbname)
//     let col=db.collection(colname)
//     return col
// }

// module.exports={mongoConnect}


///--------------------------------------------
let {MongoClient}=require('mongodb')
let mongocli=new MongoClient("mongodb://localhost:27017")
let dbname="login"
let colname="user"

let mongoConnect=async()=>{
    await mongocli.connect()
    let db=mongocli.db(dbname)
    let col=db.collection(colname)
    return col
}

module.exports={mongoConnect}
