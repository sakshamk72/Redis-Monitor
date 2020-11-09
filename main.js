app.get("/api/redis_info",(req,res)=>{
    RedisInfo.findAll({
        where: {
            md5: req.query.md5
          }
    })
    .then((redisInfo)=>{
        res.json(redisInfo);
    }).catch((err)=>{
        console.log(err);
    });
});

//Server info from redis

app.get("/api/redis_monitor",(req,res)=>{
 //  var md5U = req.query.md5;

 RedisInfo.findAll({
    where: {
        md5: "first"
      }
})
.then((redisInfo)=>{
    console.log(redisInfo);
    var rst = get_info(host=redisInfo.host,
        port=redisInfo.port,
        password=redisInfo.password)
    res.json(rst);
}).catch((err)=>{
    console.log(err);
});

});
