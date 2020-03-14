$(document).ready(function(){
    scroller.init();
   
        
    $(".menu-toggle").click(function(){
        $(".menu-toggle").toggleClass('active');
        $(".menu").toggleClass('active');
    })
     // gọi plugin
     $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
    
        // nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:2,
               
            },
            1000:{
                items:4,
              
               
            }
        }
    });
  });