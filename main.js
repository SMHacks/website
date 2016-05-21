$(window).on('load scroll',function(){
	$('.navbar-brand').css('color',$(this).scrollTop()>$(this).height()-30?'#ff7242':'#ffffff')
	$(this).width()<1400&&$('.navbar').css('display',$(this).scrollTop()>$(this).height()-30?'none':'inline-block')
})