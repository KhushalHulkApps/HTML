var swiper = new Swiper(".promo-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    speed: 3000,
   
  });


  var swiper = new Swiper(".home-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    speed: 3000,
   
  });



  var swiper = new Swiper(".brand-slider", {
    loop: true,
    spaceBetween: 15,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 7,
      },
      768: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 4,
      },
    },
  });
  
  var swiper = new Swiper(".review-slider", {
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
   
  });



  var swiper = new Swiper(".bestseller-slider", {
    loop: false,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,

      },
      768: {
        slidesPerView: 2,
       
      },
      991: {
        slidesPerView: 3,
       
      },
      1025: {
        slidesPerView: 4,
       
      },
    },
  });

  var swiper = new Swiper(".blog-slider", {
    loop: true,
    spaceBetween: 30,
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".instagram-slider", {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });


  var swiper = new Swiper(".thumbsSlider", {
    loop: true,
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".productintroSlider", {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },
  });






