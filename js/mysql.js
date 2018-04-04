const mysql=require("mysql");
//链接createConnection(哪台服务器, 用户名, 密码, 库)
const db=mysql.createConnection({host:"localhost",user:"root",password:"543216",database:"niuluo"});
//查询
db.query("SELECT * FROM USER;",(err,data)=> {
    if(err)
    console.log("出错了")
else
console.log("成功了")
console.log(JSON.stringify(data))
})