// function menuMobile() {
//	 $(".menuNavigation").css("overflow", "visible");
//	 $(".menuNavigation:first-child").css("visibility", "visible");
//	 $(".menuNavigation").not(":first-child").hide();
//	 $(".menuNavigation").css("float", "none");
//	 $(".menuNavigation").children().css("backgroundColor", "grey");
//	 $(".menuNavigation:first-child").click(function () {
//		 $(".menuNavigation").not(":first-child").toggle("blind", 1000);
//		 $("*").not(".menuNavigation").click(function () {
//			 $(".menuNavigation").not(":first-child").hide();
//		 });
//	 });
// }


// function checkScreen_home() {

//	 $("#top").css("width", width);
//	 $("#footer").css("width", width);
//	 $("#main").css("height", "40vw");
//	 $("#slogan").css("height", "40vw");
//	 $("#bar").css("height", "40vw");
//	 $("#coffee").css("height", "40vw");
//	 $("#slogan_food").css("height", "40vw");
//	 var marginFood = $("#footer").height();
//	 $("#food").css("marginBottom",marginFood+"px");
//	 $("#coffee").css("backgroundAttachment", "scroll");
//	 $("#bar").css("backgroundAttachment", "scroll");
//	 $("#main").css("backgroundAttachment", "scroll");
//	 $("#main:first-child").css("top", "auto");

// }


// function checkScreen_product() {
//	 leftBarItemsHeight = $("#footer").height() + $("#top").height() + $("#backToTop").height() + $("#menuShop").height();
//	 leftBarItemsHeight = (leftBarItemsHeight - 20) / 2;
//	 $("#offer").css("height", leftBarItemsHeight + "px");
//	 $("#filter").css("height", leftBarItemsHeight + "px");

//	 $(".menu").children().css("flex", " 1 100%");
//	 $("#menuShop").css("width", "100%");
//	 $(".menuShopFolder").css("width", "15%");
//	 $(".menuShopFolder").css("float", "left");
//	 $(".menuShopFolder").css("fontSize", "2vw");
//	 $(".menuShopFolder").children().css("backgroundColor", "grey");
//	 $(".menuShopFolder").css("color", "white");
//	 var heightMenuShopFolder = $("#menuShop").children().css("height");
//	 $(".menuShopFolder").children().css("height", heightMenuShopFolder);
//	 $(".menuShopFolder").children().css("borderBottomLeftRadius", "5px");
//	 $(".menuShopFolder").children().addClass("aMobile");
//	 $("#rightBar").css("marginLeft", "15%");
//	 $("#mainDiv").css("marginLeft", "15%");
//	 $("#offer").css("width", "420%");
//	 $("#filter").css("width", "420%");
//	 var marginHideLeftBar = ($("#leftBar").width()) / 2;
//	 marginHideLeftBar = $("#offer").width() - marginHideLeftBar;
//	 marginHideLeftBar = "-" + marginHideLeftBar + "px";
//	 marginShowLeftBar = $("#left").width() + "px";
//	 $("#offer").css("marginLeft", marginHideLeftBar);
//	 $("#filter").css("marginLeft", marginHideLeftBar);
//	 var marginFood = $("#footer").height();
//	 $("#menu_Sandwich").css("marginBottom",marginFood+"px");


//	 $("#hideShowOffer").click(function () {
//		 $("#offer").animate({
//			 marginLeft: marginShowLeftBar
//		 });
//		 $("#hideOffer").fadeIn();
//	 });

//	 $("#hideOffer").click(function () {
//		 $(this).hide();
//		 $("#offer").animate({
//			 marginLeft: marginHideLeftBar
//		 });
//		 $("#hideOffer").fadeOut();
//	 });


//	 $("#hideShowFilter").click(function () {
//		 $("#filter").animate({
//			 marginLeft: marginShowLeftBar
//		 });
//		 $("#hideFilter").fadeIn();
//		 /* $("*").not("#filter").click(function () {
//			  $("#filter").animate({
//				  marginLeft: marginHideLeftBar
//		  });});*/
//	 });

//	 $("#hideFilter").click(function () {
//		 $(this).hide();
//		 $("#filter").animate({
//			 marginLeft: marginHideLeftBar
//		 });
//		 $("#hideFilter").fadeOut();
//	 });

//	 $("#applyFilter").click(function () {
//		 $(this).hide();
//		 $("#filter").animate({
//			 marginLeft: marginHideLeftBar
//		 });
//		 $("#hideFilter").fadeOut();
//	 });






// }

// function checkScreen_location() {


// }

// function checkScreen_job() {
//	 $("form").css("width", "95%");

// }

// function checkScreen_contact() {
//	 var marginFood = $("#footer").height();
//	 $("#contact_bottom").css("marginBottom",marginFood+"px");

// }

// function checkScreen() {
//	 width = screen.width;
//	 height = screen.height;
//	 backToTopYposition = $("#footer").height() + 5;
//	 $("#backToTop").css("bottom", backToTopYposition + "px");
//	 backToTopXposition = $("#left").width() * 2;
//	 $("#backToTop").css("left", backToTopXposition + "px");

//	 widthMenuFood = $("#mainDiv").width();
//	 $("#rightBar").css("width", widthMenuFood + "px");
//	 var title = document.title;
//	 if (height > width) {

//		 switch (title) {
//			 case "COFFEE - Home page":
//				 menuMobile();
//				 checkScreen_home();
//				 break;
//			 case "COFFEE - Contact us":
//				 menuMobile();
//				 checkScreen_contact();
//				 break;
//			 case "COFFEE - Work with us":
//				 menuMobile();
//				 checkScreen_job();
//				 break;
//			 case "COFFEE - Our shops":
//				 checkScreen_location();
//				 menuMobile();
//				 break;
//			 case "COFFEE - Our menu":
//				 checkScreen_product();
//				 menuMobile();
//				 break;
//		 }
//	 }
   
// }

// // 

// Mobile menu toggle
function menuMobile() {
	$(".menuNavigation").css({
		"overflow": "visible",
		"float": "none"
	});
	$(".menuNavigation:first-child").css("visibility", "visible").click(function () {
		$(".menuNavigation").not(":first-child").toggle("blind", 1000);
	});

	// Close the menu if clicked outside
	$(document).click(function (e) {
		if (!$(e.target).closest('.menuNavigation').length) {
			$(".menuNavigation").not(":first-child").hide();
		}
	});
}

// Adjust layout for the home page
function checkScreen_home() {
	const width = window.innerWidth;
	const height = window.innerHeight;

	$("#top, #footer").css("width", width);
	$("#main, #slogan, #bar, #coffee, #slogan_food").css("height", "40vw");
	const marginFood = $("#footer").height();
	$("#food").css("marginBottom", marginFood + "px");
	$("#coffee, #bar, #main").css("backgroundAttachment", "scroll");
}

// Adjust layout for product page
function checkScreen_product() {
	let leftBarItemsHeight = $("#footer").height() + $("#top").height() + $("#backToTop").height() + $("#menuShop").height();
	leftBarItemsHeight = (leftBarItemsHeight - 20) / 2;

	$("#offer, #filter").css("height", leftBarItemsHeight + "px");
	$(".menu").children().css("flex", "1 100%");
	$("#menuShop").css("width", "100%");

	$(".menuShopFolder").css({
		"width": "15%",
		"float": "left",
		"fontSize": "2vw",
		"color": "white",
		"backgroundColor": "grey"
	}).children().css({
		"backgroundColor": "grey",
		"height": $("#menuShop").children().css("height"),
		"borderBottomLeftRadius": "5px"
	}).addClass("aMobile");

	// Add left and right margins for the offer and filter
	const marginHideLeftBar = "-" + ($("#offer").width() - ($("#leftBar").width() / 2)) + "px";
	const marginShowLeftBar = $("#left").width() + "px";
	$("#offer, #filter").css("marginLeft", marginHideLeftBar);

	// Handle offer visibility toggle
	$("#hideShowOffer").click(function () {
		$("#offer").animate({ marginLeft: marginShowLeftBar });
		$("#hideOffer").fadeIn();
	});

	$("#hideOffer").click(function () {
		$(this).hide();
		$("#offer").animate({ marginLeft: marginHideLeftBar });
	});

	// Handle filter visibility toggle
	$("#hideShowFilter").click(function () {
		$("#filter").animate({ marginLeft: marginShowLeftBar });
		$("#hideFilter").fadeIn();
	});

	$("#hideFilter").click(function () {
		$(this).hide();
		$("#filter").animate({ marginLeft: marginHideLeftBar });
	});

	$("#applyFilter").click(function () {
		$(this).hide();
		$("#filter").animate({ marginLeft: marginHideLeftBar });
		$("#hideFilter").fadeOut();
	});
}

// Adjust layout for contact page
function checkScreen_contact() {
	const marginFood = $("#footer").height();
	$("#contact_bottom").css("marginBottom", marginFood + "px");
}

// Adjust layout for job page
function checkScreen_job() {
	$("form").css("width", "95%");
}

// Handle screen dimensions and layout changes based on screen width
function checkScreen() {
	const width = window.innerWidth;
	const height = window.innerHeight;

	$("#backToTop").css({
		"bottom": $("#footer").height() + 5 + "px",
		"left": $("#left").width() * 2 + "px"
	});

	const widthMenuFood = $("#mainDiv").width();
	$("#rightBar").css("width", widthMenuFood + "px");

	const title = document.title;
	if (height > width) {  // Mobile device
		switch (title) {
			case "COFFEE - Home page":
				menuMobile();
				checkScreen_home();
				break;
			case "COFFEE - Contact us":
				menuMobile();
				checkScreen_contact();
				break;
			case "COFFEE - Work with us":
				menuMobile();
				checkScreen_job();
				break;
			case "COFFEE - Our menu":
				checkScreen_product();
				menuMobile();
				break;
			case "COFFEE - Our shops":
				menuMobile();
				checkScreen_location(); // Not defined in the original script
				break;
		}
	}
}

// Call this function on page load or window resize
$(document).ready(function () {
	checkScreen();

	$(window).resize(function () {
		checkScreen();
	});
});
