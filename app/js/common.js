$('.gallery').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2
});

$('.finnish-slides img').click(function(event) {
	$('.current-slide').attr('src', event.target.src);
});