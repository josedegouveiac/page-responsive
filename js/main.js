$(window).scroll(function() {
    var scrl = $(window).scrollTop()
    if (scrl < 45) {
        $('.header-1').removeClass('fixedbar')
    } else {
        $('.header-1').addClass('fixedbar')
    }
});

//toogle menu bar



//hacer que se pasen los zapatos como fotos

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}


//TAB-CONTENT 

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, navblink;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    navblink = document.getElementsByClassName("navblink");
    for (i = 0; i < navblink.length; i++) {
        navblink[i].className = navblink[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


//macnific popup
(function($) {
    "use strict";
    $('.anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedbgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        perloader: false,
        midClick: true,
        removedelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
})(jQuery);


//scrool smooth 

$(function() {
    $('a.smooth-scroll').click(function(event) {
        event.preventDefault()
        var section = $(this).attr("href")

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo")
    })
})

//scroll back2top

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2top').fadeIn();
    } else {
        $('#back2top').fadeOut();
    }
});

$(document).ready(function() {
    $("#back2top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});


//animation js with wow


new WOW().init();