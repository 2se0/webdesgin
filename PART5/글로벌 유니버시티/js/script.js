$(function(){
//메뉴
  $("nav>ul>li").mouseenter(function(){
    $(this).find('ul').stop().slideDown();
  })
  $("nav>ul>li").mouseleave(function(){
    $(this).find('ul').stop().slideUp();
  })

  //슬라이드
  let i= 0;
  function Slide(){
    if(i<2){
      i++;
    }else{
      i=0;
    }

    $(".slide ul li").fadeOut();
    $(".slide ul li").eq(i).fadeIn();
  }

  setInterval(Slide, 3000);

  //팝업
  $(".pop").click(function(){
    $(".popup").show();
    return false
  })
  $(".close").click(function(){
    $(".popup").hide();
  })
})