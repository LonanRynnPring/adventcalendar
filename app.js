// handle clicks on days

$('div[class^="day"]').click(function(){
      var content = $(this).html();
      $('#modal').addClass('active');
      $('#modal .wrapper .content .box').html('');
      $('#modal .wrapper .content .box').html(content);
  })
  
  // close modal
  
  $('.close').click(function(){
    var ultimateParent = $(this).parent().parent().parent();
    ultimateParent.addClass('moveOut');
    setTimeout(function(){
      ultimateParent.removeClass('moveOut').removeClass('active');
    },250);
  })