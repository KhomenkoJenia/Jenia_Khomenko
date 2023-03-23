const buildTower = document.querySelectorAll(".build-item");
const showFlats = document.querySelector("#flats-number");
const showFloors = document.querySelector("#floors-number");

buildTower.forEach((item) => {
	item.addEventListener("mouseover", () => {
		const flats = item.getAttribute("data-flats");
		const floors = item.getAttribute("data-floors");
		if (flats == 0) {
			item.classList.add("build-red");
			item.setAttribute("data-flats", "Продані");
			showFlats.innerText = flats;
			showFloors.innerText = floors;
		}

		showFlats.innerText = flats;
		showFloors.innerText = floors;
	});
});
