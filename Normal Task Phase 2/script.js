$(document).ready(function () {

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle navbar 
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // text animation
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Designer", "Fresher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Designer", "Fresher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});