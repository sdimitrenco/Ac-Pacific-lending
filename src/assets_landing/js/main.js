import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'slick-carousel/slick/slick.min';
import 'lazysizes';
import videojs from 'video.js/dist/video.min';

var player1 = videojs('my-video1');
var player2 = videojs('my-video2');
var player3 = videojs('my-video3');

var playerMob1 = videojs('my-video1-mob');
var playerMob2 = videojs('my-video2-mob');
var playerMob3 = videojs('my-video3-mob');


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

$(document).ready(function(){
    $(".anchor-link").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


let btnFirst = document.querySelector('#btnOne');
let btnSecond = document.querySelector('#btnTwo');
let btnThree = document.querySelector('#btnThree');
let btnFirstMob = document.querySelector('#btnOneMob');
let btnSecondMob = document.querySelector('#btnTwoMob');
let btnThreeMob = document.querySelector('#btnThreeMob');
let btnFlagOne = false;
let btnFlagTwo = false;
let btnFlagThree = false;

function enableModal() {
    if (btnFlagOne === true && btnFlagTwo === true && btnFlagThree === true) {
        setTimeout(function(){
            $('#exampleModal').modal('toggle')
            btnFlagOne = false;
            btnFlagTwo = false;
            btnFlagThree = false;
        },3000)

    }

}

btnFirst.addEventListener('click', function () {
    btnFlagOne = true;
    enableModal();
    $('.carousel-indicators__1').trigger('click');
})

btnSecond.addEventListener('click', function () {
    btnFlagTwo = true;
    enableModal();
    $('.carousel-indicators__2').trigger('click');
})

btnThree.addEventListener('click', function () {
    btnFlagThree = true;
    enableModal();
    $('.carousel-indicators__3').trigger('click');
})

btnFirstMob.addEventListener('click', function () {
    btnFlagOne = true;
    enableModal();
    $('.carousel-indicators__1').trigger('click');
})

btnSecondMob.addEventListener('click', function () {
    btnFlagTwo = true;
    enableModal();
    $('.carousel-indicators__2').trigger('click');
})

btnThreeMob.addEventListener('click', function () {
    btnFlagThree = true;
    enableModal();
    $('.carousel-indicators__3').trigger('click');
})

$('.section-course-selection__block-btn-open').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.tab-container[data-tab="'+ id +'"]');

    $('.section-course-selection__block.active').removeClass('active'); // 1
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
    setTimeout(function(){
        $('.tab-container.testClass').removeClass('testClass'); // 3
    },400)
    $('.tab-container.active').removeClass('active')
});

$(document).ready(function () {
    $('.link').on('click',function (e) {
        let tabItem = $('div.' + e.target.className)[0];
        $('.wrap').children().fadeOut();
        $(tabItem).fadeIn('slow');
    });
});

$('.carousel').carousel('pause')