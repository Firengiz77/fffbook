$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      nav:true
     
    });
  });


  $(document).ready(function(){
    $("#banner,owl-carousel").owlCarousel({
      items:2,
      loop:true,
      autoplay:true,
      nav:false,
      dots:false

    });
  });
  // $(document).ready(function(){
  //   $(".navbar-brand").on("click",function(){
  //     $("nav ul").toggleClass("showing");
  //   });
  // });

  //   $(window).on("scroll",function(){
  //        if(($window).scrollTop()){
  //          $('nav').addClass('black');
  //        }
  //        else{
  //          $('nav').removeClass('black');
  //        }


  //   })

  // $(document).ready(function(){
  //   var docEl = $(document),
  //       headerEl = $('header'),
  //       headerWrapEl = $('.wrapHead'),
  //       navEl = $('nav'),
  //       linkScroll = $('.scroll');
    
  //   docEl.on('scroll', function(){
  //     if ( docEl.scrollTop() > 60 ){
  //       headerEl.addClass('fixed-to-top');
  //       headerWrapEl.addClass('fixed-to-top');
  //       navEl.addClass('fixed-to-top');
  //     }
  //     else {
  //       headerEl.removeClass('fixed-to-top');
  //       headerWrapEl.removeClass('fixed-to-top');
  //       navEl.removeClass('fixed-to-top');
  //     }
  //   });
    
  //   linkScroll.click(function(e){
  //       e.preventDefault();
  //       $('body, html').animate({
  //          scrollTop: $(this.hash).offset().top
  //       }, 500);
  //    });
  // });

  // window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
  