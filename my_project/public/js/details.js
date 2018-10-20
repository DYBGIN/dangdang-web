$(function(){
    /*小图片切换*/
    var fullWidth=$(".detail_pic .sm_pic ul");
    var $next=$(".detail_pic .sm_pic .pic_r");
    var $prev=$(".detail_pic .sm_pic .pic_l");
    var i=0,LIWIDTH=56;
    $next.click(function(){
        //console.log(1)
        var $next=$(this);
        if(!$next.is(".disabled")){
            i++;
            fullWidth.css("marginLeft",-LIWIDTH*i);
            $prev.removeClass("disabled");
            if(fullWidth.children().length-5==i)
            $next.addClass("disabled")
        }
    })
    $prev.click(function(){
        //console.log(2)
        var $prev=$(this);
        if(!$prev.is(".disabled")){
            i--;
            fullWidth.css("marginLeft",-LIWIDTH*i);
            $next.removeClass("disabled");
            if(i==0);
            $prev.addClass("disabled")
        }
    })

    //图片替换
    var $mImg=$(".detail_pic .md_pic img");
    var $lgImg=$(".detail_pic .md_pic .lg_pic");
    var lg=$(".detail_pic .sm_pic ul li img").attr("data-lg");
    $lgImg.css("backgroundImage",`url(${lg})`)
    fullWidth.on("mouseover","img",function(){
       var md=$(this).attr("data-md");
        $mImg.attr("src",md);
        $lgImg.css("background",`url(${$(this).attr("data-lg")})`)
    })

    //遮罩层
    var $mask=$("#mask"),$smask=$("#superMask");//找到透明模块mask和空divsuper-mask所在的位置
    var MSIZE=140,SMIZE=320,MAX=SMIZE-MSIZE;//设置mask的大小,s-mask的大小，max为s-mask - mask的大小
    $smask.hover(function() {//绑定鼠标悬停事件在空divsuper-mask上
        $mask.toggleClass("d-none");//鼠标进入，d-none取消，移除，d-none加上
        $lgImg.toggleClass("d-none")
    })
        .mousemove(function(e){//绑定鼠标移动事件
            var top=e.offsetY-MSIZE/2;//
            var left=e.offsetX-MSIZE/2;
            if(top<0) top=0;if(top>MAX) top=MAX;//如果top，即mask距离super-mask的距离比0小，即上面超过了super的范围
            //就只能让那个距离为0，如果距离比max还大，那就让他只能为max的距离
            if(left<0) left=0;
            if(left>MAX) left=MAX;//同上
            $mask.css({top,left});
            $lgImg.css("backgroundPosition",`${-2*left}px ${-2*top}px`)//mask的top*负的(大图/中图)的比例
            //mask向下移，大图就向上移，所以乘的是负的
        })//同上
})
