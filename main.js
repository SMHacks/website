$('html,body').css('display','none').fadeIn(1000)
$(window).on('load scroll',function(){
	$('.navbar-brand').css('color',$(this).scrollTop()>$(this).height()-30?'#ff7242':'#ffffff')
})