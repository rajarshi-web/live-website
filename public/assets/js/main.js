$(document).ready(function(){
    $('#testi').owlCarousel({
        loop: true,
        margin: 125, 
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 20 
            },
            640: {
                items: 2,
                margin: 50 
            },
            1024: {
                items: 3,
                margin: 75 
            }
        }
    });
});


$(document).ready(function() {
    $('#news').owlCarousel({
        loop: false,
        margin: 100,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2,
                margin: 50
            },
            1024: { 
                items: 3,
                margin: 50 
            },
            1000: {
                items: 3,
                margin: 100
            }
        }
    });
});




$(document).ready(function() {
    $('#logos').owlCarousel({
        loop: true,
        margin: 100,
        nav: false,   
        autoplayTimeout: 2500,
        smartSpeed: 400,
        center: true,
        paginationSpeed: 500,
        dots: false,
        slideTransition: 'linear',
        autoplaySpeed: 6000,
        autoplay: true,
        autoplayHoverPause: false,
        rtl: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});





