
$('.card').tilt({
    maxTilt: 6
});

$('.card2').tilt({
    maxTilt: 6
});

$('.card3').tilt({
    maxTilt: 6
});



$(window).scroll(function() {

    if ($(this).scrollTop()>0)
    {
        $('.scroll-btn').fadeOut();
    }
    else
    {
        $('.scroll-btn').fadeIn();
    }
});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
        $('.cards').css({opacity: 0, display: 'flex'}).animate({
            opacity: 1
        },2000);
    }
});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
        $('#projects').addClass( "animated fadeInDown" );
    }
});
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 420) {
        $('#heading_paragraph').addClass( "animated fadeInDown" );
    }
});