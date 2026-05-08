"use strict"; // Start of use strict



function accrodion () {
    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false ) {                   
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');                    
                        $(this).parent().find('.accrodion-content').slideDown();        
                    };
                    

                });
            });
        });
        
    };
}

function thmMailchimp() {
    if ($('.mailchimp-form').length) {
        $('.mailchimp-form').each(function() {
            var mailChimpWrapper = $(this);
            mailChimpWrapper.validate({ // initialize the plugin
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                },
                submitHandler: function(form) {
                    // sending value with ajax request
                    $.post($(form).attr('action'), $(form).serialize(), function(response) {
                        $(form).parent().find('.result').append(response);
                        $(form).find('input[type="text"]').val('');
                        $(form).find('input[type="email"]').val('');
                        $(form).find('textarea').val('');
                    });
                    return false;
                }
            });
        });
    };
}


function thmOwlCarousel() {
    if ($('.banner-carousel-two').length) {
        $('.banner-carousel-two').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    }; 
    if ($('.testimonials-carousel-style-one').length) {
        $('.testimonials-carousel-style-one').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    }; 
    if ($('.testimonials-style-two-carousel').length) {
        $('.testimonials-style-two-carousel').owlCarousel({
            loop: true,
            margin: 110,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false,
                    dots: false,
                    nav: true
                },
                480: {
                    items: 1,
                    autoWidth: false,
                    dots: false,
                    nav: true
                },
                600: {
                    items: 2,
                    autoWidth: false,
                    dots: false,
                    nav: true
                },
                1000: {
                    items: 3,
                    autoWidth: false
                }
            }
        });
    }; 
    if ($('.project-carousel-style-three').length) {
        $('.project-carousel-style-three').owlCarousel({
            loop: true,
            margin: 6,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 2,
                    autoWidth: false
                },
                600: {
                    items: 3,
                    autoWidth: false
                },
                1000: {
                    items: 4,
                    autoWidth: false
                },
                1200: {
                    items: 6,
                    autoWidth: false
                }
            }
        });
    }; 
    if ($('.team-carousel-style-one').length) {
        $('.team-carousel-style-one').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false,
                    nav: true,
                    dots: false
                },
                480: {
                    items: 1,
                    autoWidth: false,
                    nav: true,
                    dots: false
                },
                600: {
                    items: 2,
                    autoWidth: false,
                    nav: true,
                    dots: false
                },
                768: {
                    items: 2,
                    autoWidth: false,
                    nav: true,
                    dots: false
                },
                800: {
                    items: 2,
                    autoWidth: false,
                    nav: true,
                    dots: false
                },
                1000: {
                    items: 3,
                    autoWidth: false
                }
            }
        });
    }; 
    if ($('.service-carousel-one').length) {
        $('.service-carousel-one').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 2,
                    autoWidth: false
                },
                1000: {
                    items: 3,
                    autoWidth: false
                }
            }
        });
    }; 
    if ($('.single-service-carousel').length) {
        $('.single-service-carousel').owlCarousel({
            loop: true,
            margin: 6,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 2,
                    autoWidth: false
                },
                1000: {
                    items: 2,
                    autoWidth: false
                }
            }
        });
    };  
    if ($('.brand-carousel').length) {
        $('.brand-carousel').owlCarousel({
            loop: true,
            margin: 90,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
    };  
}


function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
    	var postFilterList = $('.post-filter li');
        postFilterList.children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            postFilterList.children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            var count = $('.gallery-content').find(filterElement).length;
            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}


function thmbxSlider() {
    if ($('.team-member-content-box .slider').length) {
        var slider = $('.team-member-content-box .slider');
        slider.bxSlider({
            adaptiveHeight: true,
            auto:false,
            controls: true,
            nextText: '<i class="fa fa-arrow-right"></i>',
            prevText: '<i class="fa fa-arrow-left"></i>',
            pause: 3000,
            speed: 500,
            pagerCustom: '#team-pager',
            onSlideBefore: function () {
                var wow = new WOW({
                    boxClass:     'pogress-wow',      // default
                    animateClass: 'animated',
                    mobile: true
                });
                wow.init();
            }
        });
    }
}



function stickyHeader() {
    if ($('.stricky').length) {
        var headerScrollPos = $('.header').next().offset().top;
        var strickyScrollPos = 100;
        var stricky = $('.stricky');
        if ($(window).scrollTop() > headerScrollPos) {        	
            stricky.removeClass('slideIn animated');
            stricky.addClass('stricky-fixed slideInDown animated');
            $('.scroll-to-top').fadeIn(500);
            // Change logo to light version when navbar becomes sticky
            $('.navbar-brand img.default-logo').attr('src', 'img/logo-1-1.png');
        } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass('stricky-fixed slideInDown animated');
            stricky.addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
            // Change logo back to original version when navbar is not sticky
            $('.navbar-brand img.default-logo').attr('src', 'css/images/logo-largo-new.svg');
        }
    };
}


function thmLightBox() {
    if ($('.img-popup').length) {
        var groups = {};
        var imgPop = $('.img-popup');
        imgPop.each(function() {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function() {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };
}

function CounterNumberChanger () {
    var timer = $('.timer');
    if(timer.length) {
        timer.each(function () {
            $(this).appear(function () {
                $(this).countTo();
            })            
        });
    }

}

function thmScrollAnim() {
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: true
        });
        wow.init();
    };
}

function contactFormValidation() {
    if ($('.contact-form').length) {
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).parent().find('.result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                    console.log(response);
                });
                return false;
            }
        });
    }
}

function thmVideoPopup() {
    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    };
}

function scrollToTarget() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }
}

function mobileNavToggle () {
    if ($('#main-nav-bar .navbar-nav .sub-menu').length) {
    	var subMenu = $('#main-nav-bar .navbar-nav .sub-menu');
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        var subNavToggler = $('#main-nav-bar .navbar-nav .sub-nav-toggler');
        subNavToggler.on('click', function () {
            var Self = $(this);
            Self.parent().parent().children('.sub-menu').slideToggle();
            return false;
        });

    };
}


function handlePreloader() {
    if($('.preloader').length){
        $('body').removeClass('active-preloader-ovh');
        $('.preloader').fadeOut();
    }
}

function bootstrapAnimatedLayer() {

    /* Demo Scripts for Bootstrap Carousel and Animate.css article
     * on SitePoint by Maria Antonietta Perna
     */

    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('#minimal-bootstrap-carousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel({
        interval: 7000
    });

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function(e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });
}

function pogressbarAnim () {
    if ($('.pogress-animation').length) {
        var wow = new WOW({
            boxClass:     'pogress-animation',      // default
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    }
}


function searchPopup () {
    if ($('.popup-with-zoom-anim').length) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }
}


function sideNavToggler () {
    if ($('.side-navigation').length) {
        $('.side-nav-opener').on('click', function () {
            $('.side-navigation').addClass('open');
            return false;
        });
        $('.side-navigation-close-btn').on('click', function () {
            $('.side-navigation').removeClass('open');
            return false;
        });
    };
}

function sideNavMenu () {
    if ($('.hidden-sidebar .navigation-box .subnav-toggler').length) {
        $('.hidden-sidebar .navigation-box .subnav-toggler').on('click', function () {
            var Self = $(this);
            Self.parent().parent().find('.sub-menu').slideToggle();
            return false;
        });
    }
    if ($('.hidden-sidebar .navigation-box .scroll-to-target').length) {
        $('.hidden-sidebar .navigation-box .scroll-to-target').on('click', function () {
            var Self = $(this);
            $('.hidden-sidebar .navigation-box .scroll-to-target').parent().removeClass('current');
            Self.parent().addClass('current');
            return false;
        });
    }
}

function countDownTimer () {
    if ($('.countdown-box').length) {

        $('.countdown-box').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function(event) {                    
                $(this).html('<li> <div class="box"> <h4>'+ event.strftime('%D') +'</h4> <span>Days</span> </div> </li> <li> <div class="box"> <h4>'+ event.strftime('%H') +'</h4> <span>Hours</span> </div> </li> <li> <div class="box"> <h4>'+ event.strftime('%M') +'</h4> <span>Minutes</span> </div> </li> <li> <div class="box"> <h4>'+ event.strftime('%S') +'</h4> <span>Seconds</span> </div> </li> ');
            });
        });

        

    };
}

function typeEffect () {
    if ($(".typed").length) {
        $(".typed").typed({
            stringsElement: $('.typed-strings'),
            typeSpeed: 200,
            backDelay: 1500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function () { null; },
            resetCallback: function () { newTyped(); }
        });
    };
}

function SmoothMenuScroll () {
    var anchor = $('.scrollToLink');
    if(anchor.length){
        anchor.children('a').bind('click', function (event) {
            if ($(window).scrollTop() > 10) {
                var headerH = '60';
            }else {
                var headerH = '60';
            }
            var target = $(this);
            $('html, body').stop().animate({
                scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
            }, 1200, 'easeInOutExpo');
            anchor.removeClass('current');
            target.parent().addClass('current');
            event.preventDefault();
        });
    }
}

function OnePageMenuScroll () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        var menuAnchor = $('.mainmenu.one-page-scroll-menu .scrollToLink').children('a');
        menuAnchor.each(function (){
            // grabing section id dynamically
            var sections = $(this).attr('href');
            $(sections).each(function() {
                // checking is scroll bar are in section
                if ($(this).offset().top <= windscroll + 100) {
                    // grabing the dynamic id of section
                    var Sectionid = $(sections).attr('id');
                    // removing current class from others
                    $('.mainmenu').find('li').removeClass('current');
                    // adding current class to related navigation
                    $('.mainmenu').find('a[href*=\\#'+Sectionid+']').parent().addClass('current');
                }
            });
        });
    } else {
        $('.mainmenu.one-page-scroll-menu li.current').removeClass('current');
        $('.mainmenu.one-page-scroll-menu li:first').addClass('current');
    }
}

function flipHover () {
    if ($('.flip-hover').length) {
        $('.flip-hover').hover(function(){
            $(this).addClass('flip');
        },function(){
            $(this).removeClass('flip');
        });
    }
}
// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        thmMailchimp();
        thmLightBox();
        CounterNumberChanger();        
        contactFormValidation();
        scrollToTarget();
        thmVideoPopup();
        accrodion();
        mobileNavToggle();
        bootstrapAnimatedLayer();
        searchPopup();
        sideNavToggler();
        countDownTimer();
        sideNavMenu();
        SmoothMenuScroll();
        typeEffect();
        flipHover();
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        handlePreloader()
        galleryMasonaryLayout();
        thmScrollAnim();
        pogressbarAnim();
        thmbxSlider();
        thmOwlCarousel();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader();   
        OnePageMenuScroll();   
    })(jQuery);
});

// ════ COOKIE CONSENT SYSTEM ════════════════════════════════════════════════════════
// Dark theme cookie banner + Magnific Popup modal using existing site styles/CSS vars
// Multi-language support via data-lang attributes
"use strict";

(function () {
  const CONSENT_KEY = "nutec_cookie_consent_v2";
  const CONSENT_EXPIRY_DAYS = 180;

  const defaultConsent = {
    essential: true,
    analytics: false,
    marketing: false
  };

  // ===============================
  // STORAGE
  // ===============================
  function getConsent() {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;

      const data = JSON.parse(raw);
      const expiry =
        new Date(data.timestamp).getTime() +
        CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

      if (Date.now() > expiry) {
        localStorage.removeItem(CONSENT_KEY);
        return null;
      }

      return data;
    } catch {
      return null;
    }
  }

  function setConsent(consent) {
    const payload = {
      ...consent,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
    applyConsent(payload);
  }

  // ===============================
  // GOOGLE CONSENT MODE V2
  // ===============================
  function initGoogleConsentMode() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  function updateGoogleConsent(consent) {
    gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied'
    });
  }

  // ===============================
  // LOAD SCRIPTS DINÁMICOS
  // ===============================
  function loadScript(src, id) {
    if (id && document.getElementById(id)) return;

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    if (id) s.id = id;
    document.head.appendChild(s);
  }

  function loadAnalytics() {
    loadScript("https://www.googletagmanager.com/gtag/js?id=G-XXXX", "ga-script");

    gtag('js', new Date());
    gtag('config', 'G-XXXX', {
      anonymize_ip: true
    });
  }

  function loadMarketing() {
    // Ejemplo Meta Pixel
    loadScript("https://connect.facebook.net/en_US/fbevents.js", "meta-pixel");

    if (window.fbq) return;
    window.fbq = function(){fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments)};
    fbq.queue = [];
    fbq('init', 'XXXX');
    fbq('track', 'PageView');
  }

  // ===============================
  // APPLY CONSENT
  // ===============================
  function applyConsent(consent) {
    updateGoogleConsent(consent);

    if (consent.analytics) loadAnalytics();
    if (consent.marketing) loadMarketing();
  }

  // ===============================
  // UI CONTROL
  // ===============================
  function showBanner() {
    document.getElementById("cookie-banner").style.display = "flex";
  }

  function hideBanner() {
    document.getElementById("cookie-banner").style.display = "none";
  }

  function openModal() {
    $.magnificPopup.open({
      items: { src: "#cookie-modal" },
      type: "inline",
      mainClass: "cookie-mfp-dark"
    });
  }

  // ===============================
  // INIT
  // ===============================
  function init() {
    initGoogleConsentMode();

    const consent = getConsent();

    if (!consent) {
      showBanner();
    } else {
      applyConsent(consent);
    }
  }

  // ===============================
  // EVENTS
  // ===============================
  document.addEventListener("click", function (e) {
    if (e.target.id === "cookie-accept-all") {
      setConsent({
        essential: true,
        analytics: true,
        marketing: true
      });
      hideBanner();
    }

    if (e.target.id === "cookie-reject") {
      setConsent(defaultConsent);
      hideBanner();
    }

    if (e.target.id === "cookie-settings" || e.target.id === "cookies-settings") {
      e.preventDefault();
      openModal();
    }

    if (e.target.id === "save-preferences") {
      setConsent({
        essential: true,
        analytics: document.getElementById("analytics").checked,
        marketing: document.getElementById("marketing").checked
      });
      $.magnificPopup.close();
      hideBanner();
    }
  });

  document.addEventListener("DOMContentLoaded", init);
})();