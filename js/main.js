$(document).ready(() => {
    $('.carousel-photos').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $( "#tabs" ).tabs();

    $("#accordion").accordion({
        collapsible: true,
        active: false
    });
});

