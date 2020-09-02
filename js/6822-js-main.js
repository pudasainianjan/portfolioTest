/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE
--------------------------------------*/
jQuery(document).on('ready', function () {
    jQuery('.bt-portfolio').scrollSpy();
    jQuery('.bt-portfolio').on('scrollSpy:enter', function () {
        jQuery(this).addClass('bt-animate');
    });


    jQuery('.bt-sectionportfolio .bt-portfolio').slice(0, 5).css('display', 'flex');
    if (jQuery('.bt-sectionportfolio .bt-portfolio:hidden').length != 0) {
        jQuery('.bt-loadmore').show();
    }
    jQuery('#tg-btnviewmore').on('click', function () {
        jQuery('.bt-sectionportfolio .bt-portfolio:hidden').slice(0, 1).css('display', 'flex');
        if (jQuery('.bt-sectionportfolio .bt-portfolio:hidden').length == 0) {
            jQuery('.bt-loadmore').fadeOut('slow');
        }
    });


    jQuery('.bt-btntop').on('click', function(){
        jQuery('body,html').animate({
            scrollTop: 0
        }, 1200);
        return false;
    });


    jQuery('.bt-sayhello').on('click', function(){
        jQuery('html,body').animate({
            scrollTop:jQuery(document).height()
        }, 1200);
    });

    jQuery('#bt-features').slick({
        dots: false,
        slidesToShow: 5,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    jQuery('#bt-testimonialsslider').slick({
        asNavFor: '#bt-paginationslider',
        focusOnSelect: false,
        adaptiveHeight: true,
        draggable: false,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
    });
    jQuery('#bt-paginationslider').slick({
        asNavFor: '#bt-testimonialsslider',
        focusOnSelect: false,
        focusOnSelect: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Wait for window load
jQuery(window).load(function() {
    jQuery(".bt-pageloader").fadeOut("slow");
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var MainOffset = $('main').offset().top;
    var ClientOffset = $('.bt-sectiontestimonialsfull').offset().top;

    if (MainOffset - scroll <= 200) {
        $('#bt-wrapper').addClass('bt-bgdark');
    }  else {
        $('#bt-wrapper').removeClass('bt-bgdark');
    }
    if (ClientOffset - scroll <= 250) {
        $('#bt-wrapper').removeClass('bt-bgdark');
    }
});