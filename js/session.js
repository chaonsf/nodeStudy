const express=require("express");
const cookieParser=require("cookie-parser");
const cookieSession=require("cookie-session");

var server=express();
server.use(cookieParser());//cookie中会有一个session的ID，服务器利用sessionid找到session文件、读取、写入
server.use(cookieSession({
    keys:["aa","ass","aaa"]//为了安全，数组里面的东西任意
}))
server.use("/",function (req,res) {
    console.log(req.session)
    res.send("op")
})

server.listen(8081)