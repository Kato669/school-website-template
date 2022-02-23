let date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

/* ========
 teachers ByteLengthQueuingStrategy
 ======*/
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
    slidesToScroll: 5,
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
  /*=======
  teachers end
  ======*/

  /*======
up arrow
=========*/
let TopBottom = document.getElementById('up-icon');
window.onscroll = ()=>{
   if(window.scrollY >= 130){
       TopBottom.classList.add('active');
       TopBottom.style.transition = `all 2s`
   }else{
      TopBottom.classList.remove('active');
   }
  
}
TopBottom.addEventListener('click',()=>{
   window.scrollTo({top:0, behavior:'smooth'})
})
/*======
up arrow end
=========*/