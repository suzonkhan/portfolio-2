jQuery(document).ready(function () {
    let selectedSection;
    $(".menu-area-inner ul li").on("click", function (e) {
        e.preventDefault();
        selectedSection = $(this).children("a").attr("href").replace("#", "")
        currentActive = $(".menu-area-inner ul li.active").children("a").attr("href").replace("#", "");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        if (selectedSection !== currentActive) {
            $(".page-container section").removeClass("active-section");
            $(".page-container").find("#" + selectedSection).addClass("active-section");
            $("body.mobile-view-activated .menu-area").slideUp();
            $("body.mobile-view-activated  .copyright").slideUp();
        }

        if (selectedSection === "portfolio") {
            setTimeout(function () {
                $('.portfolio-wrapper').masonry({
                    itemSelector: '.portfolio-item',
                    gutter: 30,
                    percentPosition: true
                })
            }, 1000)
        }

    })
    $('.portfolio-wrapper').masonry({
        itemSelector: '.portfolio-item',
        gutter: 30,
        percentPosition: true
    })
    $(".mobile-menu-trigger button").on("click", function () {
        $(".menu-area").slideToggle();
        $(".copyright").slideToggle();
        $(this).toggleClass("mobile-menu-activated")
    })
    let browserWidth = $(window).innerWidth();

    if (browserWidth < 1000) {
        $("body").addClass("mobile-view-activated");
    } else {
        $("body").removeClass("mobile-view-activated");
    }

    $(window).resize(function () {
        browserWidth = $(window).innerWidth();
        if (browserWidth < 1000) {
            $("body").addClass("mobile-view-activated");
        } else {
            $("body").removeClass("mobile-view-activated");
            $("body .menu-area").slideDown();
            $("body  .copyright").slideDown();
        }
        // console.log(browserWidth)
    })

});
