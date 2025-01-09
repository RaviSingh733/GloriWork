function videoPopup() {
    var play = $('.play'),
        link = $(play).attr('src');
    $(play).magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
        iframe: {
            patterns: {
                youtube: {
                    src: link
                }
            }
        }
    });
 }