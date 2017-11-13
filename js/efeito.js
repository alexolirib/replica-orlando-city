$(document).ready(function(){
				$("#logotipo").on("mouseover", function(){
					$("#banner h1").addClass("realizar");
				}).on("mouseout", function(){
					$("#banner h1").removeClass("realizar");
				});
				$("#input-search").on("focus", function(){
					$("#menu li.search").addClass("ativar");
				}).on("blur", function(){
					$("#menu li.search").removeClass("ativar");
				});
				$(".thumbnails").owlCarousel({
					margin: 10,
					responsive :{
						0: {
							items: 1,
						},
						480: {
							items: 2,
						},
						768: {
							items: 3,
						},
						1000: {
							items: 4,
						},
					}

					/*loop: true,
					margin: 10,
					nav: true,
					navText:["ANTERIOR","PROXIMO"],
					responsive:{
						0 : {
							items: 2
						},
						480:{
							items: 3
						},
						768:{
							items: 4
						},*/
				})
				var owl = $(".thumbnails");
				owl.owlCarousel();
				$('#btn-news-prev').on("click", function(){
					owl.trigger('prev.owl.carousel');
				})
				$('#btn-news-next').on("click", function(){
					owl.trigger('next.owl.carousel');
				})

				$(".page-up").on("click", function(event){
					$("body").animate({
						scrollTop:0
					},1000);

					event.preventDefault();
				})
	$("#btn-bars").on("click", function(){
		$("header").toggleClass("open-menu");
	})
	$("#btn-close, #menu-mobile-mask").on("click", function(){
		$("header").removeClass("open-menu");
	})

	$("#btn-search").on("click", function(){
		$("header").toggleClass("mobile-search");
	})
});
