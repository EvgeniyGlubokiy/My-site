///=====================SLIDER
$(function () {
    $(".header-block_slider").slick({
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 6000,
        arrows: true,
        fade: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 768.98,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,

                },
            },
        ],
    });
});


///===============SCROLL MENU

$(() => {
    $(document).scroll(() => {
        if ($(window).scrollTop() > 50) {
            $(".top-nav").addClass("top-nav__scroll");

        } else {
            $(".top-nav").removeClass("top-nav__scroll");

        }

    });

});
//============== HOVER button (TEST)
// $(document).ready(function () {
//     $('.btn').hover(function () {
//         $('.cost-card').css({ 'background-color': '#000000', 'transition': '0.5s', 'color': '#ffffff' });
//         $('.cost-card__list-item').css({ 'border-color': '#ffffff' });
//     })
//     $('.btn').mouseout(function () {
//         $('.cost-card').css({ 'background-color': '#ffffff', 'transition': '0.5s', 'color': '#000000' });
//         $('.cost-card__list-item').css({ 'border-color': '#000000' });
//     })
// })
//=======================Send Form
$(document).ready(function () {
    $('.form').submit(function () {
        $.ajax({
            type: "POST",
            url: "form.php",
            data: $(this).serialize(),
        }).done(function () {
            $('.js-overlay-thank-you').fadeIn();
            $(this).find('input').val('');
            $('#form').trigger('reset');
        });
        return false;
    });
});
////////ARROW UP
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(".btn-top").fadeIn();
        } else {
            $(".btn-top").fadeOut();
        }
    });
    $(".btn-top").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 900);
    });
});

///SWING url

$(document).ready(function () {
    $(".swing, a").click(function () {
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top + "px",
            },
            {
                duration: 750,
                easing: "linear",
            }
        );
        return false;
    });
});





///по началу блока
// $(document).ready(function () {
//     let headerHeight = $('header').outerHight();
//     $('swing').click(function (e) {
//         let linkHref = $(this).attr('href');
//         $('html,body').animate({
//             scrollTop: $(linkHref).offset().top - headerHeight
//         }, 1000);
//         e.preventDefault();
//     });
// });