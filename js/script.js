$(document).ready(function () {
    $('.main-menu li').hover(function(){
        $(this).find('.sub-menu:first, .sub-menu-treo:first, .sub-menu-fix:first, .sub-menu-contact:first').stop().slideDown(100);
      }, function(){
        $(this).find('.sub-menu:first, .sub-menu-treo:first, .sub-menu-fix:first, .sub-menu-contact:first').slideUp(100);
    });

    //nut nhan Responsive menu
    $('.nav-hamburger-content').click(function(){
        $(this).toggleClass('active')
        $('.js-nav').toggleClass('nav-active')
        if($('.js-nav').hasClass('nav-active')){
            $('body').addClass('no-scroll')
        }else {
            $('body').removeClass('no-scroll')
        }
    })

    $('.nav-menu-content-list li').click(function(){

        $(this).find('.nav-menu-content-list-sub').toggleClass('active')
    })

    $('.main-menu li').click(function(){
        $('.main-menu li').removeClass('active')
        $(this).addClass('active')
        return false
    })

    $('li.mega-children-cate a').click(function(){
        $('li.mega-children-cate a').removeClass('active')
        $(this).addClass('active')
        return false
    })

    // read-more
    $('.watch-product-best-selling-list-more').slideUp(0)
    $('.btn-more').click(function(){
        $('.watch-product-best-selling-list-more').slideToggle(600)
        return false
    })

    //modal
    $('.watch-register-btn').click(function(){
        $('.watch-register-modal-bg').addClass('modal-bg-active')
    })
    $('.modal-close').click(function(){
        $('.watch-register-modal-bg').removeClass('modal-bg-active')
    })
    
    //modal search-nav
    $('.nav-search').click(function(){
        $('.nav-search-modal-bg').addClass('nav-modal-bg-active')
    })
    $('span.nav-modal-close').click(function(){
        $('.nav-search-modal-bg').removeClass('nav-modal-bg-active')
    })

    //scroll-to-top
    $(Window).scroll(function(){
       if($(this).scrollTop() > 2800){
           $('.scroll-to-top').fadeIn()
       }else {
        $('.scroll-to-top').fadeOut()
       }
    })
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 600)
        return false
    })

    AOS.init({
        duration: 1500
    });

    // carousel-watch-product
    $('.watch-product-detail').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
        }
    })

    $('.jsproductCart_btn').click(function(){
        var cartNum = $('.shopping-cart').attr('data-count')
        cartNum++
        $('.shopping-cart').attr('data-count', cartNum)
        return false
    })

    //sticky menu
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('.wrap-header-menu').addClass('black')
        }else {
            $('.wrap-header-menu').removeClass('black')
        }
    })
});

function checkEmail() {
    var email = document.getElementById('emailInput')
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Hay nhap dia chi email hop le.');
        email.focus;
        return false;
    }
    else
    {
        alert('OK roi day, Email nay hop le.');
        return true;
    }
}


