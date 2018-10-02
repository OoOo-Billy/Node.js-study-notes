//1.引入模块
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m-data',{ useNewUrlParser: true });
//mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名',{ useNewUrlParser: true });

//2.监听各种状态
let db = mongoose.connection;//数据库连接属性
//db.on('error', console.error.bind(console, 'connection error:'));
db.on('error', () => {
    console.log("链接失败！");
});
db.once('open', () => {
    console.log("we're connected!");
});
db.once('close', () => {
    console.log("数据库断开成功!");
});