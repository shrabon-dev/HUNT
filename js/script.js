setTimeout(function(){
  $(".preloader").fadeOut()
},4000)

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },3000)
})



$(window).scroll(function(){
    if($(window).scrollTop()>750){
      $(".backtotop").fadeIn()
    }else(
      $(".backtotop").fadeOut()
    )
 
    if($(window).scrollTop()>300){
      $(".menu").addClass("fixedmenu")
    }else(
      $(".menu").removeClass("fixedmenu")
    )


})



// $(window).scroll(function(){
//   console.log($(window).scrollTop())
// })






$(".banner-slider").slick({
    arrows: true,
    prevArrow:'<i class="fas fa-arrow-left prev"></i>',
    nextArrow:'<i class="fas fa-arrow-right next"></i>',
    fade:true,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 576,
        settings:{
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          arrows: false,
        }
      }
    ]
})

$(".port-slider").slick({
    slidesToShow: 4,
    arrows: false,
    dots:false,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
})

$(".service-slider").slick({
    slidesToShow: 3,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    nextArrow:'<i class="fas fa-angle-down prev"></i>',
    prevArrow:'<i class="fas fa-angle-up next"></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false
          }
        }
      ]
})

$(".img-slider").slick({
    slidesToShow: 3,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".details-slider",
    nextArrow:'<i class="fas fa-angle-down prev"></i>',
    prevArrow:'<i class="fas fa-angle-up next"></i>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
           
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
          }
        }
      ]
})

$(".details-slider").slick({
    arrows: false,
    asNavFor: ".img-slider",
    fade: true,
})

$('.venobox').venobox(); 

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".member-slider").slick({
    slidesToShow: 4,
    arrows:false,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,

          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
       
      ]
})

$(".sponsor-slider").slick({
    slidesToShow: 5,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
})