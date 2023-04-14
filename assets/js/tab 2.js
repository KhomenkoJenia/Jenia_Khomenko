const installTab = () => {
	const tabs = document.querySelectorAll(".tabs");
	const tabsButton = document.querySelectorAll(".tab-button");
	const tabContent = document.querySelectorAll(".tab-content");

	tabs.forEach((item, index, array) => {
		item.setAttribute("id", "tabs-" + index);
	});

	tabsButton.forEach((itemBtn, index) => {
		const parentTab = itemBtn.closest(".tabs");
		const setName = parentTab.getAttribute("id");
		itemBtn.setAttribute("data-tab", setName + "__tab-content_" + index);
		const itemConent = tabContent[index];
		itemConent.setAttribute("id", setName + "__tab-content_" + index);
	});

	const onTabClick = (event) => {
		const thisTab = event.target.closest(".tabs");
		const thisTabBtn = thisTab.querySelectorAll(".tab-button");
		const thisTabContent = thisTab.querySelectorAll(".tab-content");

		const removeActiveBtn = () =>
			thisTabBtn.forEach((itemBtn) => itemBtn.classList.remove("active"));
		const removeActiveContnet = () =>
			thisTabContent.forEach((itemContent) =>
				itemContent.classList.remove("active")
			);

		removeActiveBtn();
		removeActiveContnet();

		const getTabId = event.target.getAttribute("data-tab");

		const activeButton = document.querySelector(
			'[data-tab="' + getTabId + '"]'
		);
		activeButton.classList.add("active");

		const activeContent = document.getElementById(getTabId);
		activeContent.classList.add("active");
	};

	tabsButton.forEach((btn) => {
		btn.addEventListener("click", onTabClick);
	});
};

document.querySelector(".tabs") ? installTab() : null;

/* modal */
const installModal = () => {
	const body = document.body;
	const callModalbtn = document.querySelectorAll("[data-modal]");
	const modalOverlay = document.querySelectorAll(".modal");
	const modalClose = document.querySelectorAll(".modal-close");

	const overflowHiddenOn = (selector) =>
		selector.classList.add("overflow-hidden");
	const overflowHiddenOff = (selector) =>
		selector.classList.remove("overflow-hidden");
	const displayBlock = (selector) => (selector.style.display = "block");

	const closeModal = () => {
		overflowHiddenOff(body);
		modalOverlay.forEach((modal) => (modal.style.display = "none"));
	};

	window.addEventListener("click", function (event) {
		modalOverlay.forEach((item) => {
			if (event.target == item) {
				closeModal();
			} else {
				false;
			}
		});
	});

	callModalbtn.forEach((togler) => {
		togler.addEventListener("click", (event) => {
			event.preventDefault();

			const getId = togler.getAttribute("data-modal");
			const creatModal = "#" + getId;
			const getModal = document.querySelector(creatModal);

			displayBlock(getModal);
			overflowHiddenOn(body);
		});
	});

	modalClose.forEach((closeBtn) => {
		closeBtn.addEventListener("click", () => {
			closeModal();
		});
	});
};

document.querySelector(".modal") ? installModal() : false;

// accordion
const installAccordion = () => {
	const accordionItemTitle = document.querySelectorAll(
		".accordion-item__title"
	);
	console.log(accordionItemTitle);
	accordionItemTitle.forEach((item) => {
		item.addEventListener("click", () => {
			if (item.closest(".accordion-item").classList.contains("active")) {
				item.closest(".accordion-item").classList.remove("active");
				console.log("1");
			} else {
				item.closest(".accordion-item").classList.add("active");
				console.log("1");
			}
		});
	});
};
document.querySelector(".accordion") ? installAccordion() : null;
