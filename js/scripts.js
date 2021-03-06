/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
	
	//masonry
	$( document ).ready(function() {
		var container = document.querySelector('#masonry-grid');
		var msnry = new Masonry( container, {
		  // options
		  percentPosition: true
		  
		});
	});
	
	
})(jQuery); // End of use strict

//search
//expression to make it not case sensitive
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
//search function
$('#rechercher').on("keyup", function () {
    $('.mb-4').show();
    var filter = $(this).val();
   //$('.container').find(".card-title:not(:contains(" + filter + "))").parent().css('display','none');
   $(".mb-4:not(:contains("+filter+"))").hide()
   $('.masonry-grid').masonry({"percentPosition": true });
   console.log(filter)
});


//modal
$('#textModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  console.log(button)
  if(button[0]){
  var modal = $(this)
  $.get('text/'+button[0].dataset.post+'.html',function(t){
	  modal.find('.modal-body').html(t)
	  window.location.hash = button[0].dataset.post
  })
  }
})

$('#textModal').on('hidden.bs.modal', function (event) {
    window.location.hash = 'home'
})

if(window.location.hash && window.location.hash !== '#home') {
  var n = window.location.hash.substring(1);
  console.log(n)
  $('#textModal').modal('show');
  $.get('text/'+n+'.html',function(t){
	  $('#textModal').find('.modal-body').html(t)
  })
} else {
  // Fragment doesn't exist
}



