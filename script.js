const body = document.getElementById("body-section");
const mobileBtn = document.getElementById("mobile-trigger");
const mobileMenuLi = document.querySelectorAll("#mobile-menu-list > li");

// Add event listener on the mobile btn to toggle class on body tag
mobileBtn.addEventListener("click", (event) => {
	body.classList.toggle("active-menu");
});

// Add event listener on the mobile menu to remove the active-menu class when it's clicked
mobileMenuLi.forEach((menu) => {
	menu.addEventListener("click", () => {
		body.classList.remove("active-menu");
	});
});

// Remove/Add black bg class
window.addEventListener("scroll", () => {
	const aboutPanel = document.getElementById("about-panel");
	const windowHeight = window.innerHeight;
	const aboutPanelTop = aboutPanel.getBoundingClientRect().top;
	const isClassActive = body.classList.contains("black-bg");

	if (windowHeight >= aboutPanelTop + windowHeight * 0.15 && isClassActive) {
		body.classList.remove("black-bg");
	}

	if (windowHeight < aboutPanelTop + windowHeight * 0.15 && !isClassActive) {
		body.classList.add("black-bg");
	}
});