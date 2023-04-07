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
