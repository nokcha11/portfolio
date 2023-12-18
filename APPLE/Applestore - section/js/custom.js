$(document).ready(function () {
  // Swiper 초기화 코드
var yjSwiper = new Swiper(".yjSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  /* initialSlide 화면에 보여지는 이미지index번호 */
  initialSlide:1,
  slidesPerView: "auto",
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

function updateNavigation() {
  // 화면 폭을 확인
  var screenWidth = document.documentElement.clientWidth; // 변경된 부분

  if (screenWidth < 1024) {
    // 화면 폭이 1024px 미만인 경우
    console.log("화면 폭이 1024px 미만입니다. 버튼을 숨깁니다.");

    // 네비게이션을 비활성화
    yjSwiper.navigation.destroy();
  } else {
    // 화면 폭이 1024px 이상인 경우
    console.log("화면 폭이 1024px 이상입니다. 버튼을 표시합니다.");

    // 네비게이션을 활성화
    yjSwiper.navigation.init();
  }
}


  // 초기 상태에서 첫 번째 정보 영역 보이기
  $('.information-wrapper > div').hide();
  $('.Series9, .Ultra2, .Nike').addClass('active');

  ['A-Series9', 'A-Ultra2', 'A-Nike'].forEach(function (className, index) {
    $('.' + className).click(function () {
      // 이미지 슬라이드
      yjSwiper.slideTo(index); // 'mySwiper'에서 'yjSwiper'로 변경

      // 정보 영역 표시
      $('.information-wrapper > div').hide();
      $('.information-wrapper > div').eq(index).show();

      // .active 클래스를 갖고 있는 탭을 갱신
      $('.watch-links a').removeClass('active');
      $('.' + className).addClass('active');
    });
  });

// 화면 크기 변경 시 네비게이션 업데이트
$(window).on('resize', updateNavigation);
// 페이지 로드 시 네비게이션 업데이트
updateNavigation();
});



// $(function () {
//   $('.A-Series9').click(function() {
//     yjSwiper.slideTo(0);
//   })
// })
// $(function () {
//   $('.A-Ultra2').click(function() {
//     yjSwiper.slideTo(1);
//   })
// })
// $(function () {
//   $('.A-Nike').click(function() {
//     yjSwiper.slideTo(2);
//   })
// })



