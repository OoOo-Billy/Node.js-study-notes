//1.加载http模块
let http = require("http");

//2.创建服务器
let server = http.createServer((req,res)=>{
    console.log(req.url);//请求头的文件路径
    res.writeHead(200,{"Content-Type" : "text/html;charset=UTF-8"});
    res.write("<h1>hello world!</h1>");
    res.write("node.js make word better.");
    res.end("Node.js-http");
});

//3.监听服务器
server.listen(80,"127.0.0.1");