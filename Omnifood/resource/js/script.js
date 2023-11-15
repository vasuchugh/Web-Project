$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
        if(direction=='down'){
            $('nav').addClass('sticky')
        }
        else{
            $('nav').removeClass('sticky')
        }
    },
    {
     offset: '60px;'   
    })
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    })
    $('.js--scroll-to-features').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    })
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    $('.js--features-animate').waypoint(function(direction){
        $('.js--features-animate').addClass('animated animate__fadeIn')
    }, {
        offset:'50%'
    })
    $('.js--phone-animate').waypoint(function(direction){
        $('.js--phone-animate').addClass('animated animate__fadeInUp')
    }, {
        offset:'50%'
    })
    $('.js--cities-animate').waypoint(function(direction){
        $('.js--cities-animate').addClass('animated animate__fadeIn')
    }, {
        offset:'50%'
    })
    $('.js--plan-animate').waypoint(function(direction){
        $('.js--plan-animate').addClass('animated animate__pulse')
    }, {
        offset:'50%'
    })
})
//var waypoints = $('#handler-first').waypoint(function(direction) {
//  notify(this.element.id + ' hit 25% from top of window') 
//}, {
//  offset: '25%'
//})