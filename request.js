// request information from the server and respond to it.

app.get("/api/redis_info",(req,res)=>{
    // sql query for finding  required info
    RedisInfo.findAll({
        where: {md5: req.query.md5}
    })
    
    // catch 
    .then((redisInfo)=>{
        res.json(redisInfo);
    }).catch((err)=>{
        console.log(err);
    });
});

