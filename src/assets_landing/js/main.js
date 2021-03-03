import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'slick-carousel/slick/slick.min';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import 'lazysizes';

$(document).ready(function(){
    $('[data-fancybox="gallery"]').fancybox({});


    $('.sliderFirst').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            }
        ]
    });

    $('.sliderSecond').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        variableWidth: true
    });

    $('.section-other-projects__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    $('.section-our-clients__slider-1').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    centerPadding: '60px',
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.section-our-clients__slider-2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    centerPadding: '60px',
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.section-our-clients__slider-3').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    centerPadding: '60px',
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function(){
    $(".anchor-link").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$('.section-course-selection__block-btn-open').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.tab-container[data-tab="'+ id +'"]');

    $('.section-course-selection__block.active').removeClass('active'); // 1
    $('.section-complex-plus__wrapper.active').removeClass('active'); // 1
    $(this).parent().parent().parent().addClass('active'); // 2

    $('.tab-container.active').removeClass('active'); // 3
    $('.tab-container.testClass').removeClass('testClass'); // 3
    setTimeout(function(){
        content.addClass('active')
    },200)
    content.addClass('testClass'); // 4
});

$('.section-course-selection__block-btn-close').click(function() {
    $('.section-course-selection__block.active').removeClass('active');
    $('.section-complex-plus__wrapper.active').removeClass('active');
    setTimeout(function(){
        $('.tab-container.testClass').removeClass('testClass'); // 3
    },400)
    $('.tab-container.active').removeClass('active')
});

$('.section-course-selection__block-btn-open-2').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.tab-container[data-tab="'+ id +'"]');

    $('.section-course-selection__block.active').removeClass('active'); // 1
    $('.section-complex-plus__wrapper.active').removeClass('active'); // 1
    $(this).parent().parent().parent().parent().parent().addClass('active'); // 2

    $('.tab-container.active').removeClass('active'); // 3
    $('.tab-container.testClass').removeClass('testClass'); // 3
    setTimeout(function(){
        content.addClass('active')
    },200)
    content.addClass('testClass'); // 4
});

$(document).ready(function () {
    $('.link').on('click',function (e) {
        let tabItem = $('div.' + e.target.className)[0];
        $('.wrap').children().fadeOut();
        $(tabItem).fadeIn('slow');
    });
});

$(document).ready(function(){
    $(".modal").on('hidden.bs.modal', function (e) {
        jQuery("iframe").each(function() {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        });
    });
});

$('.carousel').carousel('pause')
