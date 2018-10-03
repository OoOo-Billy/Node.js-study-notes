//1.加载http模块
let http = require("http");
let fs = require("fs");

//2.创建服务器
let server = http.createServer((req, res) => {
    console.log(req.url);//打印请求头的文件路径

    //2.1配置路由
    //2.1.1页面配置
    if (req.url === "/page1") {//页面1
        fs.readFile("./html/02-route-test1.html", (err, data) => {
            if (!err) {
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                console.log(data);//二进制数据
                console.log(data.toString());//转换二进制数据
                res.write("请求test1.html");
                res.end(data);//必须要使用end，否则无法返回状态码
            } else {
                throw err;
            }
        })
    } else if (req.url === "/page2") {//页面2
        fs.readFile("./html/02-route-test2.html", (err, data) => {
            if (!err) {
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                res.write("请求test2.html");
                res.end(data);
            } else {
                throw err;
            }
        })
    } else if (req.url === "/") {//根目录index
        res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
        res.write("请求根目录");

        //2.1.2其他资源文件配置
    } else if (req.url === "/css/index.css") {//css
        fs.readFile("./css/index.css", (err, data) => {
            if (!err) {
                res.writeHead(200, {"Content-Type": "text/css"});
                res.end(data);
            } else {
                throw err;
            }
        })
    } else if (req.url === "/images/1.jpg") {//图片
        fs.readFile("./images/1.jpg", (err, data) => {
            if (!err) {
                res.writeHead(200, {"Content-Type": "image/jpg"});
                res.end(data);
            } else {
                throw err;
            }
        })
    }/*else if (req.url === "/source/1.mp4"){//音频文件
        fs.readFile("./source/1.mp4",(err,data)=>{
            if (!err){
                res.writeHead(200,{"Content-Type" : "video/mpeg4"});
                res.end(data);
            } else {
                throw err;
            }
        })
    }*/

    //2.2文件请求失败
    else {
        res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"});
        res.end("<h1>访问的页面不存在！</h1>");
    }
});

//3.监听服务器
server.listen(80, "127.0.0.1");