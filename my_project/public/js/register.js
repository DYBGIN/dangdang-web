$(function(){
    var $user=$(".set_area .int0");
    var $upwd=$(".set_area .int1");
    var $rpwd=$(".set_area .int2");
    var $tel=$(".set_area .int3");
    var $uemail=$(".set_area .int4");
    var $btn=$(".set_area .btn1");
    var $p1=$(".set_area .p1");
    var $p2=$(".set_area .p2");
    var $p3=$(".set_area .p3");
    var $p4=$(".set_area .p4");
    var $p5=$(".set_area .p5");
    var user,upwd,tel,uemail;
    //用户名的验证
    $user.blur(function(){
        if(!$(this).val()){
            $p1.html("用户名不能为空")
        }else{
            $p1.html("");
            user=$(this).val();
        }
    })
    $upwd.focus(function(){
        $.ajax({
            url:"http://127.0.0.1:3000/register/user",
            type:"get",
            data:{user},
            success:function(data){
                if(data==1){
                    $p1.html("用户名已经存在");
                    $user.val("")
                }
            }
        })
    })

    //密码验证
    $upwd.blur(function(){
        if(!$(this).val()){
            $p2.html("用户密码不能为空")
        }else{
            $p2.html("");
            upwd=$(this).val();
            var reg=/^\d{6,8}$/;
            if(!reg.test(upwd)){
                $p2.html("密码长度在6~8位")
            }
        }
    })

    //重复密码
    $rpwd.blur(function(){
        if(!$(this).val()){
            $p3.html("重复密码不能为空")
        }else if($rpwd.val()!=$upwd.val()){
            $p3.html("两次密码不一致")
        }else{
            $p3.html("");
            rpwd=$(this).val()
        }
    })

    //电话验证
    $tel.blur(function(){
        if(!$(this).val()){
            $p4.html("联系方式不能为空")
        }else{
            $p4.html("");
            tel=$(this).val();
            var reg=/^1[34578]\d{9}$/;
            if(!reg.test(tel)){
                $p4.html("号码格式不正确")
            }
        }
    })

    //邮箱验证
    $uemail.blur(function(){
        if(!$(this).val()){
            $p5.html("邮箱不能为空")
        }else{
            $p5.html("");
            uemail=$(this).val();
            var reg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
            if(!reg.test(uemail)){
                $p5.html("邮箱格式不正确")
            }
        }
    })

    //注册
    $btn.click(function(e){
        e.preventDefault();
        if(user&&upwd&&uemail&&tel){
            $.ajax({
                url:"http://127.0.0.1:3000/register/add",
                type:"post",
                data:{
                    user,
                    upwd,
                    uemail,
                    tel
                },
                success:function(data){
                   if(data==1){
                       alert("注册成功，1s后返回登录界面");
                       setTimeout(function(){
                           location.href="http://127.0.0.1:3000/login.html"
                       },1000)
                       $user.val("");
                       $upwd.val("");
                       $tel.val("");
                       $uemail.val("");
                   }
                }
            })
        }else{
            $p1.html("注册信息有误，请检查")
        }
    })
})