"use strict";
const inputUa = document.querySelector("#ua"),
	inputUsd = document.querySelector("#usd");

inputUa.addEventListener("input", () => {
	const request = new XMLHttpRequest();

	request.open("GET", "current.json");
	request.setRequestHeader("Content-type", "application/json; charset=utf-8");
	request.send();
	request.addEventListener("load", () => {
		if (request.status === 200) {
			console.log(request.response);
			console.log("2");
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputUa.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = "Что-то пошло не так";
		}
	});
});
