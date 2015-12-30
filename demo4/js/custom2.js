/* HTML document is loaded. DOM is ready.
 -------------------------------------------*/
$(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });

    $('body').bind('touchstart', function() {});

    /* wow
     -----------------*/
    new WOW().init();
});

