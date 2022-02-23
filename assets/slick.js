/*$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows:false,
    autoplay:true,
    autoplayspeed: 2000,
    centerMode: true,
    centerPadding: '40px',
  });*/

  $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });