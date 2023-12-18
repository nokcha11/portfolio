/* menu */
$('.gnb li').hover(function(){
  $(this).children('.submenu').stop().slideDown();
}, function(){
  $(this).children('.submenu').stop().slideUp();
});


/* slide fade */
// setInterval(function(){
//   $('figure ul li:first-child')
//   .addClass('active')
//   .css({ opacity: 0 })
//   .animate({opacity:1}, 1000, function(){
//     $('figure ul').append($(this).removeClass('active'));
//   });
// },3000);

/* slide */
// setInterval(function(){
// $('figure ul').animate({
//   left :'-100%'
// },600, function(){
//   $(this).append($('figure ul li').eq(0));
//   $(this).css({left:0});
// });
// },3000);

// // tab
// $('.bbs dl dt').click(function(){
//   $('.bbs dl dt').removeClass('on');
//   $(this).addClass('on');
//   $('.bbs dl dd').addClass('hidden');
//   $(this).next().removeClass('hidden');
// });

// // popup
// $('.notice ul li.pop').click(function(){
//   $('.popup_wrap').fadeIn();
// });
// $('.popup a').click(function(){
//   $('.popup_wrap').fadeOut();
// });







