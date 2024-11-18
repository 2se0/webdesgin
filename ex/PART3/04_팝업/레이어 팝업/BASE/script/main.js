let popupLink = $('.notice li:first');
let popup = $('#popup');
let popupClose = popup.find('.close');

popupLink.click(function(e){
  e.preventDefault();
  popup.addClass('active');
});
popupClose.click(function(){
  popup.removeClass('active');
});