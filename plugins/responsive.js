// ==================================================
// = Responsive Design - Dynamic Formating of HTML  =
// ==================================================
jQuery(document).ready(function() {

	// =====================
	// = Defined Functions =
	// =====================
	
	//Resize content
	function rsSliderHeight(){
		var newHeight = $("html").height() - $("header").height();
		$("#full-slider").height(newHeight);	
	}
	
	//Resizes fonts
	function rsFontSize(){
		$('.mainText').css('font-size',  ($(window).width()*0.003)+'em');
		$('.subText').css('font-size',   ($(window).width()*0.002)+'em');
		$('.smallText').css('font-size', ($(window).width()*0.002)+'em');
		$('.largeText').css('font-size', ($(window).width()*0.0035)+'em');
	}
	
		// 
		// //Resizes/Reposition Header Content
		// function rsHeader(){
		// 	var headerH = $("header").height();
		// 	
		// 	$('#title').css( 		 'top', (headerH - $('#title').height()) / 2 );
		// 	//$('nav').css(    		 'top', (headerH - $('nav').height()) / 2 );
		// 	//$('#btnFullScreen').css( 'top', (headerH - $('#btnFullScreen').height()) / 2 );
		// 	$('#logo').css( 		 'top', (headerH - $('#logo').height()) / 2 );
		// }
		// 
		// 
	
	var slider = $(".royalSlider").data('royalSlider');
	slider.ev.on('rsAfterSlideChange', function(event) {
		//alert("fuckkkk");
	})
	
	
	
	rsSliderHeight();
	rsFontSize();
	//rsHeader();



	$(window).resize(function(){
		rsSliderHeight();
		rsFontSize();
	//	rsHeader();
	});


	 
});