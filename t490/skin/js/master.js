$(document).ready(function(){

    /*var $window = $(window),

        window_width = $window.width(),

        window_height = $window.height();

    $('#js_banner, #js_banner_img li').width(window_width);

    //$(".banner_inner").css("height",window_height);

    var startFrame = 0;



    

        target: $('#js_banner_img li'),

        effect: 'slide3d',

        animateTime: 1000,

        stay: 4000,

        playTo: startFrame,

        autoPlay: true,

        merge: true,

        prevBtn: $('#js_banner_pre'),

        nextBtn: $('#js_banner_next')

    });

    $('#js_banner_img').css('left','-' + (window_width * startFrame) + 'px');*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

    $(".down").click(function(){$('body,html').animate({scrollTop:777},500)});
	
	//下面这些是我后添加的
	$(".jj01").click(function(){$('body,html').animate({scrollTop:1550},500)});
	$(".jj02").click(function(){$('body,html').animate({scrollTop:2328},500)});
	$(".jj03").click(function(){$('body,html').animate({scrollTop:3110},500)});
	$(".jj04").click(function(){$('body,html').animate({scrollTop:0},500)});
	
	
	
	
	
	
	

    $(window).scroll(function(){

        if ($(window).scrollTop()>200){

            $(".back_top").fadeIn(200);

        }else{

            $(".back_top").fadeOut(200);

        }

    });

    $('.back_top').click(function(){

        $('body,html').animate({scrollTop:0},500)

    });

    $("#scroll1").click(function(){$('body,html').animate({scrollTop:1554},500)});

    $("#scroll2").click(function(){$('body,html').animate({scrollTop:2331},500)});

    $("#scroll3,#scroll4").click(function(){$('body,html').animate({scrollTop:3108},500)});

    $(".nav li").hover(function(){

        $(this).addClass("hover");

        $(this).find("dl").stop(true,true).slideDown();

    },function(){

        $(this).removeClass("hover");

        $(this).find("dl").stop(true,true).slideUp();

    });



    $(".tab_con1_list li a").hover(function(){

        $(this).find(".search-btn").stop(true,true).animate({"top":"110px","opacity":"1"},200);

        $(this).find("span").stop(true,true).animate({"bottom":"0","opacity":"1"},200);

        $(this).find("h2").stop(true,true).animate({"bottom":"27px"},200);

    },function(){

        $(this).find(".search-btn").stop(true,true).animate({"top":"-59px","opacity":"0"},200);

        $(this).find("span").stop(true,true).animate({"bottom":"-27px","opacity":"0"},200);

        $(this).find("h2").stop(true,true).animate({"bottom":"0"},200);

    });



    $(".tab_btn1 a").click(function(){

        var $eq = $(this).index();

        $(".tab_btn1 a").removeClass("on");

        $(".tab_btn1 a").eq($eq).addClass("on");

        $(".tab_con1,.tab_con2").stop(true,true).slideUp(1000);

        var $eq1 = $eq + 1;

        $(".tab_con" + $eq1).stop(true,true).slideDown(1000);

    });

});

