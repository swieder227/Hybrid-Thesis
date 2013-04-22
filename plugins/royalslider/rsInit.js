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
		controlNavigation: 'none', //look into
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