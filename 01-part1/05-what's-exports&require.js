// console.log(window.exports);//报错：node.js中没有window这个全局变量
// console.log(global);//这是Node.js中的全局变量
// console.log(global.exports);
// console.log(global.require);

//console.log(arguments);//所有函数的实参，只要是函数，就会有arguments
//console.log(arguments.callee);//返回函数本身
// console.log(arguments.callee + "");//以字符串的形式返回
// 得出结论：Node.js一个模块其实就是一个闭包函数:
// function (exports, require, module, __filename, __dirname) {}

console.log(exports);//{}
console.log(global.require);//undefined
//结论：exports和require其实就是这个模块函数的两个参数，而不是全局变量的参数