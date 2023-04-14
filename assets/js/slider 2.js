$(document).ready(function () {
	$(".single-item").slick({
		dots: true,
		infinite: true,
	});
	$(".single-item-two").slick({
		centerMode: true,
		centerPadding: "60px",
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
		],
	});
	/*
  $('.single-item-two').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });*/
	function makeTimer() {
		var endTime = new Date("29 March 2023 0:00:00 GMT+01:00");
		endTime = Date.parse(endTime) / 1000;

		var now = new Date();
		now = Date.parse(now) / 1000;

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - days * 86400) / 3600);
		var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		var seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);

		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}

	setInterval(function () {
		makeTimer();
	}, 1000);
});
