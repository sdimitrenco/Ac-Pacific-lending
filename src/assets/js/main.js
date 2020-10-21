import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'slick-carousel/slick/slick.min';


$('.sliderFirst').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
});

$('.sliderSecond').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});

$('.section-our-clients__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '0px',
});

// $(document).ready(function(){
//     $(".anchor-link").on("click", function (event) {
//         event.preventDefault();
//         let id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });

$(function () {
    $('ul.tabs').delegate('li:not(.current)', 'click', function () {
        act(this);
    })
    $('.prev').click(function(){
        var i=$('.current').index();
        var obj=$('.tabs > li');
        i=(i<1)? obj.length-1: i-1;
        act(obj.get(i));
    });
    $('.next').click(function(){
        var i=$('.current').index();
        var obj=$('.tabs > li');
        i=++i%obj.length;
        act(obj.get(i));
    });
    function act(Obj){
        $(Obj).addClass('current').siblings().removeClass('current')
            .parents('div.section').find('div.box').eq($(Obj).index())
            .show().siblings('div.box').hide();
    }
})