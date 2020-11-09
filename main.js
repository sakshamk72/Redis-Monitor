//Get Information of server from redis

//request info from server
app.get("/api/redis_monitor",(req,res)=>{
 RedisInfo.findAll({
    where: {md5: "first"}
})
// verifying credentials
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
