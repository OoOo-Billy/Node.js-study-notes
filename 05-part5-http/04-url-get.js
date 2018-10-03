//1.加载http模块
let http = require("http");
let url = require("url");
//2.创建服务器
http.createServer((req,res)=>{
    //let myUrl = url.parse(req.url);//此处返回的是字符串!!!
    let myUrl = url.parse(req.url,true);//true表示把传入的字符串转换成对象

    let query = myUrl.query;
    console.log(query);
    console.log(query.name);
    console.log(query.age);
    console.log(query.gender);



    res.end("hello world!!!");
}).listen(80,"127.0.0.1");