/*
exports.str = "哈哈哈";
exports.fn = () => {
    console.log("呵呵呵");
};
exports.obj = {name:"张三",age:24};
*/

/*
exports = {
    str: "哈哈哈",
    fn: () => {
        console.log("呵呵呵");
    },
    obj: {name:"张三",age:24}
};
*/
//require为{}，原因：exports只能通过“.”语法暴露，无法通过“=”赋值暴露

module.exports = {
    str: "哈哈哈",
    fn: () => {
        console.log("呵呵呵");
    },
    obj: {name:"张三",age:24}
};
//正常require

/*
* 为什么exports只能通过“.”语法暴露呢？
* 面向对象思维：栈区和堆区
* 实际上：
* exports = module.exports
* 所以exports只能通过“.”语法赋值，如果通过“=”语法赋值，内存指针便会指向堆中的另一个数据，因为最终暴露给require的实际上是modules.exports对象，所以为{}
* */
