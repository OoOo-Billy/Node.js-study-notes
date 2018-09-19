/*
function (exports, require, module, __filename, __dirname) {}
*/

// console.log(module);//module就是代表当前模块
console.log(module.exports);
console.log(exports);
console.log(exports === module.exports);//true

console.log(__filename);//文件路径
console.log(__dirname);//路径