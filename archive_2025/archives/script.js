var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $('header').stop().animate({"top":"-66px"},200);
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
            $('header').stop().animate({"top":"0px"},200);
        }
    }
    
    lastScrollTop = st;
}

$("#hamburgerMenu").on("click",
    function() {$(".mobileMenu").toggle();
});

function check(form) {
    if(form.password.value == "reallyhardtoguess")
    {
        window.open('secretpage.html', '_self');
    }
    else 
    {
        $("#wrongInfo").show();
    }
}

$("#loginForm").keypress(function(e) {
                if(e.which == 13) {
                    check(this);
                }
});