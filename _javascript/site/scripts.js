var startSlide = 1,
    imageSwiper = new Swiper('.image-slider', {
      autoHeight: false,
      slidesPerView: 'auto',
      spaceBetween: 5,
      initialSlide: startSlide,
      centeredSlides: false, 
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


// initialize the scrollama

var step = document.getElementById('main'),
    graphic = document.getElementById('site-logo'),
    scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  // console.log(response);
  response.element.classList.add('is-active');
  graphic.classList.add('smaller');
}

function handleStepExit(response) {
  // response = { element, direction, index }
  // console.log(response);
  response.element.classList.remove('is-active');
  graphic.classList.remove('smaller');
}

function init() {

  // 1. setup the scroller with the bare-bones options
  // this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller.setup({
    offset: .1,
    step: '#main',
    graphic: '#site-logo', // required (for sticky),
    debug: false,
  })
  .onStepEnter(handleStepEnter)
  .onStepExit(handleStepExit);

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}

// kick things off
init();
	

try {
  if (typeof(objectFitImages) == 'undefined') {
    console.log('objectFitImages not instanced');
  }
  else
  {
    objectFitImages();
  }
}
catch(e){
  alert(e);
}
