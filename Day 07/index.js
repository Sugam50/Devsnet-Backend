const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("hiii")
})
app.listen(7000);
