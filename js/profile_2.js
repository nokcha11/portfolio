// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// let w = (ctx.canvas.width = window.innerWidth);
// let h = (ctx.canvas.height = window.innerHeight * 2);
// let resizeId = null;

// ctx.fillStyle = 'white';
// ctx.strokeStyle = '#FFB6C1';
// ctx.lineWidth = 2;
// ctx.fillRect(0, 0, w, h);

// const simplex = new SimplexNoise();
// let nt = 0.001;

// function drawDrip() {
//   nt += 0.008;
//   ctx.beginPath();
//   for (let i = 0; i < w; i++) {
//     const y = simplex.noise3D(i / 200, 1, nt) * 40;
//     ctx.moveTo(i, 0);
//     ctx.lineTo(i, y + (h / 2));
//   }
//   ctx.stroke();
//   ctx.closePath();
// }

// let requestId = null;

// function render() {
//   ctx.fillRect(0, 0, w, h)
//   drawDrip();
//   const id = requestAnimationFrame(render);
//   requestId = id;
// }

// render();

// setTimeout(() => {
//   cancelAnimationFrame(requestId);
// }, 3600);

// window.addEventListener('resize', function resizeHandler() {
//   if (resizeId !== null) {
//     cancelAnimationFrame(resizeId);
//     resizeId = null;
//   }
  
//   resizeId = requestAnimationFrame(() => {
//     w = (ctx.canvas.width = window.innerWidth);
//     h = (ctx.canvas.height = window.innerHeight * 2);
//     ctx.strokeStyle = '#497285';
//     ctx.lineWidth = 2;
//     drawDrip();
//   })
// });

function copyToClipboard(element) {
  const textToCopy = element.innerText;

  // Create a textarea element
  const tempInput = document.createElement('textarea');
  tempInput.value = textToCopy;

  // Append the textarea element to the body
  document.body.appendChild(tempInput);

  // Select the text in the textarea
  tempInput.select();

  // Execute the "copy" command
  document.execCommand('copy');

  // Remove the textarea element from the body
  document.body.removeChild(tempInput);

  // Show an alert
  alert('복사되었습니다: ' + textToCopy);
}

document.addEventListener('DOMContentLoaded', function () {
  // AOS 초기화
  AOS.init({
    duration: 800,
    offset: 500,
    once: true, // Animation only occurs once
    anchorPlacement: 'top-bottom',
  });

  // profileText 요소의 초기 위치 설정
  var profileText = document.getElementById('profileText');
  profileText.style.transform = 'translateY(-' + profileText.clientHeight + 'px)';
});