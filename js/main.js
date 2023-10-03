


$(window).scroll(function () {
    const topSpaceFromSection  = $('#about').offset().top;
    const navbarheight=$('.nav_change').outerHeight();
    if ($(window).scrollTop() > topSpaceFromSection-navbarheight) {
        $('.nav_change').css('backgroundColor','black');
        console.log("wqwqqwqq");
        console.log(navbarheight);
       

        $('.navbar-toggler').css('backgroundColor','white');

    }
    else{
        $('.nav_change').css('backgroundColor', 'transparent');
        $('.navbar-toggler').css('backgroundColor','transparent');

    }
})