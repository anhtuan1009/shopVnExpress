function showMiniCart() {
    var x = document.getElementById("popup-mini-cart");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else { 
        x.className = x.className.replace(" show", "");
    }
};
function showSearch() {
    var x = document.getElementById("popup-search");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        $('input.input-search').focus();
        $('form[name="search"] input[name="q"]').trigger('click');
    } else { 
        x.className = x.className.replace(" show", "");
    }
};
function showOrders() {
    var x = document.getElementById("wrap_orders");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else { 
        x.className = x.className.replace(" show", "");
    }
};
function showSingin() {
    var x = document.getElementById("popup_signin");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else { 
        x.className = x.className.replace(" show", "");
    }
};
function showSignup() {
    var x = document.getElementById("popup_signup");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else { 
        x.className = x.className.replace(" show", "");
    }
};
function showGroupOption() {
    var x = document.getElementById("popup_show_option");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else { 
        x.className = x.className.replace(" show", "");
    }
};

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();   

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
        else $('#goTop').fadeOut();
    });
    $('#goTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });


    $('a.scrollDiv').on('click', function(e){
        e.preventDefault();

        var id = $(this).attr('href');

        if($('.box-nav-top')) {
            $('html,body').animate({
                scrollTop: $(id).offset().top
            });
        }
    });


    $(".show_frmSearch").click(function(e){
        e.preventDefault();
        $("#timke").toggle();
    });
    $(".show_frmSearch2").click(function(e){
        e.preventDefault();
        $("#timke2").toggle();
    });




    var delay = ( function() {
      var timer = 0;
      return function(callback, ms) {
          clearTimeout (timer);
          timer = setTimeout(callback, ms);
      };
    })();

    delay(function(){
       $('.box_popup_preview').modal('show');
    }, 3000 );


    $(".btn-close-preview").click(function(){
        $('.box_popup_preview').hide();
    });

    $('.btn-show-submenu').on("click", function(e){
        $(this).next('ul').toggle();
        $(this).toggleClass("fa-chevron-up");
        e.stopPropagation();
        e.preventDefault();
    });

    $('.click-dropdown').on("click", function(e){
        $(this).toggleClass("show");
        $(this).next('.content-dropdown').toggle();
        $(this).parent().toggleClass("show");
        e.stopPropagation();
        e.preventDefault();
    });
    


    footerFixed();
    checkScroll();
    $(window).scroll(checkScroll);
    
});
$(window).resize(function () {
    footerFixed();
});
function footerFixed() {
    var window_h = $(window).innerHeight();
    var document_h = $(document).innerHeight();
    var body_h = $('body.view_mb').innerHeight();
    var tag_body = $('body.view_mb');
    var compare_h = (window_h > body_h);
    if (compare_h === true) {
        tag_body.addClass('footer-fixed');
    } 
    // else { 
    //     tag_body.removeClass('footer-fixed');
    // }

    //Đang bị lỗi giật giật khi resize | add <-> remove
};
function checkScroll(){
    if($('.header.header-scroll')[0]){
        var header_a = $('.wrap-top-header');
        var h_header_a = $('.wrap-top-header').outerHeight();
        var header_b = $('.space-header-fixed');

        var header_c = $('.header.header-scroll');
        var h_header_c = $('.header.header-scroll').outerHeight();
        var header_fixed = ($(this).scrollTop() >= h_header_a);
        if (header_fixed === true) {
            header_b.height(h_header_c);
            header_c.addClass('fixed');
        } else {
            header_b.height(0);
            header_c.removeClass('fixed');
        }
    };


    var total_scroll_height = document.body.scrollHeight;
    var inside_header = ($(this).scrollTop() <= 200);
    var passed_header = ($(this).scrollTop() >= 0);
    var passed_header2 = ($(this).scrollTop() >= 150);
    var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() + 300)));
    if (inside_header === true) {
        $('.store-product-button-fixed').removeClass('show-store-product-button');
        $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
    } else if (passed_header === true) {
        $('.store-product-button-fixed').addClass('show-store-product-button');
        $('.back-to-top-badge').addClass('back-to-top-badge-visible');
    }
    if (footer_reached == true) {
        $('.store-product-button-fixed').removeClass('show-store-product-button');
        $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
    }
}




// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     var menu_a = $('.menu-top');
//     var menu_b = $('.header');
//     if (document.body.scrollTop > 36 || document.documentElement.scrollTop > 36) {
//         menu_a.hide();
//         document.getElementById("navbar").style.padding = "30px 10px";
//         document.getElementById("logo").style.fontSize = "25px";
//     } else {
//         menu_a.show();
//         document.getElementById("navbar").style.padding = "80px 10px";
//         document.getElementById("logo").style.fontSize = "35px";
//     }
// }


// Start Scroll page detail
$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
    
        // Assign active class to nav links while scolling
        $('.position-scroll').each(function(i) {
                if ($(this).position().top <= scrollDistance) {
                        $('.box-detail .wrap-first .group-action-product.active').removeClass('active');
                        $('.m-product-detail .position-group-btn').eq(i).addClass('active');
                } else {
                        $('.box-detail .wrap-first .group-action-product').eq(i).addClass('active');
                        $('.m-product-detail .position-group-btn.active').removeClass('active');
                }
        });
}).scroll();
// End Scroll page detail



jQuery(function($) {
    $('.back-to-top-badge').on("click", function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.btn-collapse').on("click", function(e) {
        e.preventDefault();
        $('#box-collapse').toggle(300);
    });

    $('#on-hover-nav-cate-home').mouseover(function() {
        $(this).addClass('active');
    });
    $('#nav-cate-home').mouseleave(function() {
        $('#on-hover-nav-cate-home').removeClass('active');
    });
    $('#on-hover-nav-cate-home').mouseleave(function() {
        $('#on-hover-nav-cate-home').removeClass('active');
    });

    $('#nav-cate-home a.link').mouseover(function() {
       var $this = $(this);
       var id = $this.attr('rel');
       var $currentWidget = $('#' + id);
       $currentWidget.show().siblings('.child-box').hide();
    });


    $('#nav-cate-home li').mouseover(function() {
       $(this).addClass('active').siblings('#nav-cate-home li').removeClass('active');
    });

    $('#box-nav-cate-home').mouseleave(function() {
        $(this).removeClass('active');
        $('.child-box').hide();
        $('#nav-cate-home li').removeClass('active');
    });

    $('#nav-cate-home').mouseover(function() {
        $('#on-hover-nav-cate-home').addClass('active');
        $(this).addClass('active');
    });

    // hover menu not page home
    $('#hover_show_menu_cate').hover(
        function() {
            $('.box-menu-top.not-page-home').stop(true, true).delay(100).fadeIn(200);
            $('#nav-cate-home .item-menu:first-child').addClass('active');
            $('#on-hover-nav-cate-home').addClass('active');
            $('#on-hover-nav-cate-home .list-child-box .child-box:first-child').show();
        }, function() {
            $('.box-menu-top.not-page-home').stop(true, true).delay(200).fadeOut(600);
        }
    );
    $('.box-menu-top.not-page-home').hover(
        function() {
            $('.box-menu-top.not-page-home').stop(true, true).delay(100).fadeIn(200);
        }, function() {
            $('.box-menu-top.not-page-home').stop(true, true).delay(100).fadeOut(200);
        }
    );
    // End hover menu not page home


    var swiperMarquee = new Swiper('#slide_marquee', {
        slidesPerView: 'auto',
        spaceBetween: 1,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        speed: 8000,
        loopFillGroupWithBlank: false,
        // pagination: {
        //     el: '.swiper-pagination-slide-marquee',
        //     clickable: true,
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next-slide-marquee',
        //     prevEl: '.swiper-button-prev-slide-marquee',
        // },

    });

    var swiper0 = new Swiper('#banner_slide_home', {
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination-slide-home',
            dynamicBullets: true,
        },
    });

    var swiper1 = new Swiper('#slide_brand_home', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 15,
        pagination: {
        el: '.swiper-pagination-brand-home',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-brand-home',
            prevEl: '.swiper-button-prev-brand-home',
        },
        breakpoints: {
            1600: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            355: {
                slidesPerView: 2,
                spaceBetween: 5,
            }
        }
    });

    var swiper2 = new Swiper('#slide_list_cate_home', {
        slidesPerView: 6,
        slidesPerColumn: 2,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination-cate-home',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-cate-home',
            prevEl: '.swiper-button-prev-cate-home',
        },
        breakpoints: {
            1600: {
                slidesPerView: 5.5,
            },
            992: {
                slidesPerView: 5.5,
            },
            768: {
                slidesPerView: 4.5,
                spaceBetween: 15,
            },
            580: {
                slidesPerView: 3.2,
                spaceBetween: 13,
                pagination: false,
            },
            355: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                pagination: false,
            }
        }
    });

    var swiper8 = new Swiper('#slide_trends_home', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 15,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination-trends-home',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-trends-home',
            prevEl: '.swiper-button-prev-trends-home',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            580: {
                slidesPerView: 2.1,
                spaceBetween: 10,
                pagination: false,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                pagination: false,
            }
        }
    });

    var swiper9 = new Swiper('#deal_hot_today', {
        slidesPerView: 6.5,
        slidesPerColumn: 1,
        spaceBetween: 15,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next-deal-today',
            prevEl: '.swiper-button-prev-deal-today',
        },
        breakpoints: {
            1600: {
                slidesPerView: 5.5,
            },
            992: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 3.2,
                slidesPerColumn: 2,
                spaceBetween: 15,
            },
            580: {
                slidesPerView: 2.2,
                slidesPerColumn: 2,
                spaceBetween: 15,
            },
            355: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            }
        }
    });

    var swiper3 = new Swiper('#slide_product_seen', {
        slidesPerView: 6.5,
        slidesPerColumn: 1,
        spaceBetween: 15,
        pagination: {
        el: '.swiper-pagination-product-seen',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-product-seen',
            prevEl: '.swiper-button-prev-product-seen',
        },
        breakpoints: {
            1600: {
                slidesPerView: 5.5,
            },
            992: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 3.2,
                spaceBetween: 15,
            },
            580: {
                slidesPerView: 2.4,
                spaceBetween: 12,
            },
            400: {
                slidesPerView: 2.1,
                spaceBetween: 8,
            }
        }
    });

    var swiper4 = new Swiper('#slide_bestsellers', {
        slidesPerView: 6,
        slidesPerColumn: 1,
        spaceBetween: 15,
        freeMode: true,
        pagination: {
        el: '.swiper-pagination-bestsellers',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-bestsellers',
            prevEl: '.swiper-button-prev-bestsellers',
        },
        breakpoints: {
            1600: {
                slidesPerView: 5.5,
            },
            992: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 3.5,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            355: {
                slidesPerView: 2.5,
                spaceBetween: 5,
            }
        }
    });

    var swiper5 = new Swiper('#slide_related_prev', {
        slidesPerView: 4.5,
        slidesPerColumn: 1,
        spaceBetween: 15,
        pagination: {
        el: '.swiper-pagination-related-prev',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-related-prev',
            prevEl: '.swiper-button-prev-related-prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 3.5,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            355: {
                slidesPerView: 2.5,
                spaceBetween: 5,
            }
        }
    });

    var swiper6 = new Swiper('#slide_list_cate_folder', {
        slidesPerView: 6.5,
        slidesPerColumn: 1,
        spaceBetween: 15,
        pagination: {
        el: '.swiper-pagination-sub-menu',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-sub-menu',
            prevEl: '.swiper-button-prev-sub-menu',
        },
        breakpoints: {
            1600: {
                slidesPerView: 6.5,
            },
            992: {
                slidesPerView: 5.5,
            },
            768: {
                slidesPerView: 4.5,
                spaceBetween: 15,
            },
            580: {
                slidesPerView: 3.5,
                spaceBetween: 10,
            },
            355: {
                slidesPerView: 2.5,
                spaceBetween: 5,
            }
        }
    });


    var swiper8 = new Swiper('#brand_trademark', {
        slidesPerView: 5,
        slidesPerColumn: 1,
        spaceBetween: 10,
        lazy: true,
        pagination: {
            el: '.swiper-pagination-slide-trademark',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-slide-trademark',
            prevEl: '.swiper-button-prev-slide-trademark',
        },
        breakpoints: {
            2500: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 6,
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 6,
            },
            355: {
                slidesPerView: 2,
                spaceBetween: 5,
            }
        }
    });
    // Start PC

    $(".scroll_horizontal_middle a").on("click", function(d) {
        d.preventDefault();
        var g = $(this).closest(".scroll_horizontal_middle");
        g.find("a").removeClass("active");
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
