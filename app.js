$(function() {
    // Changes background color
    setInterval(updateGradient, 10);
    $(".menu").addClass("active");

    $('.aboutMeLink').click(function() {
        // $('.nameDefault').animate({ 'padding-top': '10%' }, 2000);
        // Scroll page to bottom
        // $("html").css('scrollTop', $(document).height());
        $('.aboutMeCircle').addClass('circleAfterClick')
        $('.wrapper').css('display', 'none');
        $('#portfolioCircle').removeClass('circleAfterClick');
        $('.aboutMeBlurb').slideDown(2000);
        // $(".menu").removeClass("active")
        $(".trigger").click(function() {
            $(".menu").addClass("active");
            setTimeout(function() {
                $(".menu").removeClass("active");
                $('.nameDefault').animate({ 'padding-top': '10%' }, 2000)
            }, 5000)
        });
    });

    // Opens Portfolio
    $('.portfolioLink').click(function() {
        // $('.nameDefault').animate({ 'padding-top': '10%' }, 2000);
        $('.aboutMeBlurb').hide()
        $('#portfolioCircle').addClass('circleAfterClick');
        $('.circleOutline').addClass('rotationEffectOne');
        $('.wrapper').css('display', 'flex');
        $('.aboutMeCircle').removeClass('circleAfterClick');
        // $(".menu").removeClass("active");
        $(".trigger").click(function() {
            $(".menu").addClass("active");
            setTimeout(function() {
                $(".menu").removeClass("active");
                $('.nameDefault').animate({ 'padding-top': '10%' }, 2000)
            }, 5000)
        });
    });

});

var colors = new Array(
    [0, 0, 0], [51, 0, 51], [0, 0, 51], [51, 0, 102], [25, 0, 51], [51, 0, 25]);

var step = 0;
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.001;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('#gradient')
        .css({ background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))" })
        .css({ background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)" });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

    // Not good for mobile devices. Consider triggering only on desktop 
    // $('.pin').hover(function() {
    //         $(this).children('p').css('visibility', 'visible')
    //         $(this).css('border-radius', '0');
    //     },
    //     function() {
    //         $(this).children('p').css('visibility', 'hidden');
    //         $(this).css('border-radius', '2rem')
    //     }
    // );

    // For opening of page - icons shoot out and disappear in 5 secs
    // setTimeout(function() {
    //     $(".menu").removeClass("active");
    // }, 5000);

    // For top contact menu
    // $(".trigger").click(function() {
    //     $(".menu").toggleClass("active");
    //     $('.nameDefault').animate({ 'padding-top': '32%' }, 1000)
    // });
