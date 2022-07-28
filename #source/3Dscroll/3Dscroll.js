// 3D Scroll

// zSpacing - расстояние между слоями
let zSpacing = -800,
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
	