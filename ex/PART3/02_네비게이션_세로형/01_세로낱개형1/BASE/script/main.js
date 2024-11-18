let mainmMenu = $('aside nav > ul> li')

mainmMenu.mouseover(function(){
  $(this).find('ul').stop().slideDown();
}).mouseout(function(){
  $(this).find('ul').stop().slideUp();
})