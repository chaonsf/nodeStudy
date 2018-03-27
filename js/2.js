var fs=require("fs");
/*fs.writeFile("aaa.txt","asfghj",function (err){
      console.log(2)
})*/
fs.readFile("aaa.txt","utf-8",function (err,data) {
      if(err){
          console.log("read fail")
      }else{
          console.log(data)
      }
})