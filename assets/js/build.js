const buildItem = document.querySelectorAll(".build-item");
const buildShow = document.querySelector("#build-data");
const floorsShow = document.querySelector("#floors-data");
const flatsShow = document.querySelector("#flats-data");
const buildSale = document.querySelectorAll("[data-flats-number='0']");

buildItem.forEach((item) => {
	buildSale.forEach((element) => {
		element.classList.add("build-red");
		element.setAttribute("data-flats-number", "Дом Продан");

		element.closest("a").addEventListener("click", (e) => {
			e.preventDefault();
			console.log("click not");
		});
	});

	item.addEventListener("mouseover", () => {
		const dataBuildNumber = item.getAttribute("data-build-number");
		const dataFloorsNumber = item.getAttribute("data-floors-number");
		const dataFlatsNumber = item.getAttribute("data-flats-number");

		buildShow.innerText = dataBuildNumber;
		floorsShow.innerText = dataFloorsNumber;
		flatsShow.innerText = dataFlatsNumber;
	});
});
