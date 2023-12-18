
  // Swiper 초기화 코드
var yjSwiper = new Swiper(".yjSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  /* initialSlide 화면에 보여지는 이미지index번호 */
  initialSlide:1,
  slidesPerView: "auto",  // "auto"로 설정하여 동적으로 슬라이드의 넓이를 조정
  coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: false,
  },
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});


/* script */
// 클래스가 'i_tab', 'i_swiper', 'i_toggle', 'i_slide'인 요소에 'active' 클래스 추가
['i_animate', 'i_swiper', 'i_toggle', 'i_slide', 'i_form'].forEach(function(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('active');
  }
});

// tab button
['animate', 'made_swiper', 'toggle', 'made_slide', 'made_form'].forEach(function(className, index) {
  var tabElement = document.querySelector('.' + className);

  tabElement.addEventListener('click', function() {
    // 이미지 슬라이드
    yjSwiper.slideTo(index);

    console.log('Function called with index:', index, 'and className:', className);

    // 정보 영역 표시
    console.log('Hide information-wrapper divs');
    var informationDivs = document.querySelectorAll('.information-wrapper > div');
    informationDivs.forEach(function(div) {
      div.style.display = 'none';
    });

    informationDivs[index].style.display = 'block';

    // .active 클래스를 갖고 있는 탭을 갱신
    var tabLinks = document.querySelectorAll('div a');
    tabLinks.forEach(function(a) {
      a.classList.remove('active');
    });

    tabElement.classList.add('active');
  });
});






