/*html을 다 읽고 실행하라는 의미*/
$(function(){  
  /* Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  })
  $('section, .menu a').click(function(){
    $('.trigger').removeClass('active');
    $('.gnb').removeClass('active');
  })

  /* Smooth Scrolling*/
  $('.menu a, .gototop').click(function(e){
    $.scrollTo(this.hash || 0, 900)
  })
  
  /* Change Css with Scroll*/
  $(window).scroll(function(){
    if ( $(window).scrollTop() > 50 ) {
      $('header, .gototop').addClass('active');
    }
    else {
      $('header, .gototop').removeClass('active');
    }
  })
})