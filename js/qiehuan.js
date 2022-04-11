//Header Scroll
// const debounce = (fn) => {
// 	let frame;
// 	return (...params) => {
// 	  if (frame) { 
// 		cancelAnimationFrame(frame);
// 	  }
// 	  frame = requestAnimationFrame(() => {
// 		fn(...params);
// 	  });
// 	} 
//   };
//   const storeScroll = () => {
// 	document.documentElement.dataset.scroll = window.scrollY;
//   }
//   document.addEventListener('scroll', debounce(storeScroll), { passive: true });
//   storeScroll();


$('body').on("click", ".menu", function () {
  $(this).parent('.common_nav_main').toggleClass('active');
  $('.nav_box').toggleClass('active');
});
$('body').on("click", '.nav_box .closed', function () {
		$('.nav_box').removeClass('active');
		$("html").css("overflow","auto");
	});

"use strict";
var underlineMenuItems = document.querySelectorAll("ul li");
// underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
    });
});



