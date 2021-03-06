//Instantiates Slider
jQuery(document).ready(function($) {
    $("#full-slider").royalSlider({
        // options go here
		autoHeight: true,
		addActiveClass: true,
		arrowsNav: true,
		arrows: true,
		sliderTouch: true,
		autoPlay: false,
	    keyboardNavEnabled: true,
	    controlsInside: false,
		controlNavigation: 'bullets', //look into
	    imageScaleMode: 'fill',
	    autoScaleSlider: false, 
		autoHeight: false,
	    arrowsNavAutoHide: false,
	    globalCaption: false,
		transitionType:'fade',
		block: { 
			moveEffect: 'none', 
			fadeEffect: true 
		},
		deeplinking: {
		   	enabled: true,
			change: true,
			prefix: 'slide-',
		},

    }); 	
});

//Resizes entire slider to full length of window
jQuery(document).ready(function() {
	function rsSliderHeight(){
		var newHeight = $("html").height() - $("header").height();
		$("#full-slider").height(newHeight);
		$(".rsOverflow").height(newHeight);
		
	}
	
	rsSliderHeight();

	$(window).resize(function(){
		rsSliderHeight();
		rsFontSize();
		rsContent();
	});
});