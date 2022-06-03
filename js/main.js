//@prepros-append jq-start.js
//@prepros-append vendors.js
//@prepros-append custom.js
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
