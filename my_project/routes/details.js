const express=require("express");
const pool=require("../pool");
const router=express.Router();

router.get("/details",(req,res)=>{
    var lid=req.query.lid;
    var sql=`SELECT * FROM ddw_book WHERE lid=?`;
    pool.query(sql,[lid],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

router.get("/alsob",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=2`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

router.get("/alsol",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=1`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

router.get("/alsoI",(req,res)=>{
    var lid=req.query.lid;
    var sql=`SELECT * FROM ddw_book_pic WHERE book_id=?`;
    pool.query(sql,[lid],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
module.exports=router;