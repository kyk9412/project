const mainSwiper = new Swiper(".main-slide", {
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 1000,
	direction: "horizontal",
	loop: true,
});

let horizontalBar = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("samsung_title_box a");

horizontalMenus.forEach((menu) => {
	menu.addEventListener("click", (e) => {
		horizontalIndicator(e.currentTarget);
	});
});
function horizontalIndicator(element) {
	horizontalBar.style.left = element.offsetLeft + "px";
	horizontalBar.style.width = element.offsetWidth + "px";
	horizontalBar.style.top = element.offsetTop + element.offsetHeight + "px";
}

const eventSwiper = new Swiper(".product_recommend_promotion", {
	autoplay: true,
	autoplaySpeed: 500,
	speed: 500,
	direction: "horizontal",
	loop: true,
	slidesPerView: 4,
	pagination: {
		el: ".swiper-pagination",
	},
});
