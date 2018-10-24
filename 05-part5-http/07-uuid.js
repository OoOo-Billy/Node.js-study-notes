//1.加载http模块
let http = require("http");
let formidable = require("formidable");
let util = require("util");
let uuidv1 = require("uuid/v1");
let path = require("path");
let fs = require("fs");

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
            //3.1生成随机名称
            console.log(uuidv1());
            let name = uuidv1();

            //3.2获取上传文件的后缀
            let extName = path.extname(files.photo.name);
            console.log(extName);//.jpg

            //3.3设置路径
            let oldPath = `${__dirname}/${files.photo.path}`;//__dirname根目录
            let newPath = `${__dirname}/uploads/${name}${extName}`;
            console.log(oldPath,newPath);

            res.writeHead(200,{"Content-Type": "text/plain;charset=UTF-8"});
            res.write("received upload:成功!\n\n");
            res.end(util.inspect({fields: fields,files:files}));
        })
    } else {
        res.end("失败");
    }
}).listen(80, "127.0.0.1");