let mianMenu = $('nav > ul > li');
let subMenu = mianMenu.find('ul');
let header = $('header')

mianMenu.mouseover(function(){
  header.addClass('active');
  subMenu.stop().slideDown();
}).mouseout(function(){
  header.removeClass('active');
  subMenu.stop().slideUp();
})