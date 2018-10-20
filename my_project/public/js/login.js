$(function(){
    var $user=$(".input .int1");
    var $upwd=$(".input .int2");
    var $btn=$(".input #btn1");
    var $p1=$(".input .p1");
    var $p2=$(".input .p2");
    var user=localStorage.getItem("user");
    var upwd=localStorage.getItem("upwd");
    $user.val(user);
    $upwd.val(upwd);
    $user.blur(function(){
        if(!$user.val()){
            $p1.html("用户名不能为空")
        }else{
            $p1.html("");
            user=$user.val();
        }
    })
    $upwd.blur(function(){
        if(!$upwd.val()){
            $p2.html("密码不能为空")
        }else{
            $p2.html("");
            upwd=$upwd.val();
        }
    })
    /*登陆*/
    $btn.click(function(e){
        e.preventDefault();
        user=$user.val();
        upwd=$upwd.val();
        sessionStorage.setItem("user",user);
        $.ajax({
            url:"http://127.0.0.1:3000/login/test",
            type:"post",
            data:{
                user,
                upwd
            },
            success:function(res){
                if(res==0){
                    alert("登陆成功，1s后跳转到首页");
                    setTimeout(function(){
                        location.href="http://127.0.0.1:3000/index.html"
                    },1000)
                }else{
                    alert("用户名或者密码不正确，请重新输入");
                    $user.val();
                    $upwd.val();
                    $user.focus()
                }
            }
        })
    })
})