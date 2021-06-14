// navbar
const navSlide = () => {
    const menu = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav__content');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        menu.classList.toggle('menu-disabled');
    });
}

navSlide();

// features inner__title active
$(document).ready(function () {
    $('.features__inner-title').click(function () {
        $('.features__inner-title').removeClass("active");
        $(this).addClass("active");
    });
});

// features-slider
function initSlick() {
    $('.features__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        draggable: false,
        swipe: false,
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.features__slider').slick('slickGoTo', slideno - 1);
    });
}

initSlick();

// Faq accordion
$(".accordion__title.active").next().slideDown();
$(".accordion__title").on("click", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass("active").next().slideUp();
    } else {
        $(".accordion__title.active").removeClass("active").next(".accordion__body").slideUp();
        $(this).addClass('active').next('.accordion__body').slideDown();
    }
});


// sticky-header
function stickyHeader() {
    var headerHeight = $('.site-header').innerHeight();
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $('.site-header').addClass('sticky-header');
    } else {
        $('.site-header').removeClass('sticky-header');
    }
}

stickyHeader();
$(window).on('resize scroll', stickyHeader);