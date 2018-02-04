$(document).ready(function () {
    // imageTexteTransition();

    // function imageTexteTransition() {
    //     $('header ul.rightMenu li a').click(function () {
    //         var img = $(this).attr('data-img');
    //         $('.accueil').css('background-image', `url(img/${img}.jpg)`);
    //         $('.accueil .slider1, .slider2, .slider3, .slider4, .slider5').hide();
    //         $(`.accueil .${img}`).show();
    //     });
    // }

    $('ul.leftMenu li a').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href');
        console.log($(page).offset().top);
        // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });


        jQuery('.skillbar').each(function () {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 3000);
        });

});