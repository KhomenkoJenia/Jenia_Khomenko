const url = "https://dog.ceo/api/breeds/image/random";
(picture = document.querySelector("#picture")),
	(pictureSecond = document.querySelector("#picture2")),
	(downloadBtn = document.querySelector("#download-btn")),
	(imgColumn = document.querySelector(".img-column")),
	(imgLayout = document.querySelectorAll(".img-layout")),
	(imgPagination = document.querySelectorAll(".img-column .img-layout"));

const downloadImg = () => {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			picture.setAttribute("src", data.message);
		});
};
downloadImg();

downloadBtn.addEventListener("click", downloadImg);

imgLayout.forEach((item) => {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			pictureSecond.setAttribute("src", data.message);
			const imgSrc = data.message,
				img = document.createElement("img");
			img.setAttribute("src", imgSrc);
			img.setAttribute("class", "img-fluid");
			img.setAttribute("alt", "dog");

			item.append(img);
		});
});

imgPagination[0].classList.add("active");
const removeActive = (active) =>
	active.forEach((element) => element.classList.remove("active"));

imgPagination.forEach((item, index, arr) => {
	item.addEventListener("click", () => {
		removeActive(imgPagination);
		item.classList.add("active");

		const imgItem = item.querySelector("img"),
			imgSrc = imgItem.getAttribute("src");

		picture2.setAttribute("src", imgSrc);
	});
});
