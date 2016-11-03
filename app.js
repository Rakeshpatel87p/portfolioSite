$(function() {
    // Changes background color
    setInterval(updateGradient, 10);
    $(".menu").addClass("active")
    setTimeout(function(){
        $(".menu").removeClass("active")
    }, 5000);

    // For top contact menu
    $(".trigger").click(function() {
        $(".menu").toggleClass("active");
        $('.nameDefault').animate({ 'padding-top': '17%' }, 1000)
    });

    $('.aboutMeLink').click(function() {
        $(".navigationButtons").children().eq(2).removeClass('stopLightColorsThree')
        $(".navigationButtons").show().children().eq(0).addClass('stopLightColorsOne');
        $('.nameDefault').animate({ 'padding-top': '5%' }, 1000);
        $("[id='pageNavigation']").hide();
        $(".circletest").hide(2000);
        $("[class='aboutMeClick']").fadeIn(100);
        $('.aboutMePartI').slideDown(2000).siblings().hide();
        $('#whoAmI')
            .parent()
            .addClass('circleAfterClick')
        $('.wrapper').css('display', 'none');
        $('.aboutMeBlurb').children().children().fadeIn(500);
        setTimeout(aboutMeCircleAnimation, 10000);

        // Timeouts for changing text of circle
        setTimeout(function() {
            $('#whoAmI').text('Tech Skills').fadeIn();
            $(".navigationButtons").children().eq(0).removeClass('stopLightColorsOne');
            $(".navigationButtons").children().eq(1).addClass('stopLightColorsTwo')
        }, 11000);
        setTimeout(function() {
            $(".navigationButtons").children().eq(1).removeClass('stopLightColorsTwo');
            $('#whoAmI').text('Style').fadeIn();
            $(".navigationButtons").children().eq(2).addClass('stopLightColorsThree')
        }, 22000)
    });

    // Opens Portfolio
    $('.portfolioLink').click(function() {
        $('#portfolioCircle').addClass('circleAfterClick');
        $('.nameDefault').animate({ 'padding-top': '5%' }, 1000);
        $('.circleOutline').addClass('rotationEffectOne');
        $('.aboutMeBlurb').children().fadeOut(1000);
        $('.wrapper').css('display', 'flex');
    });

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

    $('.blogLink').mouseover(function(event) {
        $('#blogPopUp').show().fadeOut(2000)
    });

});

function aboutMeCircleAnimation() {
    $('.aboutMePartI').fadeOut(1000);
    // setTimeout(changeCircleColor, 5000)
    $('.aboutMePartII').delay(1000).slideDown(1500).delay(9000).fadeOut(1000);
    $('.aboutMePartIII').delay(12500).slideDown(1500).delay(9000).fadeOut(1000);
    setTimeout(closeAboutMeAnimation, 21000)

}

// Stoplight theme
function changeCircleColor() {
    $(".circleOutline").each(function() {
            $(this).addClass('circleAfterClick');
        })
}

function closeAboutMeAnimation() {
    $('.circleOutline').removeClass('rotationEffectOne');
    $("[class='aboutMeClick']").hide();
    $('.aboutMeBlurb').children().children().fadeOut(500);
    $('.aboutMeBlurb').children().slideUp(5000);
    $('.pageNavigation').children().removeClass('circleAfterClick');
    $("[id='pageNavigation']").fadeIn(2000);
    $(".circletest").fadeIn(1000);
    $('#whoAmI').text('Who Am I');
    $(".navigationButtons").hide().children().removeClass('circleAfterClick');
    $('.nameDefault').animate({ 'padding-top': '14%' }, 2000)
}

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
