
//buffer类似于数组，用于储存二进制数据
//let buffer = new Buffer();//已废弃
// let str = "www.baidu.com";
let str = "三国演义";

let buffer = Buffer.from(str,'utf-8');//默认utf-8编码，可以省略
console.log(buffer);
console.log(buffer.length);
console.log(str.length);
console.log(buffer.toString());//默认utf-8编码，可以省略

/*
十六进制：00 - ff
十进制： 0 - 255
二进制： 00000000 - 11111111
1位 = 1bit
8bit = 1B
1024B = 1KB
*/

