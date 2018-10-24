//1.加载http模块
let http = require("http");
let formidable = require("formidable");
let util = require("util");
//这里可以使用fs，对上传的文件进行操作，比如更改文件名等

//2.创建服务器
http.createServer((req, res) => {
    //console.log(req.url);//postmsg
    //console.log(req.method);//POST
    if (req.url === "/postmsg" && req.method.toLowerCase() === "post") {
        //1.实例化对象
        let form = new formidable.IncomingForm();

        //2.设置上传文件路径
        form.uploadDir = "./uploads";

        //3.获取表单的内容
        form.parse(req,(err,fields,files) => {
            res.writeHead(200,{"Content-Type": "text/plain;charset=UTF-8"});
            res.write("received upload:成功!\n\n");
            res.end(util.inspect({fields: fields,files:files}));
        })
    } else {
        res.end("失败");
    }
}).listen(80, "127.0.0.1");