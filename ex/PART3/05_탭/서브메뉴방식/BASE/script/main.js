let tepMenu = $('.tapmenu > li');

tepMenu.click(function(e){
  e.preventDefault();
  tepMenu.removeClass('active');
  $(this).addClass('active');
})
  