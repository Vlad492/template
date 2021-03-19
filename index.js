const express = require('express')
const app = express()
app.listen(80,console.log("server has been started"))

app.get('/',(req,res)=>{
    console.log('route triggered')
    res.send('Hello world')
})