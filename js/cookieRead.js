const express=require("express");
const cookieParser=require("cookie-parser");
var server=express();
server.use(cookieParser())
server.use("/",function (req,res) {
    console.log(req.cookies);
    res.send({ok:true})
})

server.listen(8081)