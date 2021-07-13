
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


$(document).ready(function() {

    $(document).ajaxStart(function() {
       $('.load').fadeIn(200);
    });
    $(window).load(function(){
        $('.load').fadeOut(600);
    });
    $(document).ajaxComplete(function(event, xhr, settings) {
        $('.load').delay(1000);
    });


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
                scrollTop: $(id).offset().top-60
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

    $(".btn-click-turn").click(function(){
        $(".box_popup_download_app").hide();
    });

    $('a.parent').on("click", function(e){
        $(this).next('ul').toggle();
        $(this).children('span:first').toggleClass("icon-down-arrow icon-right-arrow");
        e.stopPropagation();
        e.preventDefault();
    });
    

    delay(function(){
       $('.box-popup-warning-logout').modal('show');
    }, 3000 );

    $(".btn-close-warning").click(function(){
        $('.box-popup-warning-logout').hide();
    });

    delay(function(){
       $('.box_popup_warning').modal('show');
    }, 3000 );

    $(".btn-close-warning").click(function(){
        $('.box_popup_warning').hide();
    });    


});



$(window).on('scroll', function() {
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
});
$('.back-to-top-badge, .back-to-top').on("click", function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$('.btn-collapse').on("click", function(e) {
    e.preventDefault();
    $('#box-collapse').toggle(300);
});


jQuery(function($) {

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

});

// Check FooterFixed when resize or click
var $window = $(window);
function FooterFixed() {
    var h_web = $('body').innerHeight();
    var h_device = $window.innerHeight();
    var h_footer = $('footer').innerHeight();

    console.log(h_web);
    console.log(h_device);
    console.log(h_footer);
    if(h_web < h_device){
        $('body').addClass('footer-fixed');
        $('body').css("padding-bottom", h_footer);
    }else {
        $('body').removeClass('footer-fixed');
        $('body').css("padding-bottom", "0");
    }
}
function SetResizeContent() {
    FooterFixed();
}
SetResizeContent();

$window.resize(function(event) {
    setTimeout(function() {
        SetResizeContent();
    }, 500);
    event.preventDefault();
});

$('body *').click(function(){
    SetResizeContent();
});
