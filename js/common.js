$(document).ready(function(){//start

  // 메뉴오픈
  $(".ham").click(function(){
    $(".dim").fadeIn();
    $(".mgnb-wrap").animate({
      right : "0"
    }, 500);
  })

  // 메뉴닫기
  $(".close").click(function(){
    $(".dim").fadeOut();
    $(".mgnb-wrap").animate({
      right : "-100%"
    }, 500);
  })


  $(".depth2").hide()
  
  $(".mgnb > li").click(function(){
   $(".depth2").stop().slideUp();
   $(this).children(".depth2").stop().slideDown();
  });

  $(".depth").hide();

  $(".gnb > li").hover(function(){
    $(".depth").stop().slideUp();
    $(this).children(".depth").stop().slideDown();
  });

  $(window).scroll(function(){
       
    if($(window).scrollTop() > 70){
      
     $("header").addClass("scroll")
    }
    else{
     $("header").removeClass("scroll")
    }
    });

    AOS.init();

    // $(".tabmenu .txt, .tabmenu .txt2").hide();

    // $(".tabmenu .t1").show();

    // $(".tabmenu li").click(function(){
    //   $(".tabmenu li").removeClass("on");
    //   $(this).addClass("on");

    //   // var i = $(this).index();
    //   // console.log(i);
    //   // $(".tabcon").hide();
    //   // $(".tabcon").eq(i).show();
    // });

    
    $(".tab-btn li").eq(0).addClass("active");
    $(".tab-con li").hide();
    $(".tab-con li").eq(0).show();
    $(".tab-btn li a").click(function (e){
      e.preventDefault();
      $(this).parent("li").addClass("active").siblings().removeClass("active");
      var indexNum = $(this).parent("li").index();
      $(".tab-con li").eq(indexNum).show().siblings().hide();
    });

    $(".pt").click(function() {
      $(this).next(".pt-txt").stop().slideToggle(300);
     $(this).toggleClass('on').siblings().removeClass('on');
     $(this).next(".pt-txt").siblings(".pt-txt").slideUp(300); });

   
});//end