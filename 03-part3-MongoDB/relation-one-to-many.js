db.weiboContents.insert(
    [
        {weibo:"世界这么大我想去看看！"},
        {weibo:"今天天气好好！"},
    ]
);
db.weiboComments.insert(
    [
        {
            weibo_id: ObjectId("5bb2cf76ec75b688edfcbac2"),
            list:[
                "你有钱吗？",
                "一个人很孤单！",
                "准了！"
            ]
        },
        {
            weibo_id: ObjectId("5bb2cf76ec75b688edfcbac3"),
            list:[
                "这边还在下雨！",
                "羡慕",
            ]
        },
    ]
);
db.weiboContents.find();
db.weiboComments.find();

/*根据上一条微博的id在评论里查找*/
var weibo_id = db.weiboContents.findOne({weibo:"世界这么大我想去看看！"})._id;
db.weiboComments.find({weibo_id: weibo_id});