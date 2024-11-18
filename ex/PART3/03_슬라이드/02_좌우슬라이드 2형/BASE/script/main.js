let slideContainer = $('.container'),
    slide = slideContainer.find('.slide'),
    slideCount = slide.length,
    current = 0;

slide.eq(0).siblings().css({marginLeft:'-1200px'});

function slideAuto(){
  setInterval(function(){
    let next = (current + 1) % slideCount;
    slide.eq(current).animate({marginLeft:'-1200px'});
    slide.eq(next).animate({marginLeft:'0px'});
    current = next
  },3000)
};

slideAuto();
