/*
===========================================================================
  Template Name   : The9
===========================================================================
*/

(function($){
	"use strict";
	var THE = {};
	var plugin_track = urx + '/asset/static//plugin/';
	$.fn.exists = function () {
        return this.length > 0;
    };

	/* ---------------------------------------------- /*
	 * Pre load
	/* ---------------------------------------------- */
	THE.PreLoad = function() {
		document.getElementById("loading").style.display = "none"; 
	}

    /*--------------------
        * Menu Close
    ----------------------*/
    THE.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	THE.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	/*--------------------
        * One Page
    ----------------------*/
    THE.OnePage = function(){
        $('header a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"]), a.mouse[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 70,
                      }, 1000);
                      return false;
                  }
            }
        });
    }


	THE.HeaderHeight = function(){
		var HHeight = $('.header-height .fixed-header-bar').height()
	    $('.header-height').css("min-height", HHeight);	
	}

	/* ---------------------------------------------- /*
	 * Mega Menu
	/* ---------------------------------------------- */

	THE.MegaMenu = function() {
		var mDropdown = $(".px-nav-toggle") 
		mDropdown.on("click", function() {
	        $(this).parent().toggleClass("open-menu-parent");
	        $(this).next('ul').toggleClass("open-menu");
	        $(this).toggleClass("open");
	    });
	}
	/* ---------------------------------------------- /*
		* accordion
	/* ---------------------------------------------- */
	THE.Accordion = function() {
		$('.accordion').each(function (i, elem) {
	       	var $elem = $(this),
	           $acpanel = $elem.find(".acco-group > .acco-des"),
	           $acsnav =  $elem.find(".acco-group > .acco-heading");
	          $acpanel.hide().first().slideDown("easeOutExpo");
	          $acsnav.first().parent().addClass("acco-active");
	          $acsnav.on('click', function () {
	            if(!$(this).parent().hasClass("acco-active")){
	              var $this = $(this).next(".acco-des");
	              $acsnav.parent().removeClass("acco-active");
	              $(this).parent().addClass("acco-active");
	              $acpanel.not($this).slideUp("easeInExpo");
	              $(this).next().slideDown("easeOutExpo");
	            }else{
	               $(this).parent().removeClass("acco-active");
	               $(this).next().slideUp("easeInExpo");
	            }
	            return false;
	        });
	    });

    $('.accordion-close').each(function (i, elem) {
          var $elem = $(this),
             $acpanel = $elem.find(".acco-group > .acco-des"),
             $acsnav =  $elem.find(".acco-group > .acco-heading");
            
            //$acpanel.hide().first().slideDown("easeOutExpo");
            //$acsnav.first().parent().addClass("acco-active");

            $acsnav.on('click', function () {
              if(!$(this).parent().hasClass("acco-active")){
                var $this = $(this).next(".acco-des");
                $acsnav.parent().removeClass("acco-active");
                $(this).parent().addClass("acco-active");
                $acpanel.not($this).slideUp("easeInExpo");
                $(this).next().slideDown("easeOutExpo");
              }else{
                 $(this).parent().removeClass("acco-active");
                 $(this).next().slideUp("easeInExpo");
              }
              return false;
          });
      });
	}

	/*--------------------
    * Counter JS
    ----------------------*/
	 THE.Counter = function () {
	  var counter = jQuery(".counter");
	  var $counter = $('.counter');
	  if(counter.length > 0) {  
	      loadScript(plugin_track + 'counter/jquery.countTo.js', function() {
	        $counter.each(function () {
	         var $elem = $(this);                 
	           $elem.appear(function () {
	             $elem.find('.count').countTo({
	             	speed: 2000,
    				refreshInterval: 10
	             });
	          });                  
	        });
	      });
	    }
	  }


    /*--------------------
    * Typed
    ----------------------*/
    THE.typedbox = function () {
      var typedjs = jQuery('.typed');
      if(typedjs.length > 0) {  
         loadScript(plugin_track + 'typed/typed.js', function() {
           typedjs.each(function () {
              var $this = $(this);
              $this.typed({
              strings: $this.attr('data-elements').split(','),
              typeSpeed: 150, // typing speed
              backDelay: 500 // pause before backspacing
              });
           }); 
         });
      }
    }

    /*--------------------
    * OwlSlider
    ----------------------*/
    THE.Owl = function () {
      var owlslider = jQuery("div.owl-carousel");
      if(owlslider.length > 0) {  
         loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
           owlslider.each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1,
                $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                $stage = ($this.attr('data-stage')) ? $this.data('stage') : 0,
                $space = ($this.attr('data-space')) ? $this.data('space') : 30;    
           
                $(this).owlCarousel({
                    loop: $loop,
                    items: $items,
                    responsive: {
                      0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                      480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                      768:{items: $this.data('sm-items') ? $this.data('sm-items') : 1},
                      980:{items: $this.data('md-items') ? $this.data('md-items') : 1},
                      1200:{items: $items}
                    },
                    dots: $navdots,
                    autoplayTimeout:$autospeed,
                    smartSpeed: $smartspeed,
                    autoHeight:$autohgt,
                    center:$CenterSlider,
                    margin:$space,
                    stagePadding:$stage,
                    nav: $navarrow,
                    navText:["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
                    autoplay: $autoplay,
                    autoplayHoverPause: true   
                }); 
           }); 
         });
      }
    }

	/* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    THE.Gallery = function() {
    	if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()){
    		loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
    			if($(".lightbox-gallery").exists()){
    				$('.lightbox-gallery').magnificPopup({
				        delegate: '.gallery-link',
				        type: 'image',
				        tLoading: 'Loading image #%curr%...',
				        mainClass: 'mfp-fade',
				        fixedContentPos: true,
				        closeBtnInside: false,
				        gallery: {
				            enabled: true,
				            navigateByImgClick: true,
				            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
				        }
				    });	
    			}
    			if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
		            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		                  disableOn: 700,
		                  type: 'iframe',
		                  mainClass: 'mfp-fade',
		                  removalDelay: 160,
		                  preloader: false,
		                  fixedContentPos: false
		            });
		        }
    		});
    	}
    }

     /*--------------------
    * Masonry
    ----------------------*/
    THE.masonry = function () {
    	var portfolioWork = $('.portfolio-content');
    	if ($(".portfolio-content").exists()){
    		loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
    			if ($(".portfolio-content").exists()){
					    $(portfolioWork).isotope({
					      resizable: false,
					      itemSelector: '.grid-item',
					      layoutMode: 'masonry',
					      filter: '*'
					    });
					    //Filtering items on portfolio.html
					    var portfolioFilter = $('.filter li');
					    // filter items on button click
					    $(portfolioFilter).on( 'click', function() {
					      var filterValue = $(this).attr('data-filter');
					      portfolioWork.isotope({ filter: filterValue });
					    });
					    //Add/remove class on filter list
					    $(portfolioFilter).on( 'click', function() {
					      $(this).addClass('active').siblings().removeClass('active');
					    });
    			}
    		});
    	}
	}

	/*--------------------
        * Progress Bar 
    ----------------------*/
    THE.ProgressBar = function(){
        $(".skill-bar .skill-bar-in").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
        * pieChart
    ----------------------*/
    THE.pieChart = function () {
    	var $Pie_Chart = $('.pie_chart_in');
        if ($Pie_Chart.exists()) {
            loadScript(plugin_track + 'easy-pie-chart/jquery.easypiechart.min.js', function() {
            $Pie_Chart.each(function () {
                var $elem = $(this),
                    pie_chart_size = $elem.attr('data-size') || "160",
                    pie_chart_animate = $elem.attr('data-animate') || "2000",
                    pie_chart_width = $elem.attr('data-width') || "6",
                    pie_chart_color = $elem.attr('data-color') || "#84ba3f",
                    pie_chart_track_color = $elem.attr('data-trackcolor') || "rgba(0,0,0,0.10)",
                    pie_chart_line_Cap = $elem.attr('data-lineCap') || "round",
                    pie_chart_scale_Color = $elem.attr('data-scaleColor') || "true";
                $elem.find('span, i').css({
                    'width': pie_chart_size + 'px',
                    'height': pie_chart_size + 'px',
                    'line-height': pie_chart_size + 'px',
                    'position': 'absolute'
                });
                $elem.appear(function () {
                    $elem.easyPieChart({
                        size: Number(pie_chart_size),
                        animate: Number(pie_chart_animate),
                        trackColor: pie_chart_track_color,
                        lineWidth: Number(pie_chart_width),
                        barColor: pie_chart_color,
                        scaleColor: false,
                        lineCap: pie_chart_line_Cap,
                        onStep: function (from, to, percent) {
                            $elem.find('span.middle').text(Math.round(percent));
                        }
                    });
               });
            });

         });
      }
    }

    /*--------------------
        * Countdown
    ----------------------*/
    var $count_timer = $('.count-down');
    THE.CountTimer = function () {
        if ($count_timer.exists()) {
            loadScript(plugin_track + 'count-down/jquery.countdown.min.js', function() {
				$('#clock_time').countdown('2020/10/11', function(event) {
				  var $this = $(this).html(event.strftime(''
				    + '<div class="date-box-1"><span>%D</span> <label>Days</label></div>'
				    + '<div class="date-box-1"><span>%H</span> <label>Hours</label></div>'
				    + '<div class="date-box-1"><span>%M</span> <label>Minutes</label></div>'
				    + '<div class="date-box-1"><span>%S</span> <label>Seconds</label></div>'));
				});
            });
        }
    }
    /*-----------------------
    * SVG
    -------------------------*/
    var mySVGsToInject = document.querySelectorAll('.svg_img, .svg_icon');
    THE.SVGbx = function () {
      if ($(".svg_img, .svg_icon").exists()){
        loadScript(plugin_track + 'svginjector/svg-injector.min.js', function() {
          SVGInjector(mySVGsToInject);
        });
      }
    }
    /*--------------------
        * particles
    ----------------------*/
    THE.particles = function() {
      if ($("#particles-box").exists()){
        loadScript(plugin_track + 'particles/particles.min.js', function() {
        });
        loadScript(plugin_track + 'particles/particles-app.js', function() {
        });
      }
    }
    /*--------------------
        * Parallax
    ----------------------*/
    THE.parallax = function() {
      if ($(".parallax").exists() || $(".parallax-img").exists()){
        loadScript(plugin_track + 'jarallax/jarallax-all.js', function() {
          jarallax(document.querySelectorAll('.parallax'));
          
          jarallax(document.querySelectorAll('.parallax-img'), {
            keepImg: true,
          });
        });
      }
    }
    /*-----------------------
    * Cookis
    -------------------------*/
    THE.Cookis = function () {
      loadScript(plugin_track + 'cookie/herbyCookie.js', function() {
        $(document).herbyCookie({
            btnText: "Accept",
            policyText: "Privacy policy",
            text: "We use cookies to ensure you get the best experience on our website, if you continue to browse you'll be acconsent with our",
            scroll: false,
            expireDays: 30,
            link: urx + '/privacy/'
        });
      });
    }

	/* ---------------------------------------------- /*
	 * All Functions
	/* ---------------------------------------------- */
    // loadScript
	var _arr  = {};
	function loadScript(scriptName, callback) {
	    if (!_arr[scriptName]) {
	      _arr[scriptName] = true;
	      var body    = document.getElementsByTagName('body')[0];
	      var script    = document.createElement('script');
	      script.type   = 'text/javascript';
	      script.src    = scriptName;
	      // then bind the event to the callback function
	      // there are several events for cross browser compatibility
	      // script.onreadystatechange = callback;
	      script.onload = callback;
	      // fire the loading
	      body.appendChild(script);
	    } else if (callback) {
	      callback();
	    }
	};

	// Window on Load
	$(window).on("load", function(){
		THE.masonry(),
		THE.PreLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){
		THE.pieChart(),
		THE.CountTimer(),
    THE.SVGbx(),
		THE.HeaderFixd(),
		THE.OnePage(),
		THE.Accordion(),
		THE.Counter(),
		THE.MenuClose(),
		THE.Gallery(),
		THE.HeaderHeight(),
		THE.MegaMenu(),
		THE.ProgressBar(),
    THE.particles(),
    THE.parallax(),
    THE.Cookis(),
    THE.typedbox(),
		THE.Owl();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		THE.ProgressBar(),
		THE.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function(){
		THE.HeaderHeight();
	});

  // Document on click
  $(document).on('click', function (e){
    var menu_opened = $('.cs-dropdown').hasClass('show');
    if(!$(e.target).closest('.cs-dropdown').length &&
        !$(e.target).is('.cs-dropdown') &&
        menu_opened === true){
            $('.cs-dropdown').collapse('hide');
    }
  });

})(jQuery);