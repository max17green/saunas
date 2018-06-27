$('.works-top-gallery').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});

$('.baths-top-gallery').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});

$('.finnish-slides img').click(function(event) {
	$('.finnish-current-slide').attr('src', event.target.src);
});

$('.bath-slides img').click(function(event) {
    $('.bath-current-slide').attr('src', event.target.src);
});

$('.fa.fa-bars').click(function() {
	$('.wr-nav nav ul').slideToggle();
});

$('.reviews-comments').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<i class="fa fa-angle-left"></i>',
    nextArrow: '<i class="fa fa-angle-right"></i>',
    dots: false,
    responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
    ]
});