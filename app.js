$(function() {
    // Changes background color
    setInterval(updateGradient, 10);

    // For top contact menu
    $(".trigger").click(function() {
        $(".menu").toggleClass("active");
        $('.nameDefault').animate({ 'padding-top': '11%' }, 1000
            // ,
            // function() {
            //     $('.nameDefault').animate({ 'padding-top': '11%' }, 5000);
            //     $(".menu").toggleClass("active");
            // }
        )
    });

    $('.aboutMeLink').click(function() {
        $("[id='pageNavigation']").hide();
        $(".circletest").hide(2000);
        $("[class='aboutMeClick']").fadeIn(100);
        $('.aboutMePartI').slideDown(2000).siblings().hide();
        $('#whoAmI')
            .parent()
            .addClass('circleAfterClick')
            // $('#fa-times-aboutMe').show();
        $('.wrapper').css('display', 'none');
        $('.aboutMeBlurb').children().children().fadeIn(500);
        setTimeout(aboutMeCircleAnimation, 5000);

        // Timeouts for changing test of circle
        setTimeout(function() {
            $('#whoAmI').text('Motivation').fadeIn()
        }, 6000);
        setTimeout(function() {
            $('#whoAmI').text('Style').fadeIn()
        }, 13000)
        $('.nameDefault').animate({ 'padding-top': '11%' }, 1000);
    });

    // Opens Portfolio
    $('.portfolioLink').click(function() {
        $('#portfolioCircle').addClass('circleAfterClick');
        $('.nameDefault').animate({ 'padding-top': '5%' }, 1000);
        $('.circleOutline').addClass('rotationEffectOne');
        $('.aboutMeBlurb').children().fadeOut(1000);
        $('.wrapper').css('display', 'flex');
        // $(".trigger").click(function() {
        //     $('.nameDefault')
        //     .delay(2000)
        //     .animate({'padding-top': '5%'}, 1000)
        //     // .queue(function(){
        //     //     $(this).animate({'padding-top': '5%'}, 1000);
        //     // });            
        // })
    });

    $('.pin').hover(function() {
            $(this).children('p').css('visibility', 'visible')
            $(this).css('border-radius', '0');
        },
        function() {
            $(this).children('p').css('visibility', 'hidden');
            $(this).css('border-radius', '2rem')
        }
    );

    $('.blogLink').mouseover(function(event) {
        $('#blogPopUp').show().fadeOut(2000)
    });

});

function aboutMeCircleAnimation() {
    $('.aboutMePartI').fadeOut(1000);
    // setTimeout(changeCircleColor, 5000)
    $('.aboutMePartII').delay(1000).slideDown(1500).delay(5000).fadeOut(1000);
    $('.aboutMePartIII').delay(8500).slideDown(2500).delay(5000).fadeOut(1000);
    setTimeout(closeAboutMeAnimation, 16000)

}

// Stoplight theme
function changeCircleColor() {
    $(".circleOutline").each(function() {
            $(this).addClass('circleAfterClick');
        })
        // var aboutMeClick = $('.aboutMeClick')
        // var n = 0;
        // var x = aboutMeClick[n]
        // // Cannot pull elements like this
        // x.addClass('circleAfterClick');
        // n++
        // console.log('this is n', n)
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

    // Clicking events for old AboutMe Section
    // $('#whoAmI').click(function() {
    //     $('.aboutMePartI').fadeIn(1000).siblings().hide();
    //     $('#whoAmI')
    //         .parent()
    //         .addClass('circleAfterClick')
    //         .siblings()
    //         .removeClass('circleAfterClick');
    // });

    // $('#whatMovesMe').click(function() {
    //     $('.aboutMePartII').fadeIn(1000).siblings().hide();
    //     $('#whatMovesMe')
    //         .parent()
    //         .addClass('circleAfterClick')
    //         .siblings()
    //         .removeClass('circleAfterClick');
    // });

    // $('#otherTidBits').click(function() {
    //     $('.aboutMePartIII').fadeIn(1000).siblings().hide();
    //     $('#otherTidBits')
    //         .parent()
    //         .addClass('circleAfterClick')
    //         .siblings()
    //         .removeClass('circleAfterClick');
    // });
