$(document).on('ready', function() {
    $(".slider").slick({
        prevArrow:$(".prev"),
        nextArrow:$(".next"),
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        resetDots();
        var dot = $("li:eq("+ currentSlide +") .bt-dot"); //Get dot position of new slide
    });

    $(".bt-dot").on("click", function(){
        resetDots();
        var index = $(this).parent().index(); //Get index of dot in list of navigation
        $(".slider").slick("slickGoTo", index); //Animate carrousel to selected slide
    });

    // Reset values of navigation dots
    function resetDots(){
        $(".bt-dot").removeClass("active");
        $(".sr-only-active").remove();
        $(".status").html("");
    }
});