//1.加载http模块
let http = require("http");
let querystring = require("querystring");//核心模块：把字符串转化成对象;
let fs = require("fs");

//2.创建服务器
http.createServer((req, res) => {
    //console.log(req.url);//postmsg
    //console.log(req.method);//POST
    if (req.url === "/postmsg" && req.method.toLowerCase() === "post") {
        //2.1变量
        let allData = "";

        //2.2接收一小段数据
        req.on("data", (buf) => {
            allData += buf;
        });

        //2.3所有数据传递完毕之后
        req.once("end", (err) => {
            if (!err) {
                //console.log(allData);
                res.end("数据上传完毕！");
                let dataObj = querystring.parse(allData);
                console.log(dataObj);
            } else {
                throw err;
            }
        });
    } else {

    }
}).listen(80, "127.0.0.1");