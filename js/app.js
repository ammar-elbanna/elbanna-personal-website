$(function(){


	
// Trigger Carousel Slider
	$('.carousel').carousel({
			interval: 10000
			
		});

// Navbar Links
	$('.navbar .nav li').click(function(){
		$('.navbar .nav li').removeClass('active');
		$(this).addClass('active');

		if($(this).attr('data-distination')){
			$('html , body').animate({
			scrollTop:  $('#'+$(this).data('distination')).offset().top - $('.navbar').height()
			},1000);
		}
	});

	// $('.navbar .dropdown-menu li').click(function(){
	// 	$('.navbar button.navbar-toggle').click()
	// })

/* 
	Theme Colors
 */

 	// Gear Icon Click
 	$('.theme .colors .icon').click(function(){
 		if($(this).hasClass('closed')){
 			$(this).parent().parent().css({
 			'left':0
 			});
 			$(this).removeClass('closed')
 		}
 		else{
 			$(this).parent().parent().css({
 			'left':-150
 			});
 			$(this).addClass('closed')
 		}
 	});


 	// Change Theme Colors
 	var scroll_color = $('.theme .colors ul li.active').data('scroll');
 	var	styles = "<style id='current_css' type='text/css'>body::-webkit-scrollbar { display: block; } body::-webkit-scrollbar-thumb{background-color:"+scroll_color+";}  body::-webkit-scrollbar-track {background: #ededed66;display:block}</style>";  

 	$('.theme .colors ul li').click(function(){
 		$('#themes').attr('href',$(this).data('color'));
 		$('.theme .colors ul li').removeClass('active');
 		$(this).addClass('active');
 		scroll_color = $(this).data('scroll');
 		styles = "<style id='current_css' type='text/css'>body::-webkit-scrollbar { display: block; } body::-webkit-scrollbar-thumb{background-color:"+scroll_color+";}  body::-webkit-scrollbar-track {background: #ededed66;display:block}</style>";  
 	});


	/* Scroll Stop */
	var scrollStop = function ( callback ) {

		// Make sure a valid callback was provided
		if ( !callback || Object.prototype.toString.call( callback ) !== '[object Function]' ) return;

		// Setup scrolling variable
		var isScrolling;

		// Listen for scroll events
		window.addEventListener('scroll', function ( event ) {

			// Clear our timeout throughout the scroll
			window.clearTimeout( isScrolling );

			// Set a timeout to run after scrolling ends
			isScrolling = setTimeout(function() {

				// Run the callback
				callback();

			}, 66);

		}, false);
	};


 	var styles_off = "<style id='current_css' type='text/css'>body::-webkit-scrollbar { display: block; }  </style>"
	$(window).on('scroll',function(){
		if($('#current_css').length){
			$('#current_css').replaceWith(styles)
		}
		else{
			$(styles).appendTo('head');
		}
	})
	scrollStop(function(){

		// $('#current_css').remove()
		$('#current_css').replaceWith(styles_off);

	})



});