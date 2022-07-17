//@prepros-append jq-start.js
//@prepros-append ../3Dscroll/3Dscroll.js
//@prepros-append jq-end.js
$(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}

   
// 3D Scroll

let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

		window.onscroll = function() {

			let top = document.documentElement.scrollTop,
					delta = lastPos - top
		
			lastPos = top
		
			frames.forEach(function(n, i) {
				zVals.push((i * zSpacing) + zSpacing)
				zVals[i] += delta * -5.5
				let frame = frames[i],
						transform = `translateZ(${zVals[i]}px)`,
						// без opacity - убрать запятую перед frame и закомментить следующие две строки, или убрать ( ; opacity: ${opacity} )
						// frame.setAttribute('style', `transform: ${transform}`) 
						opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
				frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
				
			})
		
		}

		window.scrollTo(0, 1)

		// Audio

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}

// Плавающая кнопка 
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
	$('.scrollup').fadeIn();
	} else {
	$('.scrollup').fadeOut();
	}
	});
	 
	$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
	});

// 
});
