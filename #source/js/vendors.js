
   $('.bike-slider').slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
   });

   $('.slider__items').slick({
      arrows: false,
      dots: true,
      fade: false,
      autoplay: true,
      autoplaySpeed: 2000,
   });

   $(".menu, .bike__column, .bike__link").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});