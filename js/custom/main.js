// window.addEventListener("load", function () {
//     document.querySelector(".preloader").classList.add("finish-load");
// }),
    $(window).on("scroll", function () {
        $(this).scrollTop() > 1e3 ? $(".back2top-btn").show() : $(".back2top-btn").hide();
    }),
    $(window).on("scroll", function () {
        $(this).scrollTop() > 80 ? $(".navbar-part").addClass("navbar-fixed") : $(".navbar-part").removeClass("navbar-fixed");
    }),
    $(".navbar-toggle").on("click", function () {
        $(".navbar-overlay").addClass("active"),
            $(".cencel").on("click", function () {
                $(".navbar-overlay").removeClass("active");
            });
    }),
    $(function () {
        $(".navbar-dropdown a").click(function () {
            $(this).next().toggle(), $(".dropdown-list:visible").length > 1 && ($(".dropdown-list:visible").hide(), $(this).next().show());
        });
    });
