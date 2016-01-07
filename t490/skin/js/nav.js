
$(document).ready(function(){
	$(function(){
		$('.footnav ul li:last').css('margin-right','0');
		$('.proul li:even').css('margin-right','3.5%');
		$(".searcharea .pronavbut").click(function(){
		$(".view_menumain").slideToggle(500)
		});
		
	});	
	
	$(".first").pageslide();//menu
	$(".second").pageslide({ direction: "left", modal: true });
	$(".news_pro li:last").css('float','right')
	$(".proul li:even").css('margin-right','3%')


});
	