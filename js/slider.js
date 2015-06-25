(function($) {
	$(function() {

		// slider
		var slider = $('#slider');
		var pagerItem = $('#slider-pager li');
		var active = 'active';

		if ( slider.length ) {
			var prev = false;
			function pager() {
				pagerItem.filter('.' + active).each(function() {
					var el = $(this);
					if (prev) {
						if ( el.is(':first-child') ) {
							el.removeClass(active);
							pagerItem.filter(':last').addClass(active);
						} else el.removeClass(active).prev().addClass(active);
					} else {
						if ( el.is(':last-child') ) {
							el.removeClass(active);
							pagerItem.filter(':first').addClass(active);
						} else el.removeClass(active).next().addClass(active);
					}
				})
			}
			slider.bxSlider({
				//опции плагина
				//mode: 'fade',
				controls: false,
				pager: false,
				auto: true,
				speed: 500,
				autoHover: true,
				useCSS: false,
				pause: 7000,
				onSlidePrev: function() { prev = true;  pager(); },
				onSlideNext: function() { prev = false; pager(); }
				// конец опций
			});
			pagerItem.hover(function() {
				slider.stopAuto();
				var index = pagerItem.index($(this));
				slider.finish().goToSlide(index);
				pagerItem.removeClass(active);
				$(this).addClass(active);
			}).mouseleave(function() {
				slider.startAuto();
			});
			pagerItem.filter(':first').addClass(active);
		}
		// end slider

	})
})(jQuery)

$(document).ready(function(){
   $('#carousel').bxSlider({
	   slideWidth: 10000,
	   minSlides: 4,
	   maxSlides: 4,
	   moveSlides: 1,
	   pager:false
  });
});