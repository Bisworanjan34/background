let express=require('express')
let app=express()
let cors=require('cors')
// let {router}=require('./api/api1')
// let {MongoClient}=require('mongodb')
// let url='mongodb://localhost:27017'
// let mongocli=new MongoClient(url)

app.use(express.json())
app.use(cors())

// app.use('/auth',router)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});
app.listen(2030,()=>console.log('server started   on 2030............'))

// Export as Vercel handler
module.exports = app;

// let dbname='login'
// let colname='user'
//database informations
// let mongo=require('./api/api1')
// let {getfun}=mongo
// let mongop=require('./api/api2')
// let {postfun}=mongop

// let mongod=require('./api/api3')
// let {deletefun}=mongod

// mongocli.connect()
//api calll
// getfun(app,dbname,colname,mongocli)
// postfun(app,dbname,colname,mongocli)
// deletefun(app,dbname,colname,mongocli)


