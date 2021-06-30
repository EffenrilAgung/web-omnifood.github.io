// $(Document).ready(function () {

//     $('js--section-features').waypoint(function (direction) {
//         if (direction == 'down') {
//             $('nav').addClass('stincky')
//         } else {
//             $('nav').removeClass('stincky')
//         }
//     })
// })
/*

$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 });

 e.preventDefault();
});
*/

$(document).ready(function () {

    $("li").click(function () {
        var tujuan = $(this).html()
        var x = $(tujuan).attr('href')
        //ambil element
        var elemenHref = $(x)
        console.log(tujuan)
        $('html, body').animate({ scrollTop: elemenHref.offset().top - 70 }, 800)
    })



    // var scrolltop = $(window).scrollTop()
    // var y = $('nav').offset().top - 100
    // console.log(y)
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 590) {
            $('nav').addClass('stincky')
            $('nav').on('click').top - 590
        } else {
            $('nav').removeClass('stincky')
        }
    })

})



// $(window).on('scroll', function () {
//     var scrolltop = $(window).scrollTop()
//     var y = $('nav').offset().top - 100
//     console.log(y)

//     // if ($(window).scrollTop() > 590) {
//     //     $('nav').addClass('stincky')
//     //     $('nav').on('click').top - 590
//     // } else {
//     //     $('nav').removeClass('stincky')
//     // }
// })

