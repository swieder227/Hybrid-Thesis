jQuery(document).ready(function($) {
	alert($(window).width());
//	alert($(#logo).height());
});

//Dynamic size of fonts/content 
jQuery(document).ready(function() {

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
	
	updateHeight();
	updateFontSize();

	$(window).resize(function(){
		updateHeight();
		updateFontSize();
	});


		
		/*
		if( $(window).width() < 1000 ){
			$('h1').css('font-size', 		 ($(window).width()*0.06)+'px');
		}
		else{
			$('h1').css('font-size', '54px');	
		}
		*/
	}
	 
});