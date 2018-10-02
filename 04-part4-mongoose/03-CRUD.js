//1.引入模块
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m-data', {useNewUrlParser: true});
mongoose.connection.once("open", () => {
    console.log("we're connected!");
});
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
let personModel = mongoose.model("person", personSchema);

//2.增删改查

//2.1增

/*personModel.create([
        {
            name: "刘德华",
            age: 45,
            weChat: "我是华仔",
            phoneNumber: 18888888888
        },
        {
            name: "王菲",
            age: 35,
            gender: "女",
            weChat: "菲菲",
            phoneNumber: 12345678910
        },
    {
        name: "可可",
        age: 15,
        gender: "女",
        weChat: "可可公主",
        phoneNumber: 17777777777
    }
    ], (err) => {
        if (!err) {
            console.log("插入成功！");
        } else {
            throw err;
        }
    });*/


//2.2查找文档（查）

/*personModel.find({},(err,docs)=>{//{}查找所有
    if (!err){
        console.log(docs);//obj
    }
});*/

//第一个参数：查询条件，第二个参数：映射条件，第三个参数：回调函数
/*personModel.find({},{name: 1, _id: 0},(err,docs)=>{
    if (!err){
        console.log(docs);//obj
    }else {
        throw err;
    }
});*/

//映射的另一种方法:
// 每个key中间记得使用空格隔开，不希望id出现的可以在_id前面加上"-"，注意："-"只能使用在_id上！
/*personModel.find({},"-_id name weChat phoneNumber",(err,docs)=>{
    if (!err){
        console.log(docs);//obj
    }else {
        throw err;
    }
});*/

//skip和limit
/*personModel.find({},{name: 1, _id: 0},{skip: 2, limit: 3},(err,docs)=>{
    if (!err){
        console.log(docs);//obj
    }else {
        throw err;
    }
});*/

//2.3改
//personModel.update();已被最新版本弃用
//personModel.updateMany();
//personModel.updateOne();

/*personModel.updateOne({name: "Billy"},{$set:{age: 25}},{multi:true}, (err)=>{
    if (!err){
        console.log("修改成功");
    } else {
        throw err;
    }
});*/

//2.4删

//personModel.remove();已被最新版本弃用
//personModel.deleteOne();
//personModel.deleteMany();

personModel.deleteMany({name:"Billy"},(err)=> {
    if (!err) {
        console.log("删除成功");
    } else {
        throw err;
    }
});