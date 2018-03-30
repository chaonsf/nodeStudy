const express=require("express");
var server=express();
/*server.use("/",function (req,res) {
    res.cookie("blui","shjagdkjhjl");
    res.send("ok,thank you")
})*/
server.use("/js/aaa.html",function (req,res) {
     res.cookie("shabi","erpang",{path:"/js",maxAge:24*3600*1000});/*cookie的路径，maxAge为有效期*/
     res.send("您好")
})
server.listen(8081)