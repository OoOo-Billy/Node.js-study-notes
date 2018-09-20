/*
文件系统：file system
*/
//1.引入模块
let fs = require('fs');

//2.打开文件
//fs.openSync(path, flags[, mode])
let fd = fs.openSync('./03-fs/test.txt','w');//flag:'w'写入；'r'读取...
/*注意：传入的路径下如果没有找到相应文件,Node.js会自动创建*/
console.log(fd);//3，一个标识码

//3.写入内容
fs.writeFileSync(fd,'这是通过fs.writeFileSync写入的字符串');

//4.保存并退出
fs.closeSync(fd);
