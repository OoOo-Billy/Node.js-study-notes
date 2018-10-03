//1.加载http模块
let http = require("http");
//let {URL} = require("url");
let url = require("url");


//2.创建服务器
http.createServer((req,res)=>{
    console.log(req.url);//请求头的文件路径

    //let myURL = new URL(path);//path必须是完整的地址，包含协议、主机地址等等。
    //console.log(myURL);

    let myUrl = url.parse(req.url);//对象
    console.log(myUrl);
    console.log(myUrl.search);


    res.end("hello world!!!");
}).listen(80,"127.0.0.1");