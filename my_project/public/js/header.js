$(function(){
    (async function(){
        $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head"),
        await $.ajax({
            url:"header.html",
            type:"get",
            success:function(res){
               //console.log(res)
               $(res).replaceAll("#header");
               var $search=$(".nav-search .nav-pic img");
               console.log(1)
               var $input=$(".nav-search .nav-input");
               $search.click(function(){
                   location.href=`http://127.0.0.1:3000/book.html?kw=${$input.val().trim()}`
               })
               $input.keyup(function(e){
                   if(e.keyCode==13)
                   $search.click()
               })
               if(location.search.indexOf("kw")!=-1){
                   var kw=location.search.split("=")[1];
                   $input.val(decodeURI(kw))
               }
            }
        })
        
        var $td=$(".t1 #td1");
        var uname=sessionStorage.getItem("user");
        if(uname){
            var html=`欢迎回来${uname}&nbsp;&nbsp;&nbsp;<a href="http://127.0.0.1:3000/logout.html">退出</a>`;
            $td.html(html)
        }

        $(document).ready(function(){
            $("#header .dropdown-menu1").hide()
            $("#header .t1 tr td").mouseover(function(){
                $(this).children().last().show()
            })
                    .mouseout(function(){
                        $(".dropdown-menu1").hide()
                    });
        })
        /*全部分类的下拉菜单*/
        $(document).ready(function(){
            $("#header .t3 tr td#tab .tab-div").hide()
            $(".t3 tr td#tab").mouseover(function(){
                $(this).children("div").show().children("ul").show();
            }).mouseout(function(){
                $(".t3 tr td#tab .tab-div").hide()
            })
    
            $(".t3 tr td#tab ul.tab-title li").mouseover(function(){
                $(this).addClass("select").siblings().removeClass("select");
                $(".tab-content").children().eq($(this).index()).show().siblings(".tab-ct").hide()
            })
    
        })
    })()


    
})