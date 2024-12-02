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
