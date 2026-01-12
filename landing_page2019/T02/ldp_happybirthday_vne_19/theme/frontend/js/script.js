

function LdpScrollDiv(id){

    if($('.ldp-nav-top.ldp-menu-fixed')) {
        $('html,body').animate({
           scrollTop: $("#"+id).offset().top-52
        });
    }
    $(this).addClass("active");

};


jQuery(function($) {
    if($('.ldp-nav-top')[0]){
        var ldp_nav = $('.ldp-nav-top');
        var h_ldp_nav = ldp_nav.offset().top;
        var ldpspace = $('.space-ldp-nav-top-fixed');  


        function menuScroll() {   
            var ldp_menu_fixed = ($(this).scrollTop() >= h_ldp_nav);

            if (ldp_menu_fixed === true) {
                ldp_nav.addClass("ldp-menu-fixed");
                ldpspace.addClass("show");
            } else {
                ldp_nav.removeClass("ldp-menu-fixed");
                ldpspace.removeClass("show");
            }
        }

        $(window).on('scroll resize', menuScroll);
    };
});

jQuery(function($) {

    $(".ldp_scroll_horizontal_middle>.item-menu").on("click", function(d) {
        d.preventDefault();
        var g = $(this).closest(".ldp_scroll_horizontal_middle");
        g.find(".item-menu").removeClass("active");
        $(this).addClass("active");
        var f = $(this).position().left;
        var a = g.scrollLeft();
        var c = g.width();
        var b = $(this).width();
        f = (f + a) - (c / 2) + (b / 2);
        g.animate({
            scrollLeft: f
        })
    });

});

$(document).ready(function(){ 

    var slidetab1 = new Swiper('#ldp_slide_deal_01', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 12,
        slidesPerGroup: 2,
        lazy: true,
        //loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination-deal-hot',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-deal-hot',
            prevEl: '.swiper-button-prev-deal-hot',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 4,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            620: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            355: {
                slidesPerView: 2,
                spaceBetween: 5,
            }
        }


    });
    var slidetab2 = new Swiper('#ldp_slide_deal_02', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 12,
        slidesPerGroup: 2,
        lazy: true,
        //loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination-deal-hot',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-deal-hot',
            prevEl: '.swiper-button-prev-deal-hot',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            580: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            355: {
                slidesPerView: 2,
                spaceBetween: 5,
            }
        }

    });



    var swiper3 = new Swiper('#ldp_slide_brand', {
        slidesPerView: 5,
        slidesPerColumn: 1,
        spaceBetween: 20,
        lazy: true,
        pagination: {
            el: '.swiper-pagination-ldb-slide-brand',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-ldb-slide-brand',
            prevEl: '.swiper-button-prev-ldb-slide-brand',
        },
        breakpoints: {
            2500: {
                slidesPerView: 5,
                pagination: false,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
                pagination: false,
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 13,
            },
            355: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });


    var swiper4 = new Swiper('#m_ldp_slide_coupon', {
        slidesPerView: 5,
        slidesPerColumn: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        lazy: true,
        pagination: {
            el: '.swiper-pagination-ldb-slide-coupon',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-ldb-slide-coupon',
            prevEl: '.swiper-button-prev-ldb-slide-coupon',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            650: {
                slidesPerView: 2.5,
                spaceBetween: 13,
            },
            580: {
                slidesPerView: 2.2,
                spaceBetween: 13,
                centeredSlides: false,
            },
            380: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            }
        }
    });
        
    // slidetab1(); 
    // slidetab2();
    // $("#slidetab1").click(function(){ 
    //     slidetab1();
    // });
    // $("#slidetab2").click(function(){ 
    //     slidetab2();
    // });
});

// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//     e.target // newly activated tab
//     e.relatedTarget // previous active tab
//     slidetab1();
// })


(function() {
    'use strict';

    var section = document.querySelectorAll(".position-scrollspy");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                console.log(scrollPosition);
                $('.item-menu.active').removeClass('active');
                document.querySelector('div[data-scroll*=' + i + ']').setAttribute('class', 'item-menu active');
                //$('.item-menu[data-scroll*=' + i + ']').removeClass('class', 'active');
            }
        }
    };
})();
