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

//document
let person = new personModel({
    name: "Billy",
    age: 25,
    weChat: "leiyu_bi7654321",
    phoneNumber: 13272777674
});

person.save((err,product)=>{
    if (!err){
        console.log(product);
    }else {
        throw err;
    }
});