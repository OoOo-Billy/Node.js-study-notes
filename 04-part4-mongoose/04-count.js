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

//count：已被弃用
personModel.count({},(err,count)=>{
    if (!err) {
        console.log(count);
    } else {
        throw err;
    }
});