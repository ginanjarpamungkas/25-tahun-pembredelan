$(document).ready(function() {

		var num2 =20; //number of pixels before modifying styles
		var num = 200; //number of pixels before modifying styles
		
		jQuery(window).bind('scroll', function () {
			if ($(window).scrollTop() > num) {
				$('.scrollup').fadeIn('fast');
			} else {
				$('.scrollup').fadeOut('fast');
			}});

		$('.thumbs-slider').on("click",function(){
			  $(window).scrollTop(0);
		});
});
