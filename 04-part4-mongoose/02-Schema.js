//1.引入模块
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m-data',{ useNewUrlParser: true });

//2.监听各种状态
mongoose.connection.once("open",() => {
    console.log("we're connected!");
});

//3.创建Schema（模式对象,规范）
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "男",
    },
    weChat: String,
    phoneNumber: Number
});

//4.创建Model(规范，模型)对象
let personModel = mongoose.model("person",personSchema);

//5.插入文档(增)
personModel.create({
    name: "Billy",
    age: 25,
    gender: "男",//默认男，所以这步可以省略
    weChat: "leiyu_bi7654321",
    phoneNumber: 13272777674
},(err)=>{
    if (!err){
        console.log("插入成功！");
    }else {
        throw err;
    }
});