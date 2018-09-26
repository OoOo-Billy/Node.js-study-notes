db.school.find();
db.colleges.find();

//查询HTML5的所有老师
var cno = db.colleges.findOne({name:"HTML5"}).cno;
print(cno);
db.school.find({cno: cno});

//查询年龄大于30岁或小于20岁的所有老师
db.school.find({$or:[{age: {$lt:20}},{age: {$gt: 30}}]});

db.school.updateMany({$or:[{name: "郭老师"},{name: "黄老师"}]},{$set:{wages: 3000}});
db.school.update({name: "毕老师"},{$set:{wages: 4500}});

/*为所有小于等于10000工资的老师提200的薪水*/
db.school.find({wages:{$lte:10000}});
db.school.updateMany({wages: {$lte:10000}},{$inc:{wages: 200}});