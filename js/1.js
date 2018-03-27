const http=require("http");
const aaa=http.createServer(function (req,res) {
     switch (req.url){
         case '/1.html':
            res.write("111")
             break;
         case '/2.html':
             res.write("2222")
             break;
         default:
             res.write("404")
             break;
     }
  res.end()
})
aaa.listen(8080)