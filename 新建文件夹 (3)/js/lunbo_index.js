// JavaScript Document
$(function(){
 //点击立即预约弹窗
	$('.sure_btn').click(function(){
		$('.masked').css('display','block');
		$('.tc_success_big').css('display','block');
	})
	$('.closed').click(function(){
		$(this).parent().parent().css('display','none');
		$('.masked').css('display','none');
	})
	$('.masked').click(function(){
		$('.tc_success_big').css('display','none');
		$('.masked').css('display','none');
	})
	//点击扭蛋弹出弹窗
	$('.s4_box1').click(function(){
		$('.masked').css('display','block');
		$('.tc_success_small').css('display','block');
	})
	$('.closed').click(function(){
		$(this).parent().parent().css('display','none');
		$('.masked').css('display','none');
	})
	$('.masked').click(function(){
		$('.tc_success_small').css('display','none');
		$('.masked').css('display','none');
	})
//地图宝箱鼠标悬停出现
	$(".box_wrap div").click(function(){
		$(this).addClass("now").siblings().removeClass("now");
		$(".box_tip div").eq($(this).index()).show().siblings(".box_tip div").hide();
	});	

	$(".closed_tip").click(function(){
		$(this).parent('.tip_img').hide();
	});	
// 点击视频弹出弹窗
$(".video1").colorbox({iframe:true, width:"600px", height:"460px"});				
// 导航位置连接到对应屏幕
	$('.slideto_nd').click(function(){
		jQuery('html,body').animate({scrollTop:$('#pro5').offset().top}, 1000);
	});
	$('.slideto_gift2,.slideto_gift,.slideto_gift3,#five').click(function(){
		jQuery('html,body').animate({scrollTop:$('#pro7').offset().top}, 1000);
	}); 
 // 返回顶部
	$("#gotop").click(function(){
			jQuery("html,body").animate({scrollTop:0},1000);
	});	
	$(window).scroll(function() {
			if ( $(this).scrollTop() > 300){
				$('#gotop').fadeIn("fast");
			} else {
				$('#gotop').stop().fadeOut("fast");
			}
	});
		/*轮播*/

		var swiper = new Swiper('#certify .swiper-container', {
			effect: 'coverflow',
			grabCursor: true, spaceBetween:-50,
			centeredSlides: true,
			slidesPerView: 'auto',
			loop : true,
			initialSlide :1,
			resizeObserver: true,
			// navigation: {
			// 	nextEl: '#certify .swiper-button-next',
			// 	prevEl: '#certify  .swiper-button-prev',
			// },
			on:{
				resize: function(){
					setTimeout(() => {
						swiper.update()
						  }, 200)   //延时器很重要，不加可能会出错
				  }, 
			},
			pagination: {
				el: '#certify .swiper-pagination',
				clickable :true,
			},
		});
	// certifySwiper = new Swiper('#certify .swiper-container', {
	// 	watchSlidesProgress: true,
	// 	effect: 'coverflow',
	// 	slidesPerView: 'auto',  spaceBetween:-50,
	// 	centeredSlides: true,
	// 	loop: true,
	// 	loopedSlides: 3,
	// 	autoplay: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable :true,
	// 	},
	// 	on: {
	// 		progress: function(progress) {
	// 			for (i = 0; i < this.slides.length; i++) {
	// 				var slide = this.slides.eq(i);
	// 				var slideProgress = this.slides[i].progress;
	// 				modify = 1;
	// 				if (Math.abs(slideProgress) > 1) {
	// 					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
	// 				}
	// 				translate = slideProgress * modify * 400 + 'px';
	// 				scale = 1 - Math.abs(slideProgress) / 3;
	// 				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
	// 				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
	// 				slide.css('zIndex', zIndex);
	// 				slide.css('opacity', 1);
	// 				if (Math.abs(slideProgress) > 3) {
	// 					slide.css('opacity', 0);
	// 				}
	// 			}
	// 		},
	// 		setTransition: function(transition) {
	// 			for (var i = 0; i < this.slides.length; i++) {
	// 				var slide = this.slides.eq(i)
	// 				slide.transition(transition);
	// 			}

	// 		}
	// 	}

	// })
})



// $(window).resize( function (){
// 	//alert( "窗体大小改变了！" );
// 	location.reload()
// 	//这里你可以写你的刷新代码！
// });
