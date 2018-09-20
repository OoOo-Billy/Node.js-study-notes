/*
Buffer.alloc(size[, fill[, encoding]])
size:确定期望的Buffer长度
*/

/*
let arr = new Array(10);
console.log(arr);
console.log(arr.length);
*/

let buffer = Buffer.alloc(10);
buffer[0] = 10;
buffer[1] = 12;
buffer[2] = 16;
buffer[10] = 1;//溢出不处理
console.log(buffer);

//Buffer的方法
buffer.forEach((item, index) => {
    console.log(`${index} : ${item}`)
});