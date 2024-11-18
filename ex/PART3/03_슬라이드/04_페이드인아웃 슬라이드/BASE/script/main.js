let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let current = 0;

slide.eq(0).fadeIn();

setInterval(slideAuto, 3000);

function slideAuto(){
  let next = (current+1) % slideCount;
  slide.eq(current).fadeOut();
  slide.eq(next).fadeIn();
  current = next;
};
