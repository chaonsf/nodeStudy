const express=require("express");
const static=require("express-static");
var server=express();
server.listen(8081)
var users={
    "blue":"1233",
    "lisi":"67982",
    "heipi":"wddad"
}
/*login的接口*/
server.get("/login",function (req,res) {
     var user=req.query["user"];
     var pass=req.query["pass"];
     if(users[user]==null){
         res.send({ok:false,msg:"此用户不存在"})
     }else{
         if(users[user]!=pass){
             res.send({ok:false,msg:"密码输入错误"})
         }else{
             res.send({ok:true,msg:"登陆成功"})
         }
     }
})
server.use(static("../js"))//读取js文件夹里里面的内容