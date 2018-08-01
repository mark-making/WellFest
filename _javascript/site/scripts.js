fetch('./js/speaker-profiles.json')

.then(function(response) {
  return response.json();
})

.then(function(data) {

  var imageSwiper = new Swiper('.image-slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    initialSlide: 2,
    roundLengths: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<li class="' + className + '">' + (data.speaker[index].time) + '<br/>' + (data.speaker[index].name) + '</li>';
      },
    },  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }    
  });

  var speakerInfo = new Swiper('.details-slider', {
    initialSlide: 2,
    spaceBetween: 20,
  });

  speakerInfo.controller.control = imageSwiper;
  imageSwiper.controller.control = speakerInfo;

  console.log(data);

});


// (index + 1)


objectFitImages();