$(document).ready(function () {

    $("li").click(function () {
        var tujuan = $(this).html()
        var x = $(tujuan).attr('href')
        //ambil element
        var elemenHref = $(x)
        console.log(tujuan)
        $('html, body').animate({ scrollTop: elemenHref.offset().top - 70 }, 1000)
    })

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 590) {
            $('nav').addClass('stincky')
            $('nav').on('click').top - 590
        } else {
            $('nav').removeClass('stincky')
        }
    })

    $(".btn-full").on('click', function () {
        $('html, body').animate({
            scrollTop: $('#start-eating-today').offset().top
        }, 1000)
    })

    $('.btn-ghost').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#get-food-fast').offset().top - 70
        }, 1000)
    })

    // Navigation Scroll
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    // Animation On Scroll


})
