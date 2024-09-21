var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
});

jQuery(".responsive-menu-body ul li").has("ul").append("<span class='responsive-menu-span'><i class='bi bi-caret-down-fill'></i></span>");

jQuery(".responsive-menu-body ul li .responsive-menu-span").click(function () {
	jQuery(this).prev("ul").slideToggle();
	jQuery(this).find("i").toggleClass("bi-caret-down-fill");
	jQuery(this).find("i").toggleClass("bi-caret-up-fill");
});

jQuery(".faq-item-title , .Shop-filter-title").click(function(){
	jQuery(this).next("div").slideToggle();
});

jQuery(".faq-item-title , .Shop-filter-title").first().next("div").slideDown();