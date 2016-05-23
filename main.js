$('html,body').css('display','none')
$('img').ready(function(){
	$('html,body').delay(500).fadeIn(1000)
})
$(window).on('load scroll',function(){
	$('.navbar-brand').css('color',$(this).scrollTop()>$(this).height()-30?'#ff7242':'#ffffff')
	$(this).width()<1360&&$('.navbar').css('display',$(this).scrollTop()>$(this).height()-30?'none':'inline-block')
})