// $(document).ready(function () {
//	 var height = $("#offer").height();
//	 $("#offerPng").css("height",height+"px");
   

//	 function filteringProducts() {
//		 $(".foodItem").show();


//		 if ($('#veganCheck').is(":checked")) {
//			 $('.foodItem:not(".vegan")').hide();

//		 }
//		 if ($('#vegetarianCheck').is(":checked")) {
//			 $('.foodItem:not(".vegetarian")').hide();

//		 }
//		 if ($('#dairyCheck').is(":checked")) {
//			 $('.foodItem:not(".dairy")').hide();

//		 }
//		 if ($('#glutenCheck').is(":checked")) {
//			 $('.foodItem:not(".gluten")').hide();
//		 }
//	 }

//	 $('#applyFilter').click(function () {
//		 filteringProducts();
//	 });

//	 $('#toTop').click(function () {
//		 $("html, body").animate({ scrollTop: 0 }, 800);
//	 });

//	 var heightDocument = $("#rightBar").css("height");/*function that show the offer based on date*/
//	 $("#leftBar").css("height", heightDocument);
//	 var day = new Date().getDay();
//	 day=4;//test to be removed
//	 switch (day) {
//		 case 0:
//			 $('#offer').hide();
//			 $('#filter').css('background', '#80ffdf');
			
//			 break;
//		 case 1:
//			 $('#offer').css('background', 'url(../img/offer/burger.png),#97e797');
//			 $('#offer').css('backgroundSize','contain');
//			 $('#offer').css('backgroundRepeat','no-repeat');
//			 $('#filter').css('background', '#97e797');
//			 $('#dailyOffer').text("Half price burger");
//			 break;
//		 case 2:
//			 $('#offer').css('background', 'url(../img/offer/coffee.png),#ffcc80');
//			 $('#offer').css('backgroundSize','contain');
//			 $('#offer').css('backgroundRepeat','no-repeat');
//			 $('#filter').css('background', '#ffcc80');
//			 $('#dailyOffer').text("Free iced coffee");
//			 break;
//		 case 3:
//			 $('#offer').css('background', 'url(../img/offer/breakfast.png),#ff80bf');
//			 $('#offer').css('backgroundSize','contain');
//			 $('#offer').css('backgroundRepeat','no-repeat');
//			 $('#filter').css('background', '#ff80bf');
//			 $('#dailyOffer').text("2x1 on breakfast");
//			 break;
//		 case 4:
//			 $('#offer').css('background', 'url(../img/offer/tea.png),#ff8080');
//			 $('#offer').css('backgroundSize','contain');
//			 $('#offer').css('backgroundRepeat','no-repeat');
//			 $('#filter').css('background', '#ff8080');
//			 $('#dailyOffer').text("Free tea");
//			 break;
//		 case 5:
//			 $('#offer').css('background', 'url(../img/offer/sandwich.png),#80ccff');
//			 $('#offer').css('backgroundSize','contain');
//			 $('#offer').css('backgroundRepeat','no-repeat');
//			 $('#filter').css('background', '#80ccff');
//			 $('#dailyOffer').text("Half price sandwich");
//			 break;
//		 case 6:
//			 $('#offer').hide();
//			 $('#filter').css('background', '#ffcc80');
//			 break;
//	 }


//	 $(window).scroll(function () {/* function that show the #back to top button */
//		 scrollTopCheck = $(window).scrollTop();
//		 if (scrollTopCheck > 250) {
//			 $("#backToTop").css("opacity", "1");
//			 $("#filter").css("opacity", "1");
//		 }
//		 else {
//			 $("#backToTop").css("opacity", "0");
//			 $("#filter").css("opacity", "0");
//		 }
//	 });
//	 $("#backToTop").click(function () {
//		 $('html').animate({
//			 scrollTop: 0
//		 }, 800);
//		 return false;
//	 });

//	$("#offerPng").css("height","100%");
// });

$(document).ready(function () {
	var height = $("#offer").height();
	$("#offerPng").css("height", height + "px");

	function filteringProducts() {
		$(".foodItem").show();

		if ($('#veganCheck').is(":checked")) {
			$('.foodItem').not(".vegan").hide();
		}
		if ($('#vegetarianCheck').is(":checked")) {
			$('.foodItem').not(".vegetarian").hide();
		}
		if ($('#dairyCheck').is(":checked")) {
			$('.foodItem').not(".dairy").hide();
		}
		if ($('#glutenCheck').is(":checked")) {
			$('.foodItem').not(".gluten").hide();
		}
	}

	$('#applyFilter').click(function () {
		filteringProducts();
	});

	$('#toTop').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
	});

	var heightDocument = $("#rightBar").css("height");
	$("#leftBar").css("height", heightDocument);
	
	var day = new Date().getDay();
	// day=4; // test to be removed
	const offers = {
		0: { bg: '#80ffdf', offerText: 'No offer today' },
		1: { bg: 'url(../img/offer/burger.png),#97e797', offerText: 'Half price burger' },
		2: { bg: 'url(../img/offer/coffee.png),#ffcc80', offerText: 'Free iced coffee' },
		3: { bg: 'url(../img/offer/breakfast.png),#ff80bf', offerText: '2x1 on breakfast' },
		4: { bg: 'url(../img/offer/tea.png),#ff8080', offerText: 'Free tea' },
		5: { bg: 'url(../img/offer/sandwich.png),#80ccff', offerText: 'Half price sandwich' },
		6: { bg: '#ffcc80', offerText: 'No offer today' }
	};

	if (day !== 0 && day !== 6) {
		const offer = offers[day];
		$('#offer').css('background', offer.bg);
		$('#offer').css('backgroundSize', 'contain');
		$('#offer').css('backgroundRepeat', 'no-repeat');
		$('#filter').css('background', offer.bg);
		$('#dailyOffer').text(offer.offerText);
	} else {
		$('#offer').hide();
		$('#filter').css('background', offers[day].bg);
	}

	$(window).scroll(function () {
		const scrollTopCheck = $(window).scrollTop();
		if (scrollTopCheck > 250) {
			$("#backToTop").css("opacity", "1");
			$("#filter").css("opacity", "1");
		} else {
			$("#backToTop").css("opacity", "0");
			$("#filter").css("opacity", "0");
		}
	});

	$("#backToTop").click(function () {
		$('html').animate({ scrollTop: 0 }, 800);
		return false;
	});

	$("#offerPng").css("height", "100%");
});
