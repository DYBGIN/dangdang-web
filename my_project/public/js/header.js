$(function(){
    (async function(){
        $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head"),
        await $.ajax({
            url:"header.html",
            type:"get",
            success:function(res){
               //console.log(res)
               $(res).replaceAll("#header")
            }
        })

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