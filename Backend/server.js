require('dotenv').config()
const express = require("express");

const app = express();

app.use((req, res, next)=>{
console.log(req.path, req.method)
next()
})
//routes
app.get('/', (req,res)=>{
    res.json({msg:'Welcome to App'})
})

app.listen(process.env.PORT,()=>{
    console.log("app listening on port",process.env.PORT)
})

