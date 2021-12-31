jQuery(document).ready(function () {
    let selectedSection;

    $(".menu-area-inner ul li").on("click", function () {

        selectedSection = $(this).children("a").attr("href").replace("#", "")

        currentActive = $(".menu-area-inner ul li.active").children("a").attr("href").replace("#", "");

        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        // $(".page-container section .container").fadeOut(1);

        if (selectedSection !== currentActive) {

            $(".page-container section").removeClass("active-section");
            $(".page-container").find("#" + selectedSection).addClass("active-section");


        }

        //selectedSection = $(this).attr("href");
        console.log(selectedSection)

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

});
