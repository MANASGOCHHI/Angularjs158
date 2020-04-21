 $(document).ready(function() {
$(".tabContents").hide(); // Hide all tab conten divs by default
		$(".tabContents:first").show(); // Show the first div of tab content by default		
		$("#tabContaier ul li a").click(function(e){ //Fire the click event
			e.preventDefault();/*amar creat this code using # patern close the */
			var activeTab = $(this).attr("href"); // Catch the click link
			$("#tabContaier ul li a").removeClass("active"); // Remove pre-highlighted link
			$(this).addClass("active"); // set clicked link to highlight state
			$(".tabContents").hide(); // hide currently visible tab content div
			$(activeTab).fadeIn(); // show the target tab content div by matching clicked link.
		});
	
	$("#back-to-top").hide();	
	$(function(){
	 $(window).scroll(function(){
	 if($(window).scrollTop()>100){
		 $("#back-to-top").fadeIn(1500);
		 }
		 else{
			 $("#back-to-top").fadeOut(1500);
			 }
			 });
	     $("#back-to-top").click(function(){
			$("body,html").animate({scrollTop:0},1000);
			return false
		});	
		});	
	
});

$(window).scroll(function(){
var scroll = $(window).scrollTop();
if(scroll > 100){
$(".headercnter").addClass("stripy");
	}
else{
$(".headercnter").removeClass("stripy")
	}
 });


$(function() {
var resmnu = $('.resmnu');
menu = $('nav ul');
menuHeight	= menu.height();

$(resmnu).on('click', function(e) {
e.preventDefault();
menu.stop().slideToggle(600);
});

$(window).resize(function(){
       	var w = $(window).width();
       	if(w > 479 && menu.is(':hidden')) {
       	menu.removeAttr('style');
       	}
   	});

$(".resmnu").click(function(){
$(this).toggleClass('close');
});

$(".mebcliin").click(function(){
 $(this).next().slideToggle(1000);
 });

$(".conttab").first().show();
$(".toptabs ul li").first().addClass("tact");
$(".toptabs ul li").click(function(e){
$(".toptabs ul li").removeClass("tact");
$(".conttab").hide();
$($('a', this).attr('href')).fadeIn();
$(this).addClass("tact");
e.preventDefault();
});

});


$(document).ready(function(e) {
   $('.block_link_list a').on('click', function(){
   var target = $(this).attr('rel');
   if(target != "")
   {
   $(".wrapper #"+target).show().siblings("div").hide();
  
   $(".block_link_list li #"+target).removeClass('unactive');
   $(".block_link_list li #"+target+" div").addClass('arrow');
   
   }
   else
   {
	   $(".wrapper div").show();
   }
});
   
  
   	/*$(".countslid").click(function(){
		$(".slidarea").slideToggle(500);
	  	$(".slidarea ul").on("click", "li", function(event){
		   var mo = $(this).html();	
		$(".countslid").html(mo);
		$(".slidarea").slideUp(500);
		});
	  });*/

           $(".countslid").click(function(){

		$(".slidarea").slideToggle(500);

	  	$(".slidarea ul").on("click", "li", function(event){

		   var mo = $(this).html();	

			$(".countslid").html(mo);

			$(".slidarea").slideUp(500);
		
			var newcuntoname = $(this).text();
		    if(newcuntoname=="USA" ||  newcuntoname=="US")
				{
					
					$("#phone").show();
					$("#phonein").hide();
					$("#email").hide();
				}
				else if(newcuntoname=="IN")
					{
						 //$("#phone").val("xxx-xxx-xxxx"); 
						$("#phone").hide();
						$("#phonein").show();
						$("#email").hide();
					}
				else
				{
					$("#phonein").hide();
					$("#phone").hide();
					$("#email").show();
				}

		});

	  });
          $(document).ready(function(){
	  var cuntoname = $(".countslid span").text();
		if(cuntoname=="USA" ||  cuntoname=="US")
		{
					$("#phone").val("xxx-xxx-xxxx");  
					$("#phone").show();
					$("#phonein").hide();
					$("#email").hide();
		}
		else if(cuntoname=="IN")
		{
						 $("#phone").val("xxx-xxx-xxxx"); 
						$("#phone").hide();
						$("#phonein").show();
						$("#email").hide();
		}
		else
		{
					$("#phonein").hide();
					$("#phone").hide();
					$("#email").show();
		}
	
             });
	 
	 $(".menu-link").click(function(){
	$(this).toggleClass("ttd");
									});
	 
	 $(".cleanloop").click(function(){	
		$(this).next().slideToggle(1000);
	});
	 $(".mclose").click(function(){
		$(".cleanarea").slideUp(1000);				 
	});
   
});


 $(document).ready(function() {
            $('.menu-link').bigSlide();
        });
		(function($) {
  'use strict';

  $.fn.bigSlide = function(options) {
    // store the menuLink in a way that is globally accessible
    var menuLink = this;

    // plugin settings
    var settings = $.extend({
      'menu': ('#menu'),
      'push': ('.push'),
      'side': 'right',
      'menuWidth': '15.625em',
      'speed': '300',
      'state': 'closed'
    }, options);

    // store the menu's state in the model
    var model = {
      'state': settings.state
    };

    // talk back and forth between the view and state
    var controller = {
      init: function(){
        view.init();
      },
      // update the menu's state
      changeState: function(){
        if (model.state === 'closed') {
          model.state = 'open'
        } else {
          model.state = 'closed'
        }
      },
      // check the menu's state
      getState: function(){
        return model.state;
      }
    };

    // the view contains all of the visual interactions
    var view = {
      init: function(){
        // cache DOM values
        this.$menu = $(settings.menu);
        this.$push = $(settings.push);
        this.width = settings.menuWidth;

        // CSS for how the menu will be positioned off screen
        var positionOffScreen = {
          'position': 'fixed',
          'top': '0',
          'bottom': '0',
          'height': '100%'
        };

        // manually add the settings values
        positionOffScreen[settings.side] = '-' + settings.menuWidth;
        positionOffScreen.width = settings.menuWidth;

        // add the css values to position things offscreen
        if (settings.state === 'closed') {
          this.$menu.css(positionOffScreen);
          this.$push.css(settings.side, '0');
        }

        // css for the sliding animation
        var animateSlide = {
          '-webkit-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-moz-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-ms-transition': settings.side + ' ' + settings.speed + 'ms ease',
          '-o-transition': settings.side + ' ' + settings.speed + 'ms ease',
          'transition': settings.side + ' ' + settings.speed + 'ms ease'
        };

        // add the animation css
        this.$menu.css(animateSlide);
        this.$push.css(animateSlide);

        // register a click listener for desktop & touchstart for mobile
        menuLink.on('click.bigSlide touchstart.bigSlide', function(e) {
          e.preventDefault();
          if (controller.getState() === 'open') {
            view.toggleClose();
          } else {
            view.toggleOpen();
          }
        });
      },

      // toggle the menu open
      toggleOpen: function() {
        controller.changeState();
        this.$menu.css(settings.side, '0');
        this.$push.css(settings.side, this.width);
        //menuLink.addClass(settings.activeBtn);
      },

      // toggle the menu closed
      toggleClose: function() {
        controller.changeState();
        this.$menu.css(settings.side, '-' + this.width);
        this.$push.css(settings.side, '0');
        //menuLink.removeClass(settings.activeBtn);
      }

    }

    controller.init();

  };

}(jQuery));



$(document).ready(function(){
$(".tt1").click(function(){
$(".tt1n").animate({height:'100%'}, 1000);
$(".tt2n").animate({height:'0%'}, 1000);
$(".tt3n").animate({height:'0%'}, 1000);
 });
$(".tt2").click(function(){
$(".tt2n").animate({height:'100%'}, 1000);
$(".tt1n").animate({height:'0%'}, 1000);
$(".tt3n").animate({height:'0%'}, 1000);
 });

$(".tt3").click(function(){
$(".tt3n").animate({height:'100%'}, 1000);
$(".tt2n").animate({height:'0%'}, 1000);
$(".tt1n").animate({height:'0%'}, 1000);
 });

$(".mln1").mouseenter(function(){
$(".mln_1").animate({height:'100%'}, 500);
$(".mln_2").animate({height:'0%'}, 500);
$(".mln_3").animate({height:'0%'}, 500);
$(".mln_4").animate({height:'0%'}, 500);
 });

$(".mln1").mouseleave(function(){
$(".mln_1").animate({height:'0%'}, 500);					   
});

$(".mln2").mouseleave(function(){
$(".mln_2").animate({height:'0%'}, 500);					   
});

$(".mln3").mouseleave(function(){
$(".mln_3").animate({height:'0%'}, 500);					   
});

$(".mln4").mouseleave(function(){
$(".mln_4").animate({height:'0%'}, 500);					   
});

$(".mln2").mouseenter(function(){
$(".mln_1").animate({height:'0%'}, 500);
$(".mln_2").animate({height:'100%'}, 500);
$(".mln_3").animate({height:'0%'}, 500);
$(".mln_4").animate({height:'0%'}, 500);
 });

$(".mln3").mouseenter(function(){
$(".mln_1").animate({height:'0%'}, 500);
$(".mln_2").animate({height:'0%'}, 500);
$(".mln_3").animate({height:'100%'}, 500);
$(".mln_4").animate({height:'0%'}, 500);
 });

$(".mln4").mouseenter(function(){
$(".mln_1").animate({height:'0%'}, 500);
$(".mln_2").animate({height:'0%'}, 500);
$(".mln_3").animate({height:'0%'}, 500);
$(".mln_4").animate({height:'100%'}, 500);
 });
 });
