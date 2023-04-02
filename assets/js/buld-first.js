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

const flats = document.querySelectorAll(".flats-build");

flats.forEach((element) => {
	const flatAtr = element.getAttribute("data-status");
	const flatStatus = element.querySelector(".flat-status");
	const flatsStatusBg = element.querySelector(".flat-number-bg");
	if (flatAtr == "sold") {
		flatStatus.innerHTML = "Продано";
		flatsStatusBg.style.fill = "#ff0400d4";
		element.classList.add("sold");
	} else if (flatAtr == "booked") {
		flatsStatusBg.style.fill = "#f3f708";
		flatStatus.innerHTML = "Заброньованно";
		element.classList.add("booked");
	} else if (flatAtr == "action") {
		flatStatus.innerHTML = "Акція";
		flatsStatusBg.style.fill = "#0ce3ff";
		element.setAttribute("data-bs-target", "#exampleModalToggle2");
		element.setAttribute("data-bs-toggle", "modal");
	}
});

const buildRoom = document.querySelectorAll(".room-build");
const roomName = document.querySelector("#room-name");
const roomSquare = document.querySelector("#room-square");

buildRoom.forEach((room) => {
	room.addEventListener("mouseover", () => {
		const square = room.getAttribute("data-name-room");
		const name = room.getAttribute("data-squere");

		roomName.innerHTML = name;
		roomSquare.innerHTML = square;
		console.log("1");
	});
});
