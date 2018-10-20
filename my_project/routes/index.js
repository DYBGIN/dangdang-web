const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/carousel",(req,res)=>{
    var sql=`SELECT * FROM ddw_index_carousel`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
/*获取新书预售信息*/
router.get("/readyb",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=1`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
/*获取新书上架信息 */
router.get("/newb",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=2`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

/*新书热卖榜 */
router.get("/soleb",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=3`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

/*图书畅销榜 */
router.get("/tscx",(req,res)=>{
    var sql=`SELECT * from ddw_book WHERE family_id=4`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

/*电子书榜 */
router.get("/eleb",(req,res)=>{
    var sql=`SELECT * from ddw_book WHERE family_id=5`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

/*独家特供 */
router.get("/djtg",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=6`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

/*主编推荐*/
router.get("/zbtj",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=7`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

/*作家榜 */
router.get("/author",(req,res)=>{
    var sql=`SELECT * FROM ddw_index_author`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

/*作家作品 */
router.get("/work",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=8`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

/*读者推荐 */
router.get("/reader",(req,res)=>{
    var sql=`SELECT * FROM ddw_book WHERE family_id=9`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

/*尾品汇 */
router.get("/tw",(req,res)=>{
    var sql=`SELECT * FROM ddw_index_ad`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
module .exports=router;