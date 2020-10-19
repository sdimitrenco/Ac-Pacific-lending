import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'slick-carousel/slick/slick.min';


// $('.slider-container').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: false,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });

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