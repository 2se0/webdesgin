// let mainMenu = $('nav > ul > li');

// mainMenu.mouseover(function(){
//   $(this).find('ul').stop().slideDown();
// }).mouseout(function(){
//   $(this).find('ul').stop().slideUp();
// })

let main = $('nav > ul > li');
let sub = main.find('ul');
let header = $('header');

main.mouseover(function(){
  header.addClass('active');
  sub.stop().slideDown();
}).mouseout(function(){
  header.removeClass('active');
  sub.stop().slideUp();
})