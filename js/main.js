$(document).on("ready",function(){

	/* smoth scroll in the nav */
	$(function() {
	  $('a[href*=#]:not([href=#carousel-larem])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	/* smoth scroll in the nav */

	/* navar cnage style with scroll*/

	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("navbar-change");
	    } else {
	        $(".navbar-fixed-top").removeClass("navbar-change");
	    }
	});

	/* end navar cnage style with scroll*/

	/* collapse bootstrap */ 
	$('.collapse').collapse()
	/* end collapse bootstrap */

	/* cuntTo initializate */
	$(function (){
		$("#solving").waypoint(function(){
			$(".timer").countTo();
		})
	})
	/* end counTo */
});