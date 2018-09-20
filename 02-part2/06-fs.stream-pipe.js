//1.引入模块
let fs = require('fs');

//2.创建流
let rs = fs.createReadStream(path1);//读入mp4文件或其他大文件
let ws = fs.createWriteStream(path2);//把读取的数据写入某个文件

//3.创建通道
rs.pipe(ws);