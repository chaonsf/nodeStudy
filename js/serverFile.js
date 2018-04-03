const express=require("express");
const bodyParser=require('body-parser');
const multer=require('multer');
const fs=require('fs');
const pathLib=require('path');
const static=require("express-static")

var objMulter=multer({dest: './www/upload/'});//上传的文件存贮的目录
var server=express();

server.use(objMulter.any())  //可以传任何类型的文件
server.post("/",function (req,res) {
    console.log(req.files)
    var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, newName, function (err){
        if(err){
            res.send('上传失败');
        }
        else{
            res.send('成功');
        }

    });

    //1.获取原始文件扩展名
    //2.重命名临时文件

})
server.listen(8081)
server.use(static("../"))