jQuery(document).ready(function() {
    jQuery('.js-full-select').select2();
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
      
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
     
    tippy('.tooltip-button', {
    content: 'ah ah ah ah!',
    trigger: 'click',
    });  
});

//transforms coube...........
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side....
changeSide();

radioGroup.addEventListener( 'change', changeSide );
//transform card flip..........
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});


