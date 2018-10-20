$(function(){
(async function(){
    var res=await $.ajax({
        url:"http://127.0.0.1:3000/index/carousel",
        type:"get",
        dataType:"json"
    })
    //console.log(res);
    new Vue({
        el:"#imgContainer",
        data:{
            res
        }
    })
    /*新书预售*/
    var res1=await $.ajax({
        url:"http://127.0.0.1:3000/index/readyb",
        type:"get",
        dataType:"json"
    })
    //console.log(res1)
    new Vue({
        el:".nb-box",
        data:{
            res1
        }
    })

    /*新书上架 */
    var res2=await $.ajax({
        url:"http://127.0.0.1:3000/index/newb",
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
    /*新书热销榜 */
    var res3=await $.ajax({
        url:"http://127.0.0.1:3000/index/soleb",
        type:"get",
        dataType:"json"
    })
    //console.log(res3)
    new Vue({
        el:".book_sale",
        data:{
            res3,
            aindex:-1
        },
        methods:{
            changeIndex(index){
                this.aindex=index;
                //console.log(index)
            },
            changeAindex(){
                this.aindex=-1;
                //console.log(this.aindex)
            }
        }
    })

    /*图书畅销榜 */
    var res4=await $.ajax({
        url:"http://127.0.0.1:3000/index/tscx",
        type:"get",
        dataType:"json"
    })
    //console.log(res4)
    new Vue({
        el:".book_hot",
        data:{
            res4,
            aindex:-1
        },
        methods:{
            changeIndex(index){
                this.aindex=index
            },
            changeAindex(){
                this.aindex=-1
            }
        }
    })

    /*电子书榜 */
    var res5=await $.ajax({
        url:"http://127.0.0.1:3000/index/eleb",
        type:"get",
        dataType:"json"
    })
    new Vue({
        el:".book_ele",
        data:{
            res5,
            aindex:-1
        },
        methods:{
            changeIndex(index){
                this.aindex=index
            },
            changeAindex(){
                this.aindex=-1
            }
        }
    })


    /*独家特供*/
    var res6=await $.ajax({
        url:"http://127.0.0.1:3000/index/djtg",
        type:"get",
        dataType:"json"
    })
    new Vue({
        el:".dj_tabs_all_content",
        data:{
            res6
        }
    })

    /*主编推荐*/
    var res7=await $.ajax({
        url:"http://127.0.0.1:3000/index/zbtj",
        type:"get",
        dataType:"json"
    })
    new Vue({
        el:".zb_tabs_all_content",
        data:{
            res7
        }
    })
    /*作家 */
     var author=await $.ajax({
        url:"http://127.0.0.1:3000/index/author",
        type:"get",
        dataType:"json"
    })
    //console.log(author)
    new Vue({
        el:".sel_author",
        data:{
            author,
            work:[],
        },
        created(){
            (async function(self){
                var work=await $.ajax({
                    url:"http://127.0.0.1:3000/index/work",
                    type:"get",
                    dataType:"json"
                })
                self.work=work;
                
            })(this)
        }
    })

    /*读者推荐 */
    var reader=await $.ajax({
        url:"http://127.0.0.1:3000/index/reader",
        type:"get",
        dataType:"json"
    })
    //console.log(reader)
    new Vue({
        el:".reader",
        data:{
            reader
        },
        computed: {
            listTemp: function () {
                var list = reader.slice(3);
                var arrTemp = [];
                var index = 0;
                var sectionCount = 5;
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

    /*尾品汇 */
    var ad=await $.ajax({
        url:"http://127.0.0.1:3000/index/tw",
        type:"get",
        dataType:"json"
    })
    new Vue({
        el:".book_wp",
        data:{
            ad
        }
    })
/*新书上架轮播*/
$(document).ready(function(){
    var $fullWidth=$(".new_book_on .new_book_on_ul");
    var $eveWidth=$(".new_book_on .new_book_on_ul .eveLi div").width();
    var $length=$fullWidth.find("li.eveLi div").length;
    console.log($length)
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
/*新书预售 轮播*/
$(document).ready(function(){
    var $fullWidth=$(".nb-box ul");
    var $eveWidth=$(".nb-box ul li").width;
    var $length=$fullWidth.find("li").length;
    //console.log($length)
    var $next=$(".nb-box .nb_box_r");
    var $prev=$(".nb-box .nb_box_l");
    var i=0;
    $next.click(function(){
        //console.log(3)
        i++;
        if(i>$length-1)
        i=0;
        var p=i*(-180);
        $fullWidth.css({transform:'translate('+p+'px)'})
    })
    $prev.click(function(){
        //console.log(4)
        i--;
        if(i<0)
        i=$length-1;
        var p=i*(-180);
        $fullWidth.css({transform:'translate('+p+'px)'})
    })
})
/*读者推荐 轮播*/
$(document).ready(function(){
    var $fullWidth=$(".reader .reader_left_bbx_list");
    var $eveWidth=$(".reader .reader_left_bbx_list li").width();
    var $length=$fullWidth.find("li.reader_left_bbx_list_line").length-8;
    console.log($length)
    var $next=$(".reader .reader_left_btnr");
    var $prev=$(".reader .reader_left_btnl");
    var i=0;
    $next.click(function(){
        i++;
        if(i>$length-1)
        i=0;
        var p=i*(-$eveWidth);
        $fullWidth.css({transform:'translate('+p+'px)'})
    });
    $prev.click(function(){
        i--;
        if(i<0)
        i=$length-1;
        var p=i*(-$eveWidth);
        $fullWidth.css({transform:'translate('+p+'px)'})
    })
})
    /*选项卡切换*/
    $(document).ready(function(){
        $(".book_sale .my_tabs_title li").mouseover(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $(".content").children().eq($(this).index()).show().siblings(".queryContent").hide();
        });
        $(".book_hot .my_tabs_title li").mouseover(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $(".content2").children().eq($(this).index()).show().siblings(".queryContent2").hide();
        });
        $(".book_ele .my_tabs_title li").mouseover(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $(".content3").children().eq($(this).index()).show().siblings(".queryContent3").hide();
        });
    })
    /*书单切换*/
    $(document).ready(function(){
        /*$(".queryContent .line,.queryContent2 .line,.queryContent3 .line").hide();
        $(".queryContent ul,.queryContent2 ul,.queryContent3 ul").on("mouseenter",".line_bar",function(){
            var $lineBar=$(this);
            $lineBar.addClass("active1").siblings().removeClass("active1");
            $lineBar.next().slideToggle(500)
                .siblings(".line").slideUp(500)
        })*/
        // $(".queryContent ul").on("mouseover",".line_bar",function(){
        //     if(aindex==index){
        //         var $lineBar=$(this);
        //         $lineBar.addClass("active1").siblings().removeClass("active1");
        //         $lineBar.last().slideToggle(500)
        //                 .siblings(".line").slideUp(500) 
        //     }
        // })
    })

    /*独家特供——选项卡切换*/
    $(document).ready(function(){
        $(".dj_tabs_title li").mouseover(function(){
            $(this).addClass("on").siblings().removeClass("on");
            $(".dj_tabs_all_content").children().eq($(this).index()).show().siblings(".dj_tabs_content").hide();
        })
        /*主编推荐——选项卡切换*/
        $(".zb_tabs_title li").mouseover(function(){
            $(this).addClass("on").siblings().removeClass("on");
            $(".zb_tabs_all_content").children().eq($(this).index()).show().siblings(".zb_tabs_content").hide();
        })
    })
    /*作者选项卡切换*/
    $(".sel_author_head ul li").mouseover(function(){
        $(this).addClass("live").siblings().removeClass("live");
        $(".sel_author_body_all").children().eq($(this).index()).show().siblings(".sel_author_body").hide()
    })

    /*读者推荐选项卡*/
    $(".reader .reader_left_head ul li").mouseover(function(){
        $(this).addClass("happen").siblings().removeClass("happen");
        $(".reader .reader_left_tj_all").children().eq($(this).index()).show().siblings(".reader .reader_left_tj").hide()
    })
})()
})