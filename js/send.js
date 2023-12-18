
/* menu */
$('.gnb li').hover(function(){
  $(this).children('.submenu').stop().slideDown();
}, function(){
  $(this).children('.submenu').stop().slideUp();
});

AOS.init({
  duration: 800,
  offset: 300, // 기본값이 아닌 특정 값으로 설정
  once: true,
  anchorPlacement: 'top-bottom',
});








