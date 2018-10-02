use test
db
/*插入10000条数据的时候，把数据放入一个整体再插入*/
var arr = [];
for(var i = 0;i < 10000;i++){
    arr.push({counter: i});
};
db.demos.insert(arr);
db.demos.find();

/*查找小鱼等于666的数据*/
db.demos.find({counter: {$lt:666}});

/*查找小于66的数据，大于666的数据*/
db.demos.find({counter: {$lt:666,$gt:66}});

/*查找前10条数据*/
db.demos.find({counter: {$lte:10}});
db.demos.find().limit(10);

/*查找第81到90条数据*/
db.demos.find().skip(80).limit(10);
