const body = document.getElementById("body-section");
const mobileBtnOpen = document.getElementById("mobile-trigger");
const mobileMenuLi = document.querySelectorAll("#mobile-menu-list > li");
const mobileMenuText = document.getElementById("mobile-menu-btn__text");
let windowSize = window.innerWidth;
let visibleHeight;

// Add event listener on the mobile btn to toggle class on body tag
mobileBtnOpen.addEventListener("click", () => {
	body.classList.toggle("active-menu");

	// Updating the mobile menu text
	if (body.classList.contains("active-menu") && mobileMenuText) {
		mobileMenuText.innerHTML = "CLOSE";
	} else {
		mobileMenuText.innerHTML = "MENU";
	}
});

// Add event listener on the mobile menu to remove the active-menu class when it's clicked
mobileMenuLi.forEach((menu) => {
	menu.addEventListener("click", () => {
		body.classList.remove("active-menu");
	});
});

// Defining the animation variable
visibleHeight = defineVisibleHeight(windowSize); // Determine the visible height on screen load

// For the case the window size is adjusted
window.addEventListener("resize", (e) => {
	windowSize = window.innerWidth;

	visibleHeight = defineVisibleHeight(windowSize);
});

function defineVisibleHeight(windowSize) {
	if (windowSize > 1200) {
		return 100;
	} else if (windowSize > 770) {
		return 80;
	} else if (windowSize > 550) {
		return 50;
	} else {
		return 30;
	}
}

// Remove/Add black bg class + Element animation active class
window.addEventListener("scroll", () => {
	const aboutPanel = document.getElementById("about-panel");
	const projectListPanel = document.getElementById("project-list-panel");
	const windowHeight = window.innerHeight;
	const isClassActive = body.classList.contains("black-bg");

	// For home page
	if (aboutPanel) {
		const aboutPanelTop = aboutPanel.getBoundingClientRect().top;

		if (windowHeight >= aboutPanelTop + windowHeight * 0.15 && isClassActive) {
			body.classList.remove("black-bg");
		}

		if (windowHeight < aboutPanelTop + windowHeight * 0.15 && !isClassActive) {
			body.classList.add("black-bg");
		}
	}

	// For project list page
	if (projectListPanel) {
		const projectListPanelTop = projectListPanel.getBoundingClientRect().top;

		if (windowHeight >= projectListPanelTop + windowHeight * 0.15 && isClassActive) {
			body.classList.remove("black-bg");
		}

		if (windowHeight < projectListPanelTop + windowHeight * 0.15 && !isClassActive) {
			body.classList.add("black-bg");
		}
	}

	// Element animation on scroll
	const allTargetedElements = document.querySelectorAll(".animation-on-scroll");
	allTargetedElements.forEach((element) => {
		let windowHeight = window.innerHeight;
		let elementTop = element.getBoundingClientRect().top;

		if (elementTop < windowHeight - visibleHeight) {
			element.classList.add("active");
		} else {
			element.classList.remove("active");
		}
	});
});
