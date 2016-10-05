$(function() {
    $(window).resize();
    // Changes background color
    // setInterval(updateGradient, 10);

    // For top contact menu
    $(".trigger").click(function() {
        $(".menu").toggleClass("active");
        $('.nameDefault').animate({ 'padding-top': '11%' }, 1000,
            function() {
                $('.nameDefault').animate({ 'padding-top': '11%' }, 5000);
                $(".menu").toggleClass("active");
            }
        )
    });

    $('.aboutMeLink').click(function() {
        $('.circle').addClass('rotationEffectOne')
        $("[id='pageNavigation']").hide();
        $("[class='aboutMeClick']").fadeIn(100);
        $('.aboutMePartI').slideDown(2000).siblings().hide();
        $('#whoAmI')
            .parent()
            .addClass('circleAfterClick')
        $('#fa-times-aboutMe').show();
        $('.wrapper').css('display', 'none');
        $('.aboutMeBlurb').children().children().fadeIn(500);
        $('.nameDefault').animate({ 'padding-top': '11%' }, 1000);
        $('#portfolioCircle').removeClass('circleAfterClick')

    });
    // Close button for AboutMe section
    $('#fa-times-aboutMe').click(function() {
        $('.circle').removeClass('rotationEffectOne');
        $("[class='aboutMeClick']").hide();
        $('.aboutMeBlurb').children().slideUp(1500);
        $('.aboutMeBlurb').children().children().fadeOut(500);
        $('#fa-times-aboutMe').fadeOut(1000);
        $('.pageNavigation').children()
            .removeClass('circleAfterClick');
        $("[id='pageNavigation']").fadeIn(2000);
    });

    $('#whoAmI').click(function() {
        $('.aboutMePartI').fadeIn(1000).siblings().hide();
        $('#whoAmI')
            .parent()
            .addClass('circleAfterClick')
            .siblings()
            .removeClass('circleAfterClick');
    });

    $('#whatMovesMe').click(function() {
        $('.aboutMePartII').fadeIn(1000).siblings().hide();
        $('#whatMovesMe')
            .parent()
            .addClass('circleAfterClick')
            .siblings()
            .removeClass('circleAfterClick');
    });

    $('#otherTidBits').click(function() {
        $('.aboutMePartIII').fadeIn(1000).siblings().hide();
        $('#otherTidBits')
            .parent()
            .addClass('circleAfterClick')
            .siblings()
            .removeClass('circleAfterClick');
    });
    // Opens Portfolio
    $('.portfolioLink').click(function() {
        $('#portfolioCircle').addClass('circleAfterClick');
        $('.nameDefault').animate({ 'padding-top': '5%' }, 1000);
        $('.circle').addClass('rotationEffectOne');
        $('.aboutMeBlurb').children().fadeOut(1000);
        $('.wrapper').css('display', 'flex');
        $(".trigger").click(function() {
            $('.nameDefault')
            .delay(2000)
            .animate({'padding-top': '5%'}, 1000)
            // .queue(function(){
            //     $(this).animate({'padding-top': '5%'}, 1000);
            // });            
        })
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
