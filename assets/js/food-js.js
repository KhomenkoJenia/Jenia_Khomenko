//Табі

//для себя
// позволяет запускать JavaScript-код только после того, как структура DOM будет готова к работе, т.е. после загрузки и разбора HTML-документа
window.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll(".tabheader__item");
	const tabsContent = document.querySelectorAll(".tabcontent");
	const tabsParent = document.querySelector(".tabheader__items");

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add("hide");
			item.classList.remove("show", "fade");
		});

		tabs.forEach((item) => {
			item.classList.remove("tabheader__item_active");
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add("show", "fade");
		tabsContent[i].classList.remove("hide");
		tabs[i].classList.add("tabheader__item_active");
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener("click", (event) => {
		const target = event.target;

		if (target && target.classList.contains("tabheader__item")) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//Таймер

	const deadline = "2023-9-1";

	function getTimeRemaing(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((t / 1000 / 60) % 60);
		const seconds = Math.floor((t / 1000) % 60);
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector("#hours"),
			minutes = timer.querySelector("#minutes"),
			seconds = timer.querySelector("#seconds"),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaing(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock(".timer", deadline);

	//модальное вікно
	const modalTrigger = document.querySelectorAll("[data-modal]"),
		modal = document.querySelector(".modal"),
		modalCloseBtn = document.querySelector("[data-close]");

	function openModal() {
		modal.classList.add("show");
		modal.classList.remove("hide");
		document.body.style.overflow = "hidden";
		clearInterval(modalTimeId);
	}

	modalTrigger.forEach((btn) => {
		btn.addEventListener("click", openModal);
	});

	function closeMoadl() {
		modal.classList.add("hide");
		modal.classList.remove("show");
		document.body.style.overflow = "";
	}
	modalCloseBtn.addEventListener("click", closeMoadl);
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			closeMoadl();
		}
	});
	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && modal.classList.contains("show")) {
			closeMoadl();
		}
	});
	const modalTimeId = setTimeout(openModal, 5000);

	function showModalBySrcroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			openModal();
			window.removeEventListener("scroll", showModalBySrcroll);
		}
	}

	window.addEventListener("scroll", showModalBySrcroll);

	//Карточнки динамически

	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
		}

		render() {
			const element = document.createElement("div");
			element.innerHTML = `
    <div class="menu__item">
    <img src=${this.src} alt=${this.alt} />
    <h3 class="menu__item-subtitle">${this.title}</h3>
    <div class="menu__item-descr">${this.descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
    <div class="menu__item-cost">Ціна:</div>
    <div class="menu__item-total"><span>${
			this.price * this.transfer
		}</span> грн/день</div>
    </div>
  </div>
  `;
			this.parent.append(element);
		}
	}
	new MenuCard(
		"assets/img/vegy.jpg",
		"vegy",
		'Меню "Фітнес"',
		'Меню "Фітнес" - це новий підхід до приготування страв: більше свіжих овочів і фруктів. Продукт активних і здорових людей. Цеабсолютно новий продукт з оптимальною ціною та високою якістю!',
		9,
		".menu .container"
	).render();
	new MenuCard(
		"assets/img/elite.jpg",
		"elite",
		"Меню “Преміум”",
		'У меню "Преміум" ми використовуємо не тільки красивий дизайн упаковки, а й якісне виконання страв. Червона риба, морепродукти,фрукти - ресторанне меню без походу в ресторан!',
		18,
		".menu .container"
	).render();
	new MenuCard(
		"assets/img/post.jpg",
		"vegy",
		'Меню "Пісне"',
		'Меню "Пісне" - це ретельний підбір інгредієнтів: повна відсутність продуктів тваринного походження, молоко з мигдалю, вівса, кокоса або гречки, правильна кількість білків за рахунок тофу та імпортних вегетаріанських стейків.',
		15,
		".menu .container"
	).render();
});
