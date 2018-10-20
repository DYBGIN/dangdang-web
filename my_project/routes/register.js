const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get('/user',(req,res)=>{
    var user=req.query.user;
    var sql=`SELECT * FROM ddw_user WHERE uname=?`;
    pool.query(sql,[user],(err,result)=>{
        if(err) console.log(err);
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    })
})

router.post("/add",(req,res)=>{
    var user=req.body.user;
    var upwd=req.body.upwd;
    var tel=req.body.tel;
    var uemail=req.body.uemail;
    var sql=`INSERT INTO ddw_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)`;
    pool.query(sql,[user,upwd,uemail,tel],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows==1){
            res.send("1")
        }else{
            res.send("0")
        }
    })
})
module.exports=router;