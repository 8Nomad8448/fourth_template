$(document).ready(function(){
    var owl = $("#owl-slider");
    owl.owlCarousel({
        loop: true,
        margin: 27,
        items: 2,
        responsive : {
            0 : {
                items: 1
            },
            991 : {
                items: 2,
            }
        },
        center: false,
        dots: true,
        nav: false,
        touchDrag  : true,
        mouseDrag  : true,
        autoplay:false,
        autoplayTimeout: 10000,
        autoplayHoverPause:true,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    });
    //* Appear form
    $(".view").click(function() {
        $("#not_visible").removeClass("hidden");
    });
    $("#send").click(function() {
        $("#not_visible").addClass("hidden");
    });
    //* scroll function
    function myFunction() {
        let box = document.querySelector('header');
        let tall = box.clientHeight;
        const height = $(window).height();
        const scrollTop = $(window).scrollTop();
        if (scrollTop >= tall) {
            $("#nav").addClass("fix");
            $("#nav").addClass("nav_back");
            $(".intro").addClass ("intro_scroll")
        } else {
            $("#nav").removeClass("nav_back");
            $("#nav").removeClass("fix");
            $(".intro").removeClass ("intro_scroll")
        }
    };
    window.onscroll = function() {myFunction()};
});