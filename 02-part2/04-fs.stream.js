//1.引入模块
let fs = require('fs');

//2.创建写入流
let ws = fs.createWriteStream('03-fs/test.txt');
console.log(ws);

//3.监听通道的打开和关闭
ws.once('open',() => {
    console.log("通道已经打开");
});
ws.once('close',() => {
    console.log("通道已经关闭");
});

//4.从流中写入数据
ws.write("这是通过流写入的字符");


//5.关闭通道
ws.end();