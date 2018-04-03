const path=require("path");
var str="D:\lichao\node\js\a.html";
var obj=path.parse(str)
console.log(obj)
//base:文件名部分
//ext 扩展名
//dir 路径
//name 文件名部分