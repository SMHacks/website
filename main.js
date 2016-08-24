$('.loading').css('display','inline-block')
$('nav').data('offset-top',$(window).height())
$('html,body').css('overflow-y','hidden')
$(window).width()<768&&($('.scrollme').removeClass('scrollme'),$('.animateme').removeClass('animateme'))
$(window).load(function(){
  scrollme.init()
  $('.circle').delay(500).animate({
    height:'2000px',
    width:'2000px',
    opacity:1
  },1000).promise().done(function(){
    scrollTo(0,0)
    $('.loading').fadeOut(1000).promise().done(function(){
      $('html,body').css('overflow-y','auto')
    })
  })
  $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
      $('.navbar-toggle').click()
      target=$(this.hash)
      target=target.length?target:$('[name='+this.hash.slice(1)+']')
      if(target.length){
        $('html,body').animate({
          scrollTop:target.offset().top-70
        },1000)
        return false
      }
    }
  })
  $(window).scroll(function(){
    ch=$(window).scrollTop()>=$('#faq').offset().top-200&&$(window).scrollTop()<$('#schedule').offset().top-500?'#EE6352'
      :$(window).scrollTop()>=$('#schedule').offset().top-500&&$(window).scrollTop()<$('#sponsors').offset().top-500?'#59CD90'
      :$(window).scrollTop()>=$('#sponsors').offset().top-500&&$(window).scrollTop()<$('#partners').offset().top-500?'#3FA7D6'
      :$(window).scrollTop()>=$('#partners').offset().top-500&&$(window).scrollTop()<$('#team').offset().top-500?'#FAC05E'
      :$(window).scrollTop()>=$('#team').offset().top-500&&$(window).scrollTop()<$('#update').offset().top-500&&$(window).scrollTop()!=$(document).height()-$(window).height()?'#F79D84'
      :'#ff7242'
    $('.change').stop().animate({backgroundColor:ch},50)
  })
  $('#s').click(function(){
    $.post('https://smhacks-molarmanful.rhcloud.com/',{email:$('#u').val()},function(x){
      $('#a').text(x).slideDown(100).addClass(x.match(/email/i)?'alert-danger':'alert-success').removeClass(x.match(/email/i)?'alert-success':'alert-danger').promise().done(function(){
        $('#a').hasClass('alert-success')&&$('#u,#s').attr('disabled','true')
				$('#a').delay(4000).slideUp(200)
      })
    })
  })
  $('.member').mouseenter(function(){
    $(this).find('.social').fadeTo(100,1)
  })
  $('.member').mouseleave(function(){
    $(this).find('.social').fadeTo(100,.01)
  })
  $('.anthony').mouseenter(function(){
    $(this).find('img').attr('src','anthony2.jpg')
  })
  $('.anthony').mouseleave(function(){
    $(this).find('img').attr('src','anthony.png')
  })
  $('.kevinf').mouseenter(function(){
    $(this).find('img').attr('src','kevinf2.jpg')
  })
  $('.kevinf').mouseleave(function(){
    $(this).find('img').attr('src','kevinf.jpg')
  })
})
