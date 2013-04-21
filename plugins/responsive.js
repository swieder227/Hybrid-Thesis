// ==================================================
// = Responsive Design - Dynamic Formating of HTML  =
// ==================================================
jQuery(document).ready(function() {

	// =====================
	// = Defined Functions =
	// =====================
	
	//Resize content
	function updateHeight(){
		var newHeight = $("html").height() - $("header").height();
		$("#full-slider").height(newHeight);	
	}
	
	//Resizes fonts
	function updateFontSize(){
		$('.mainText').css('font-size',  ($(window).width()*0.05)+'px');
		$('.subText').css('font-size',   ($(window).width()*0.035)+'px');
		$('.largeText').css('font-size', ($(window).width()*0.06)+'px');
		$('.smallText').css('font-size', ($(window).width()*0.027)+'px');
	}
	
	var slider = $(".royalSlider").data('royalSlider');
	slider.ev.on('rsAfterSlideChange', function(event) {
		//alert("fuckkkk");
	})
	
	
	
	updateHeight();
	updateFontSize();
	



	$(window).resize(function(){
		updateHeight();
		updateFontSize();

	});


	 
});