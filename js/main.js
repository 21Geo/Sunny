$('.nav [data-toggle=dropdown]').on('touchstart', function(event) {
  // Avoid following the href location when clicking
  event.preventDefault();
  // Avoid having the menu to close when clicking
  event.stopPropagation();
  // If a menu is already open we close it
  $('.nav [data-toggle=dropdown]').parent().removeClass('open');
  // opening the one you clicked on
  $(this).parent().addClass('open');
});

$(window).scroll(function(){
  if(window.scrollY > screen.availHeight * 0.5){
    $('#btn_top').css('display', 'block');
  }else{
    $('#btn_top').css('display', 'none');
  }
});

$('#last-update').html('Last Update: ' + new Date(document.lastModified).toLocaleDateString());

$('#show-route').click(function(){
  $(this).prop('disabled', true);
  getUserLocation(getDirections);
});

