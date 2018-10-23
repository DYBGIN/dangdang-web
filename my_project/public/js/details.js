$(function(){
    (async function(){
        if(location.search.indexOf("lid=")!=-1){
            var lid=location.search.split("=")[1];
            console.log(lid)
            var res=await $.ajax({
                url:"http://127.0.0.1:3000/details/details",
                type:"get",
                data:`lid=${lid}`,
                dataType:"json"
            })
            //console.log(res)
        }
       
        new Vue({
            el:".detail_show",
            data:{
                res
            }
            
        })
        var res2=await $.ajax({
            url:"http://127.0.0.1:3000/details/alsob",
            type:"get",
            dataType:"json"
        })
        //console.log(res2)
        new Vue({
            el:".eveLi",
            data:{
                res2
            },
            computed: {
                listTemp: function () {
                    var list = res2;
                    var arrTemp = [];
                    var index = 0;
                    var sectionCount = 8;
                    for (var i = 0; i < list.length; i++) {
                        index = parseInt(i / sectionCount);
                        if (arrTemp.length <= index) {
                            arrTemp.push([]);
                        }
                        arrTemp[index].push(list[i]);
                    }
                    return arrTemp;
                }
            },
    
        })

        var res3=await $.ajax({
            url:"http://127.0.0.1:3000/details/alsol",
            type:"get",
            dataType:"json"
        })
        //console.log(res3)
        new Vue({
            el:".also_left",
            data:{
                res3
            }
        })
        if(location.search.indexOf("lid=")!=-1){
            var lid=location.search.split("=")[1];
            console.log(lid)
            var res4=await $.ajax({
                url:"http://127.0.0.1:3000/details/details",
                type:"get",
                data:`lid=${lid}`,
                dataType:"json"
            })
            //console.log(res4)
        }
       
        new Vue({
            el:".desc_detail",
            data:{
                res4
            }
            
        })

        /*小中大图片*/
        if(location.search.indexOf("lid=")!=-1){
            var lid=location.search.split("=")[1];
            console.log(lid)
            var res5=await $.ajax({
                url:"http://127.0.0.1:3000/details/alsoI",
                type:"get",
                data:`lid=${lid}`,
                dataType:"json"
            })
            console.log(res5)
        }
       
        new Vue({
            el:".detail_pic",
            data:{
                res5
            }
            
        })
        /*小图片切换*/
        var fullWidth=$(".detail_pic .sm_pic ul");
        var $next=$(".detail_pic .sm_pic .pic_r");
        var $prev=$(".detail_pic .sm_pic .pic_l");
        var i=0,LIWIDTH=56;
        $next.click(function(){
            //console.log(1)
            var $next=$(this);
            if(!$next.is(".disabled")){
                console.log(2)
                i++;
                fullWidth.css("marginLeft",-LIWIDTH*i);
                $prev.removeClass("disabled");
                if(fullWidth.children().length-5==i){
                    //console.log(1)
                    $next.addClass("disabled")
                }
                
                    
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

            /*新书上架轮播*/
$(document).ready(function(){
    var $fullWidth=$(".new_book_on .new_book_on_ul");
    var $eveWidth=$(".new_book_on .new_book_on_ul .eveLi div").width();
    var $length=$fullWidth.find("li.eveLi div").length;
    //console.log($length)
    var i=0;
    var $next=$(".new_book_on .new_book_on_r");
    var $prev=$(".new_book_on .new_book_on_l");
    $next.click(function() {
        //console.log(1);
        i++;
        if(i>$length-1)
        i=0;
        var p=i*(-$eveWidth);
        $fullWidth.css({transform:'translate(' + p + 'px)'})
    })
    $prev.click(function(){
        //console.log(2)
        i--;
        if(i<0)
        i=$length-1;
        var p=i*(-$eveWidth);
        $fullWidth.css({transform:'translate('+ p +'px)'})
    })
})
    })()
})
