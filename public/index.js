$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.side-bar').addClass("show");
            $('.scroll-up').addClass("show");
        } else {
            $('.side-bar').removeClass("show");
            $('.scroll-up').removeClass("show");

        }
    });

    $('.scroll-up').click(() => {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
    new Typed(".typing1", {
        strings: ["Software Developer", "Web Developer", "MERN Developer", "FARM Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    new Typed(".typing2", {
        strings: ["Software Developer", "Web Developer", "MERN Developer", "FARM Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    $('.projects-content').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
})
