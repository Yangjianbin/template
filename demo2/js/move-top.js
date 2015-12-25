/*  */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);


s
             /*this is form*/
$(document).ready(function() {
    $('input[title]').each(function() {
        if($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function() {
            if($(this).val() === $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });

        $(this).blur(function() {
            if($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
    $('textarea[title]').each(function() {
        if($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function() {
            if($(this).val() === $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });

        $(this).blur(function() {
            if($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
});
<!-- ------------------- FORM TEXT STYLE END ------------------- -->

<!-- ------------------- FORM SUBMIT START ------------------- -->
$(document).ready(function() {
    $('#submitform').ajaxForm({
        target: '#error',
        success: function() {
            $('#error').toggle().fadeIn('slow');
        }
    });
});
<!-- ;