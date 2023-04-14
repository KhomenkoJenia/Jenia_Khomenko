$("document").ready(function () {
    $(".scroll-section").multiscroll({
        // sectionsColor:["#275a95","#174681","#aad5f4", "#81b1e5", "#383d66"],
        sectionsColor: ["#030c0f", "#030c0f", "#030c0f", "#030c0f", "#030c0f"],
        anchors: ["slide-1", "slide-2", "slide-3", "slide-4", "slide-5"],
        paddingTop: "48px",
        paddingBottom: "48px",
        easingcss3: 'ease-in-out',
        navigation: true,
        navigationPosition: "right",
        scrollingSpeed: 900,
        loopTop: true,
        loopBottom: true,
        keyboardScrolling: true,
    });
});


$(".navigation-prev").on("click", function () {
    $(".scroll-section").multiscroll.moveSectionUp()
});

$(".navigation-next").on("click", function () {
    $(".scroll-section").multiscroll.moveSectionDown()
});
 