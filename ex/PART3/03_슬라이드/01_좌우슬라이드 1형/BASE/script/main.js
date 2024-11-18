let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentidx = 0;

function autoSlide(){
  setInterval(function(){
    let next = (currentidx + 1) % slideCount
    slideContainer.animate({marginLeft: -1200*next +'px'})
    currentidx = next
  },3000)
}
autoSlide();
