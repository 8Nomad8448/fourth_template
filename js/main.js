$(document).ready(function(){
    function screenClass() {
        var count = $("#owl-slider > div").length;
        if($(window).innerWidth() < 850 || count > 3) {
            var owl = $("#owl-slider");
            owl.owlCarousel({
                loop: true,
                margin: 0,
                items: 3,
                responsive : {
                    0 : {
                        items: 1
                    },
                    600 : {
                        items: 2,
                    },
                    850 : {
                        items: 3,
                    }
                },
                center: false,
                dots: true,
                nav: false,
                touchDrag  : true,
                mouseDrag  : true,
                autoplay:true,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                animateIn: "fadeIn",
                animateOut: "fadeOut"
            });
        } if (count == 2){
            $('#owl-slider').removeClass('owl-carousel');
            $('#owl-slider').removeClass('owl-theme');
            $('#owl-slider').addClass('row');
            $('#owl-slider > .item').addClass('col-md-6');
        }if (count == 1){
            $('#owl-slider').removeClass('owl-carousel');
            $('#owl-slider').removeClass('owl-theme');
            $('#owl-slider').addClass('row');
            $('#owl-slider > .item').addClass('col-md-12');
        } else {
            $('#owl-slider').removeClass('owl-carousel');
            $('#owl-slider').removeClass('owl-theme');
            $('#owl-slider').addClass('row');
            $('#owl-slider > .item').addClass('col-md-4');
        }
    }
    screenClass();
    var owl = $("#owl-feedback");
    owl.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        center: true,
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
    var owl = $("#owl-mentors");
    owl.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: false,
        touchDrag  : true,
        mouseDrag  : true,
        autoplay:true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    });
// Validation form functions
    $("#submit").click(function() {
        let name= $(".name").val();
        let suname= $(".suname").val();
        let telephone= $(".phone").val();
        let interrest = $(".interested_in").val();
        let email= $(".email").val();
        let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
        let regMail = /^\S+@\S+\.\S+$/;
        let regPhone = /^[0-9\-\+]{9,15}$/;
        let errorname = [];
        let errorsuname = [];
        let errorphone = [];
        let errorinterest = [];
        let errormail = [];
        if (name==null || name=="" || name.search(nameReg)){
            $(".name").addClass("novalid_input");
            $(".close").removeClass("sended");
            errorname[0] = 1;
        } else {
            $(".name").removeClass("novalid_input");
            errorname[0] = 0;
        }
        if(telephone.search(regPhone)){
            $(".phone").addClass("novalid_input");
            $(".close").removeClass("sended");
            errorphone[0] = 1;
        } else {
            $(".phone").removeClass("novalid_input");
            errorphone[0] = 0;
        }
        if(suname==null || suname=="" || suname.search(nameReg)){
            $(".suname").addClass("novalid_input");
            $(".suname").removeClass("sended");
            errorsuname[0] = 1;
        } else {
            $(".suname").removeClass("novalid_input");
            errorsuname[0] = 0;
        }
        if (email.search(regMail)) {
            $(".email").addClass("novalid_input");
            $(".close").removeClass("sended");
            errormail[0] = 1;
        } else {
            $(".inpMail").removeClass("novalid_input");
            errormail[0] = 0;
        }if(interrest==null || interrest=="" || interrest.search(nameReg)){
            $(".interested_in").addClass("novalid_input");
            $(".interrest").removeClass("sended");
            errorinterest[0] = 1;
        } else {
            $(".interested_in").removeClass("novalid_input");
            errorinterest[0] = 0;
        }
        if (errorname[0] != 1 && errorphone[0] != 1 && errormail[0] != 1) {
            $(".email").removeClass("novalid_input");
            $(".name").removeClass("novalid_input");
            $(".phone").removeClass("novalid_input");
            $(".close").addClass("sended");
            return true;
        }
    });
});