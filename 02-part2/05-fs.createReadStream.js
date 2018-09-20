//1.引入模块
let fs = require('fs');

//2.创建流
let rs = fs.createReadStream(path1);//读入mp4文件或其他大文件
let ws = fs.createWriteStream(path2);//把读取的数据写入某个文件

//3.监听通道的打开和关闭
ws.once('open',() => {
    console.log("读入通道已经打开");
});
ws.once('close',() => {
    console.log("读入通道已经关闭");
});

rs.once('open',() => {
    console.log("写出通道已经打开");
});
rs.once('close',() => {
    console.log("写出通道已经关闭");
});

//4.绑定数据
rs.on('data',(data) => {
    console.log(data);
    /*
    <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
    <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
    <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
    <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
    <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
    ...
    */
    ws.write(data);
});

//5.关闭通道
ws.end();

