$(document).ready(function(){

    if($('.brands_slider').length)
    {
        var brandsSlider = $('.brands_slider');

        brandsSlider.owlCarousel(
            {
                loop:true,
                autoplay:true,
                autoplayTimeout:5000,
                nav:false,
                dots:false,
                autoWidth:false,
                items:5,
                margin:42
            });

        if($('.brands_prev').length)
        {
            var prev = $('.brands_prev');
            prev.on('click', function()
            {
                brandsSlider.trigger('prev.owl.carousel');
            });
        }

        if($('.brands_next').length)
        {
            var next = $('.brands_next');
            next.on('click', function()
            {
                brandsSlider.trigger('next.owl.carousel');
            });
        }
    }


    if($('.pic_slider').length)
    {
        var brandsSlider = $('.pic_slider');

        brandsSlider.owlCarousel(
            {
                loop:true,
                autoplay:true,
                autoplayTimeout:5000,
                nav:false,
                dots:false,
                autoWidth:false,
                items:4,
                margin:0
            });

        if($('.pic_prev').length)
        {
            var prev = $('.pic_prev');
            prev.on('click', function()
            {
                brandsSlider.trigger('prev.owl.carousel');
            });
        }

        if($('.pic_next').length)
        {
            var next = $('.pic_next');
            next.on('click', function()
            {
                brandsSlider.trigger('next.owl.carousel');
            });
        }
    }
});