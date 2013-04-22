//Returns true if document has the ability to display elements fullscreen, or false otherwise.
if(document.fullscreenEnabled == false) {
	$('#btnFullScreen').remove();
}

//Full Screen Mode
var myFullscreenActive = false;
$('#btnFullScreen').mousedown(function() {		
	if(!myFullscreenActive){
		launchFullScreen(document.documentElement);
		myFullscreenActive = true;
	}
	else{
		cancelFullscreen();
		myFullscreenActive = false;
	}
});

// Find the right method, call on correct element
function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

function cancelFullscreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}