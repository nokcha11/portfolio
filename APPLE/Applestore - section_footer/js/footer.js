$(function(){
  /* wd는 변수명 */
  let wd = $(window).width();
  /* 변수명 = true는 값이 나타나는것 */
  // const trueItem =true;
  if (wd<=1023) {
    $('.menu-title-plus').click(function(){
      
      /* .menu-title-plus의 (형제)다음 요소이니까 this.next  */
      $(this).next().stop().slideToggle();
      
      /* this의 자식요소 children 
      toggleClass는 addClass기능도 포함으로 변수를 만들면서 toggle된다! */
      $(this).children('.yj-btn').toggleClass('rotate');
      
      /* addClass는 클래스명을 스크립트에서 새롭게 부과 
      Class의 C는 대문자*/
    });
  }
  $(window).resize(function() {
    console.log("resize");
    let wd = $(window).width();
    if(wd<=1023) {
      $('.menu-title-plus').click(function(){
        $(this).next().stop().slideToggle();
        $(this).children('.yj-btn').toggleClass('rotate');

      });
    }
  })
});