let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let current = 0;

setInterval(function(){
  let next = (current + 1) % slideCount;
  slideContainer.animate({marginTop: -300*next+'px'})
  current = next
},3000)