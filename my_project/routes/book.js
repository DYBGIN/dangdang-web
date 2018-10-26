const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/book",(req,res)=>{
  var kw=req.query.kw;
  var kws=kw.split(" ");
  kws.forEach((elem,i,kws)=>{
    kws[i]=` title like '%${elem}%' `
  });
  var where=` WHERE ${kws.join(" and ")}`;
  var sql=`SELECT * FROM ddw_book`;
  sql+=where;
//   console.log(sql);
//   res.send();
//   var sql=`SELECT * FROM ddw_book`;
  pool.query(sql,[],(err,result)=>{
      if(err)throw err;
      data={};
      data.pno=req.query.pno;
      data.pageCount=Math.ceil(result.length/16);
      data.products=result.slice(data.pno*16,data.pno*16+16);
      res.send(data)
  })
})

module.exports=router;