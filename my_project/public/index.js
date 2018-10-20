$(function(){
    /*免费发布房屋中的三角形*/
    var $issue=$("#top>.nav>.navbar>.nav_right>li>a.issue");
    var $pop_box=$("#top>.nav>.pop_box>ul.pop_detail");
    $issue.mouseenter(function(){
        $pop_box.css("display","block");
    }).mouseleave(function(){
        $pop_box.css("display","none");
    })
    /*轮播图用js设置样式*/
    var $imgs=$("#top>.carousel>ul.carousel_img");
    //获取屏幕的宽度
    var $img_w=window.innerWidth;
    //console.log($img_w);
    $("#top>.carousel>ul.carousel_img>li>img").css({
        "width":$img_w+"px"
    })
    var $length=$imgs.find("li").length;
    $imgs.css({
        "width":$img_w*$length+"px",
    })
    /*自动轮播图效果*/
    var i=0;
    //得到图片的张数
    var $len=$("#top>.carousel>.carousel_img").find("li").length;
    /*根据轮播图图片的张数来创建小圆点的个数*/
    var $circle_list=$("#top>.carousel>.circle");
    for(var i=0;i<$len;i++){
        var $li=$("<li></li>");
        var $a=$circle_list.append($li);
    }
    $circle_list.children("li:first-child").addClass("active");
    //图片自动轮播的函数
    function imgscroll(){
        i++;
        if(i>$len-1) {
            i=0;
        }
        $imgs.animate({
            "left":-$img_w*i+"px"
        },1000);
        $circle_list.children(`li:nth-child(${i+1})`).addClass("active")
                                                     .siblings().removeClass("active");
    }
    var timer=setInterval(imgscroll,5000);
    //当鼠标移入的时候，清除定时器的功能，移出的时候，开始定时器
    $("#top>.carousel").mouseenter(function(){
        clearInterval(timer)
    }).mouseleave(function(){
        timer=setInterval(imgscroll,5000);
    })
    /*当单击小圆点时，图片轮播的效果*/
    var $circle_lists=$circle_list.children();
    $circle_lists.click(function(){
        var d=$(this).index();
        $imgs.animate({
            "left":-$img_w*d+"px"
        },1000);
        $circle_list.children(`li:nth-child(${d+1})`).addClass("active")
                                                     .siblings().removeClass("active");
    })
    /*单击左箭头轮播效果*/
    var $left=$("#top>.carousel>span.arrow.arrow_left");
    $left.click(function(){
        $imgs.stop();
        i--;
        if(i<0){
            i=$len-1;
        }
        $imgs.animate({
            "left":-$img_w*i+"px"
        })
        $circle_list.children(`li:nth-child(${i+1})`).addClass("active")
                                                     .siblings().removeClass("active");
    })
    /*单击右箭头轮播效果*/
    var $right=$("#top>.carousel>span.arrow.arrow_right");
    $right.click(function(){
        $imgs.stop();
        imgscroll();
    })
    /*封装选项卡的功能函数*/
    function tabs($parent,$content){
        $parent.on("click","li",function(e){
            e.preventDefault();
            var $li=$(this);
            var $i=$li.index();
            $li.addClass("active")
               .siblings().removeClass("active");
            $content.find("div").eq($i).addClass("active")
                                       .siblings().removeClass("active");
        })
    }
    /*城市隐藏的详细选项卡*/
    tabs($("#top>.search>form.form_search>.input_one>.city_detail>ul.tab"),$("#top>.search>form.form_search>.input_one>.city_detail>.container"));
    /*城市隐藏的第二层选项卡*/
    tabs($(".city_detail>.container>div:nth-child(2)>ul.sub_tab"),$(".city_detail>.container>div:nth-child(2)>div.sub_container"));
    /*城市隐藏选项卡单击时隐藏*/
    $(".input_one>.city_detail").css("display","none");
    $(".input_one").mouseenter(function(){
        $(".input_one>.city_detail").css("display","block");
    }).mouseleave(function(){
        $(".input_one>.city_detail").css("display","none");
    })
    //单击时选择内容并放在input中
    console.log($(".input_one>.city_detail>.container>div>dl>dd"));
    $(".input_one>.city_detail>.container>div>dl>dd").on("click","a",function(e){
        e.preventDefault();
        $(".input_one>input").val($(this).html())
    })
    $(".input_one>.city_detail>.container>div:nth-child(2)>div").on("click","a",function(e){
        e.preventDefault();
        $(".input_one>input").val($(this).html())
    })
})
