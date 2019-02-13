$(document).ready(function() { 
    // Navbar //
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
    })
    $('ul li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
    // Slide Show // 
    var slideImgItems = $('.slider li').length;
    var sliderImgPosition = 1;
    var sliderInterval = setInterval(nextSlider, 4000);
    for(i = 1; i <= slideImgItems; i++){
        $('.pagination').append('<li class="m-1"><i class="fa fa-circle text-black" aria-hidden="true"></i></li>');
    }

    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'color': '#af3838'});

    $('.pagination li').click(pagination);
    $('.left-arrow i').click(previousSlider);
    $('.right-arrow i').click(nextSlider);

    function pagination(){
        var paginationPosition = $(this).index() + 1;

        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlider, 4000);

        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPosition +')').fadeIn();
        $('.pagination li').css({'color': '#ffffff'});
        $(this).css({'color': '#af3838'});

        sliderImgPosition = paginationPosition;
    }

    function nextSlider() {
        if(sliderImgPosition >= slideImgItems) sliderImgPosition = 1;
        else sliderImgPosition ++;

        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlider, 4000);

        $('.pagination li').css({'color': '#ffffff'});
        $('.pagination li:nth-child('+ sliderImgPosition +')').css({'color': '#af3838'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ sliderImgPosition +')').fadeIn();
    }

    function previousSlider() {
        if(sliderImgPosition <= 1) sliderImgPosition = slideImgItems;
        else sliderImgPosition --;

        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlider, 4000);

        $('.pagination li').css({'color': '#ffffff'});
        $('.pagination li:nth-child('+ sliderImgPosition +')').css({'color': '#af3838'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ sliderImgPosition +')').fadeIn();
    }

});