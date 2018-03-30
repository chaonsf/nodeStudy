const express=require("express");
const cookieParser=require("cookie-parser");
const  cookieSession=require("cookie-session");
var  server=express();
server.use(cookieParser());
var arr=[]
for(var i=0;i<10000;i++){
    arr.push('sig_'+Math.random());
}
server.use(cookieSession({
    name:"user", //设置sessionkey值
    keys:arr,
    maxAge:24*3600*1000
}))
server.use("/",function (req,res) {
   if(req.session["count"]==null){
       req.session["count"]=1
   }else{
       req.session["count"]++
   }
   console.log(req.session["count"]);//这样可以统计访问网站的次数
   res.send("opl")
})
server.listen(8081)
/*delete res.session['xxx'];删除session*/