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

// const main = document.getElementById("main-section");
// console.log(main);
// const mainBeforeElement = getComputedStyle(main, "::before");
// const mainAfterElement = getComputedStyle(main, "::after");

// let panelTitleEng = mainBeforeElement.content;
// let panelTitleJp = mainAfterElement.content;

// console.log(panelTitleEng);
// console.log(panelTitleJp);

// const panelTexts = [
// 	{
// 		eng: "Hello",
// 		jp: "こんにちは",
// 	},
// 	{
// 		eng: "About",
// 		jp: "概要",
// 	},
// 	{
// 		eng: "Projects",
// 		jp: "プロジェクト",
// 	},
// 	{
// 		eng: "Contact",
// 		jp: "お問い合わせ",
// 	},
// ];
