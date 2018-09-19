let fn = require("./04-export&require-practice/myFunc");//文件模块：用户自己创建的模块，标识为文件的相对路径或绝对路径；

let fs = require('fs');//核心模块：Node.js官方核心模块，标识为简写，通过官方文档查询

let sum = fn.sum(1,2,3,4,5,6,7,8,9,10);
let avg = fn.avg(1,2,3,4,5,6,7,8,9,10);

console.log(sum);
console.log(avg);