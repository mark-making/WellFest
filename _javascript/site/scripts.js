// http://idangero.us/swiper/api/

fetch('./js/speaker-profiles.json')

.then(function(response) {
  return response.json();
})

.then(function(data) {
  var startSlide = 1,
      imageSwiper = new Swiper('.image-slider', {
        slidesPerView: 'auto',
        spaceBetween: 5,
        initialSlide: startSlide,
        centeredSlides: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '">' + (data.speaker[index].time) + '</li>';
          },
        },  
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },      
        breakpoints: {
          // when window width is less than or equal to 768px
          768: {
            spaceBetween: 0,
            allowTouchMove: true,
          }
        }    
      });

  var speakerInfo = new Swiper('.details-slider', {
    initialSlide: startSlide,
    spaceBetween: 20,
    allowTouchMove: false,
    autoHeight: true,
    breakpoints: {
      // when window width is less than or equal to 768px
      768: {
        allowTouchMove: true,
      }
    }    
  });

  speakerInfo.controller.control = imageSwiper;
  imageSwiper.controller.control = speakerInfo;

  // console.log(data);

});

var scrollpos = window.scrollY,
    header = document.getElementById('site-logo'),
    header_height = 50,
    add_class_on_scroll = function add_class_on_scroll() {
      return header.classList.add('smaller');
    },
    remove_class_on_scroll = function remove_class_on_scroll() {
      return header.classList.remove('smaller');
    };
    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;
      if (scrollpos >= header_height) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });

objectFitImages();