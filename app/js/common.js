$('.works-top-gallery').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2
});

$('.baths-top-gallery').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2
});

$('.finnish-slides img').click(function(event) {
	$('.finnish-current-slide').attr('src', event.target.src);
});

$('.bath-slides img').click(function(event) {
    $('.bath-current-slide').attr('src', event.target.src);
});