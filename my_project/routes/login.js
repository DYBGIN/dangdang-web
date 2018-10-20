const express=require("express");
const pool=require("../pool");
const router=express.Router();

router.post("/test",(req,res)=>{
    var user=req.body.user;
    var upwd=req.body.upwd;
    var sql=`SELECT * FROM ddw_user WHERE uname=? And upwd=?`;
    pool.query(sql,[user,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send("0")
        }else{
            res.send("1")
        }
    })
})
module.exports=router;
