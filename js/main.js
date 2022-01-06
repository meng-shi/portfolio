$(document) .ready(function() {
   /*Sidebar Menu*/
   "use strict";

   /*Preloader*/
   $(".preloader-wrap").delay(1500).fadeOut('slow');

   /*Navigation*/
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
   });

  $(window).scroll(function() {
    var nav = $('.navbar');
    var top = 70;
    if ($(window).scrollTop() >= top) {

        nav.addClass('inbody');

    } else {
        nav.removeClass('inbody');
    }
  });

  $('body').scrollspy({ target: '.navbar-nav' })

   // skills chart
  $(document).ready(function(e) {
  //var windowBottom = $(window).height();
  var index=0;
  $(document).scroll(function(){
    var top = $('#skills').height()-$(window).scrollTop();

    if(top<-300){
      if(index==0){

        $('.chart').easyPieChart({
          easing: 'easeOutBounce',
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });

        }
      index++;
    }
  })

  });

  /*Swiper*/
   var swiper = new Swiper('.swiper', {
     autoplay: {
      delay: 4000,
    },
   });



   $(function() {
      $('.selector').animatedHeadline({
        animationType: 'rotate-2'
      });
   })

   var filterizd = $('.items').filterizr({ })

});
});
