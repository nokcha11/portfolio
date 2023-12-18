$(function(){
  let wd = $(window).width();
  if (wd<=320) {
    $('.menu-title-plus').click(function(){
      $(this).next().stop().slideToggle();
      $(this).children('.yj-btn').toggleClass('rotate');
    });
  }
  $(window).resize(function() {
    console.log("resize");
    let wd = $(window).width();
    if(wd<=320) {
      $('.menu-title-plus').click(function(){
        $(this).next().stop().slideToggle();
        $(this).children('.yj-btn').toggleClass('rotate');

      });
    }
  })
});