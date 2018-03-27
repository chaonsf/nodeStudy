const http=require("http");
const fs=require("fs");
const urllib=require("url");
const querystring=require("querystring")

var server=http.createServer(function (req,res) {
    var str=""
     req.on("data",function (data) {
         str+=data
     })
    req.on("end",function () {
        var obj=urllib.parse(req.url,true)
        var url=obj.pathname;
        var GET=obj,query
        var post=querystring.parse(str)
        var filename='../js'+url;;
        fs.readFile(filename,function (err,data) {
            if(err){
                res.write("404")
            }else{
                res.write(data)
            }
            res.end()
        })
    })

})
server.listen(8080)