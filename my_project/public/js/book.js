$(function(){
  function loadPage(pno=0){
    //(async function(){
        if(location.search.indexOf("kw=")!=-1){
            var kw=decodeURI(location.search.split("=")[1]);

            $.ajax({
                url:"http://127.0.0.1:3000/book/book",
                type:"get",
                data:{kw,pno},
                // dataType:"json",
                success:function(res){
                    new Vue({
                        el:".aside_right",
                        data:{
                            res
                        },
                        mounted(){
                            if(pno==0)
                            $("#page").children(":first").children().addClass("not_p");
                            if(pno==res.pageCount-1)
                            $("#page").children(":last").children().addClass("not_p")
                    
                            $(document).ready(function(){
                                $(".purchase1").mouseover(function(){
                                    $(this).children(".box").css("left","0px")
                                }).mouseout(function(){
                                    $(this).children(".box").css("left","-50px")
                                })
                            });
                            $("#page").on("click","a",function(e){
                                console.log(999)
                                e.preventDefault();
                                var $a=$(this);
                                console.log(12222)
                             if(!$a.parent().is(".disabled,.active")){
                                 console.log(111)
                               if($a.html()=="上一页"){
                                   var pno=$a.parent().siblings(".active").children().html()-2
                               }else if($a.html()=="下一页"){
                                   var pno=$a.parent().siblings(".active").children().html();
                               }else{
                                 var pno=$a.html()-1;
                               }
                               loadPage(pno);
                            }
                            })
                        }
                     })

                }
            })
            // console.log(res)
            
        }
        // if(pno==0)
        // $("#page").children(":first").children().addClass("not_p");
        // if(pno==res.pageCount-1)
        // $("#page").children(":last").children().addClass("not_p")

        // $(document).ready(function(){
        //     $(".purchase1").mouseover(function(){
        //         $(this).children(".box").css("left","0px")
        //     }).mouseout(function(){
        //         $(this).children(".box").css("left","-50px")
        //     })
        // })
    //})()
  }
  loadPage();
//   $("#page").on("click","a",function(e){
//     console.log(999)
//     e.preventDefault();
//     var $a=$(this);
//     console.log(12222)
//  if(!$a.parent().is(".disabled,.active")){
//      console.log(111)
//    if($a.html()=="上一页"){
//        var pno=$a.parent().siblings(".active").children().html()-2
//    }else if($a.html()=="下一页"){
//        var pno=$a.parent().siblings(".active").children().html();
//    }else{
//      var pno=$a.html()-1;
//    }
//    loadPage(pno);
// }
// })

})
