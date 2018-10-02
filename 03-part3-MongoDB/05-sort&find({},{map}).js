db.school.find();
//排序
db.school.find().sort({wages:1,_id:-1});//1升序,-1降序

//映射：只查询需要的key
db.school.find({},{name:1,_id:0,wages:1});