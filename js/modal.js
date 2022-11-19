const body = document.getElementById("body-section");
const featuredWorksWrapper = document.getElementById("featured-works-wrapper");
let allWorksWrapper = document.getElementById("all-works-wrapper");
// Project data
import { worksData } from "./data.js";

// Single article HTML
const articleHTML = `<div class="article-link-wrapper">
		<div class="inner-wrapper">
			<article class="work">
				<a class="work__link" href="">
					<div class="work__thumbnail"></div>
					<span class="hover-text">Find Out More</span>
				</a>
			</article>
			<a class="work__live-link" href="">
				<i class="custom-icon work__live-link--link">&#xe800;</i>
				<span class="work__live-link--text"></span>
			</a>
		</div>
	</div>`;

// Mapping project data - 3 featured
const featuredWorks = worksData.filter((each) => each.featured);
if (featuredWorksWrapper) {
	// Ensuring data contains only 3 works
	if (featuredWorks.length > 3) {
		featuredWorks.splice(0, featuredWorks.length - 3);
	} else if (featuredWorks.length < 3) {
		const required = 3 - featuredWorks.length;
		const unfeaturedWorks = worksData.filter((each) => !each.featured);
		const remainingArr = unfeaturedWorks.splice(0, required);
		featuredWorks.push(...remainingArr);
	}

	mapWorks(featuredWorks);
}

// Mapping project data - All
if (allWorksWrapper) {
	let dataLength = worksData.length;
	let fullItemsHTML = "";

	while (dataLength > 0) {
		fullItemsHTML += articleHTML;
		dataLength--;
	}

	allWorksWrapper.innerHTML = fullItemsHTML;

	mapWorks(worksData);
}

// Modal - Adding active class
allWorksWrapper = document.getElementById("all-works-wrapper");
const workLinkList = document.querySelectorAll(".work__link");

if (workLinkList) {
	workLinkList.forEach((workLink) => {
		workLink.addEventListener("click", (event) => {
			event.preventDefault();
			// add active modal class
			body.classList.add("active-modal");

			// Map modal data
			mapModalData(worksData, event);
		});
	});

	// Removing active class
	const modalCloseBtn = document.getElementById("modal-close-btn");
	if (modalCloseBtn) {
		modalCloseBtn.addEventListener("click", () => {
			body.classList.remove("active-modal");
		});
	}
}

if (featuredWorksWrapper) {
	featuredWorksWrapper.forEach((featuredLink) => {
		featuredLink.addEventListener("click", (event) => {
			event.preventDefault();
			// add active modal class
			body.classList.add("active-modal");

			// Map modal data
			mapModalData(featuredWorks, event);
		});
	});
}

// Function - Mapping works with given data
function mapWorks(data) {
	data.forEach((work, index) => {
		const workList = document.getElementsByClassName("work__thumbnail");
		workList[index].style.backgroundImage = `url(../images/${work["featuredImage"]})`;

		const urls = document.getElementsByClassName("work__live-link--text");
		urls[index].innerHTML = `${work.liveLink}`;

		// Adding data id based on the index
		const workLink = document.getElementsByClassName("work__link");
		workLink[index].setAttribute("data-id", `${data[index].id}`);
	});
}

// Function - Mapping modal content with given data
function mapModalData(data, event) {
	const modal = document.querySelector(".modal");
	const title = modal.querySelector(".modal__title");
	const live = modal.querySelector(".modal__links__link--live");
	const githubLink = modal.querySelector(".modal__links__link--github");
	const linkTexts = modal.querySelectorAll(".modal__links__text");
	const featured = modal.querySelector(".modal__featured-img");
	const paraText = modal.querySelector(".modal__para");
	const snapshotsList = modal.querySelectorAll(".modal__snapshots__item");

	const dataId = event.target.getAttribute("data-id");
	const { name, desc, liveLink, repo, featuredImage, snapshots } = data[dataId - 1];

	title.innerHTML = name;
	live.href = liveLink;
	githubLink.href = repo;
	linkTexts[0].innerHTML = liveLink;
	linkTexts[1].innerHTML = repo;
	paraText.innerHTML = desc;
	featured.style.backgroundImage = `url(../images/${featuredImage})`;
	snapshotsList.forEach((snapshot, index) => {
		snapshot.style.backgroundImage = `url(../images/${snapshots[index]})`;
	});
}
