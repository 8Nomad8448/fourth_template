$(document).ready(function(){
    var owl = $("#owl-slider");
  owl.owlCarousel({
  	loop: true,
  	margin: 0,
  	items: 1,
  	center: true,
  	dots: false,
  	nav: true,
    touchDrag  : false,
    mouseDrag  : false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });

    var modal = document.getElementById("myModal");

// Get the button that opens the modal
    var btn = document.getElementById("toggleModal");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
        $("body").addClass("modal-open");
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        $("body").removeClass("modal-open");
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $("body").removeClass("modal-open");
        }
    }

// Validation form functions
    $("#submit").click(function() {
        let name= $(".name").val();
        let telephone= $(".phone").val();
        let email= $(".email").val();
        let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
        let regMail = /^\S+@\S+\.\S+$/;
        let regPhone = /^[0-9\-\+]{9,15}$/;
        let errorname = [];
        let errorphone = [];
        let errormail = [];
        if (name==null || name=="" || name.search(nameReg)){
            $(".name").attr("placeholder", "Поле обязательно до заполнения");
            $(".name").addClass("novalid_input");
            $(".close").removeClass("sended");
            errorname[0] = 1;
        } else {
            $(".name").removeClass("novalid_input");
            errorname[0] = 0;
        }
        if(telephone.search(regPhone)){

            $(".phone").attr("placeholder", "Поле обязательно до заполнения");
            $(".phone").addClass("novalid_input");
            $(".close").removeClass("sended");
            errorphone[0] = 1;
        } else {
            $(".phone").removeClass("novalid_input");
            errorphone[0] = 0;
        }
        if (email.search(regMail)) {
            $(".email").attr("placeholder", "Поле обязательно до заполнения");
            $(".email").addClass("novalid_input");
            $(".close").removeClass("sended");
            errormail[0] = 1;
        } else {
            $(".inpMail").removeClass("novalid_input");
            errormail[0] = 0;
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