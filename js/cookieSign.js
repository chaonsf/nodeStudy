const express=require("express");
const cookieParser=require("cookie-parser");
//cookie进行签名可保证cookie不被别人修改，就像人签名一样
var server=express();
server.use(cookieParser("hsajjkkl"))//里面的字符随意，越长一般越安全
server.use("/",function (req,res) {
     req.secret="hsajjkkl"//这句话可要可不要
     res.cookie("user","lichao",{path:"/",maxAge:24*3600*1000,signed:true});
     res.clearCookie("blui")//删除cookie，参数是cookie名
    console.log('签名cookie：', req.signedCookies)//读取已经签名的cookie
    console.log('无签名cookie：',req.cookies);//读取未签名的cookie
    res.send("okl")

})

server.listen(8081)