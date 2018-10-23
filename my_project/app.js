const express=require("express");
const bodyParser=require("body-parser");
const session=require("express-session");
const index=require("./routes/index");
const login=require("./routes/login");
const register=require("./routes/register");
const details=require("./routes/details");

var app=express();
var server=app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
    secret:'随机字符串',
    resave:false,
    saveUninitialized:true
}))
app.use("/index",index);
app.use("/login",login);
app.use("/register",register);
app.use("/details",details);