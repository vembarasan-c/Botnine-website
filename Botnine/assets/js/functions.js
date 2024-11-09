/*
***
***
Name: 			functions.js
Written by: 	ThemeTrade 
Theme Version:	1.0.0
***
***
*/

(function($) {
	
		'use strict';
			
			var BasicFunction = function(){
				
				var checkSelectorExistence = function(selectorName) {
				  if(jQuery(selectorName).length > 0){return true;}else{return false;}
				};
				
				var setTestimonialCarousel = function() {
					if(!checkSelectorExistence('.testimonial-carousel')){return;}
					jQuery('.testimonial-carousel').owlCarousel({
						loop:true,
						autoplay:true,
						margin:40,
						nav:true,
						stagePadding: 100,
						dots:true,
						navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
						responsive:{
							0:{
								items:1,
								margin:20,
								stagePadding: 15
							},
							480:{
								items:1
							},			
							1024:{
								items:2
							},
							1200:{
								items:3
							}
						}
					});
					
				}
				
				var setTestimonialCarousel2 = function() {
					if(!checkSelectorExistence('.testimonial-carousel-2')){return;}
					jQuery('.testimonial-carousel-2').owlCarousel({
						loop:true,
						autoplay:true,
						center:true,
						margin:30,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:2
							},			
							1024:{
								items:2
							},
							1200:{
								items:3
							}
						}
					});
					
				}
				
				var setTestimonialCarousel3 = function() {
					if(!checkSelectorExistence('.testimonial-carousel-3')){return;}
					jQuery('.testimonial-carousel-3').owlCarousel({
						loop:true,
						autoplay:true,
						center:true,
						margin:30,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:1,
								stagePadding:50
							},			
							767:{
								items:2
							},
							1200:{
								items:3
							}
						}
					});
					
				}
				
				var caseStudiesCarousel = function() {
					if(!checkSelectorExistence('.case-studies-carousel')){return;}
					jQuery('.case-studies-carousel').owlCarousel({
						loop:true,
						center:true,
						autoplay:true,
						margin:20,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:1,
								stagePadding:50
							},
							480:{
								items:2
							},			
							1024:{
								items:3
							},
							1200:{
								items:4
							}
						}
					});
					
				}
				
				var clientLogo = function() {
					if(!checkSelectorExistence('.client-logo-carousel')){return;}
					jQuery('.client-logo-carousel').owlCarousel({
						loop:true,
						autoplay:true,
						margin:20,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:3
							},
							480:{
								items:4
							},			
							1024:{
								items:5
							},
							1200:{
								items:6
							}
						}
					});
					
				}
				
				var productCarousel = function() {
					if(!checkSelectorExistence('.product-carousel')){return;}
					jQuery('.product-carousel').owlCarousel({
						loop:true,
						autoplay:true,
						margin:30,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:2
							},			
							1024:{
								items:3
							},
							1200:{
								items:4
							}
						}
					});
					
				}
				
				var portfolioCarousel = function() {
					if(!checkSelectorExistence('.portfolio-carousel-1')){return;}
					jQuery('.portfolio-carousel-1').owlCarousel({
						loop:true,
						autoplay:true,
						margin:0,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:2
							},			
							1024:{
								items:3
							},
							1200:{
								items:4
							}
						}
					});
					
				}
				
				var portfolioCarousel1 = function() {
					if(!checkSelectorExistence('.portfolio-carousel-2')){return;}
					jQuery('.portfolio-carousel-2').owlCarousel({
						loop:true,
						center:true,
						autoplay:true,
						margin:15,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:1,
								stagePadding:60
							},
							480:{
								items:2
							},			
							1024:{
								items:2
							},
							1200:{
								items:2
							}
						}
					});
					
				}
				var portfolioCarousel2 = function() {
					if(!checkSelectorExistence('.portfolio-carousel-3')){return;}
					jQuery('.portfolio-carousel-3').owlCarousel({
						loop:true,
						autoplay:true,
						margin:4,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:2,
								margin:20
							},			
							1024:{
								items:3,
								margin:20
							},
							1200:{
								items:4
							}
						}
					});
					
				}
				
				var portfolioCarousel3 = function() {
					if(!checkSelectorExistence('.portfolio-carousel-4')){return;}
					jQuery('.portfolio-carousel-4').owlCarousel({
						loop:true,
						autoplay:true,
						margin:15,
						nav:false,
						dots:true,
						navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:2
							},			
							1024:{
								items:3
							},
							1200:{
								items:4
							}
						}
					});
					
					
				}
				
				var projectCarousel3 = function() {
					if(!checkSelectorExistence('.projects-carousel')){return;}
					jQuery('.projects-carousel').owlCarousel({
						loop:true,
						autoplay:true,
						margin:30,
						nav:false,
						dots:true,
						navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:2
							},			
							1024:{
								items:2
							},
							1200:{
								items:4
							}
						}
					});
					
				}
				
				var processCarousel = function() {
					if(!checkSelectorExistence('.process-carousel')){return;}
					jQuery('.process-carousel').owlCarousel({
						loop:true,
						autoplay:true,
						margin:0,
						nav:false,
						dots:true,
						navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:2
							},			
							1024:{
								items:3
							},
							1200:{
								items:4
							}
						}
					});
					
				}
				
				var testimonialCarousel1 = function() {
					if(!checkSelectorExistence('.testimonial-carousel-1')){return;}
					jQuery('.testimonial-carousel-1').owlCarousel({
						loop:true,
						autoplay:true,
						margin:0,
						nav:false,
						dots:true,
						navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:1
							},			
							1024:{
								items:1
							},
							1200:{
								items:1
							}
						}
					});
					
				}
				
				var blogCarousel = function() {
					if(!checkSelectorExistence('.blog-carousel')){return;}
					jQuery('.blog-carousel').owlCarousel({
						loop:true,
						autoplay:true,
						margin:30,
						nav:false,
						dots:true,
						navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:2
							},			
							1024:{
								items:3
							},
							1200:{
								items:3
							}
						}
					});
					
				}
				
				return {
					initialHelper:function(){
						setTestimonialCarousel();
						setTestimonialCarousel2();
						setTestimonialCarousel3();
						caseStudiesCarousel();
						clientLogo();
						productCarousel();
						portfolioCarousel();
						portfolioCarousel1();
						portfolioCarousel2();
						portfolioCarousel3();
						projectCarousel3();
						processCarousel();
						testimonialCarousel1();
						blogCarousel();
					}
				}
				
		}(jQuery);
	
	
		var ThemeBuilder = function(){
				
				var windowSize = $( window ).width();
				
				var setWindowSizeVar = function() {
					windowSize = $( window ).width();
				}
				
				var checkMobileDevice = function() {
				  var isMobile = false;
				  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
				  return isMobile;
				};
				
				var checkSelectorExistence = function(selectorName) {
				  if(jQuery(selectorName).length > 0){return true;}else{return false;}
				};
				
				
				/* To Get Search Bar*/
				var searchBar = function() {
					jQuery("#quik-search-btn").on('click',function() {jQuery('.nav-search-bar').fadeIn(500).addClass('On');});
					jQuery("#search-remove").on('click',function() {jQuery('.nav-search-bar').fadeOut(500).removeClass('On');});	
				}
				
				/* Control One Page Layout */
				var scrollPageLayout = function() {
					if(!checkSelectorExistence('.scroll-page')){return;}
					$('.scroll-page').scroller();
				}
				
				/* Set Header Height (Call On Resize Event Also) */
				var setHeaderHeight = function(){
					if(!checkSelectorExistence('.header')){return;}
					var getActualHeaderRecentHeight = $('.header').height();
					var getActualHeaderFullHeight = $('.header').css({'max-height': 'auto', 'height': 'auto'}).height();
					$('.header').css({ 'height': getActualHeaderRecentHeight }).animate({ 'height': getActualHeaderFullHeight }, 200);
				}
				
				var setResizeMargin = function(){
					if(($('.setResizeMargin').length > 0) && windowSize >= 1280){
						var containerSize = $('.container').width();
						var getMargin = (windowSize - containerSize)/2;
						$('.setResizeMargin').css('margin-left',getMargin);
					}
				}
				
				var btnAware = function (){
					
					$('.btn-aware')
						.on('mouseenter', function(e) {
								var parentOffset = $(this).offset(),
								relX = e.pageX - parentOffset.left,
								relY = e.pageY - parentOffset.top;
								$(this).find('span').css({top:relY, left:relX})
						})
						.on('mouseout', function(e) {
								var parentOffset = $(this).offset(),
								relX = e.pageX - parentOffset.left,
								relY = e.pageY - parentOffset.top;
							$(this).find('span').css({top:relY, left:relX})
					});
				}
				
				/* Magnific Popup ============ */
				var magnificPopupImageView = function(){
						
					/* magnificPopup function */
					if(checkSelectorExistence('.magnific-image')) {
						jQuery('.magnific-image').magnificPopup({ 
							delegate: '.magnific-anchor', 
							type: 'image',
							tLoading: 'Loading image #%curr%...',
							mainClass: 'magnific-img-mobile', 
							gallery: {
								enabled: true,
								navigateByImgClick: true,
								preload: [0,1] // Will preload 0 - before current, and 1 after the current image
							},
							image: {
								tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
								titleSrc: function(item) {
									return item.el.attr('title') + '<small></small>';
								}
							}
						});
					}
					/* magnificPopup function end */
					
					/* magnificPopup for video function */
					if(checkSelectorExistence('.video')) {
						jQuery('.video').magnificPopup({ 
							type: 'iframe',
							iframe: {
								markup: '<div class="mfp-iframe-scaler">'+
										 '<div class="mfp-close"></div>'+
										 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
										 '<div class="mfp-title">Some caption</div>'+
										 '</div>'
							},
							callbacks: {
								markupParse: function(template, values, item) {
									values.title = item.el.attr('title');
								}
							}
						});
					}
					/* magnificPopup for paly video function end*/
					if(checkSelectorExistence('.popup-youtube')) {
						$('.popup-youtube').magnificPopup({
							disableOn: 700,
							type: 'iframe',
							mainClass: 'mfp-fade',
							removalDelay: 160,
							preloader: false,

							fixedContentPos: false
						});
					}
				}
				
				
				/* Page Scroll To Top ============ */
				var pageScrollToTop = function (){
					/* page scroll top on click function */	
					jQuery("button.back-to-top").on('click',function() { 
						jQuery('html').animate({ scrollTop: 0 }, 500);
						return false;
					})

					jQuery(window).on("scroll", function() {
						var scrollWindowHeight = jQuery(window).scrollTop();
						if (scrollWindowHeight > 900) {
							jQuery("button.back-to-top").slideDown(1000).fadeIn(1000);
						} else {
							jQuery("button.back-to-top").slideUp(1000).fadeOut(1000);
						}
					});
					/* page scroll top on click function end*/
				}
				
				
				/* Set Footer Height  */
				var setFooterHeight = function() { 
					if(!checkSelectorExistence('.site-footer')){return;}
					jQuery('.site-footer').css(['display:block','height:auto']);
					var footerHeight = jQuery('.site-footer').outerHeight();
					if(windowSize > 1280){
						jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
					}	
					jQuery('.site-footer').css('height', footerHeight);
				}
				
				/* Set Sticky Header */
				var setStickyheader = function(){
					jQuery(window).on('scroll', function () {
						if(!checkSelectorExistence('.sticky-header')){return;}
						var header = jQuery('.sticky-header');
						if ($(window).scrollTop() > header.offset().top) {
							header.addClass('is-fixed'); /*change is-fixed to fixed*/
						} else {
							header.removeClass('is-fixed');
						}
					});
				}
				
				/* Set Masonry Layout */
				var masonryLayout = function(){
					if(!checkSelectorExistence('#masonry')){return;}
					var self = $("#masonry");
					if(jQuery('.action-card').length)
					{
						self.imagesLoaded(function () {
							self.masonry({
								gutterWidth: 15,
								isAnimated: true,
								itemSelector: ".action-card"
							});
						});
					}
					
					
					if(!checkSelectorExistence('.filters')){return;}
					jQuery(".filters").on('click','li',function(e) {
						e.preventDefault();
						var filter = $(this).attr("data-filter");
						self.masonryFilter({
							filter: function () {
								if (!filter) return true;
								return $(this).hasClass(filter);
							}
						});
					});
				}
				
				/* Set Counter Up Function */
				var setCounterUp = function(){
					if(!checkSelectorExistence('.counter')){return;}
					 jQuery('.counter').counterUp({
						delay: 10,
						time: 3000
					});	
				}
				
				/* Set Bootstrap Drop Down */
				var setBootstrapDropDown = function(){
					if(!checkSelectorExistence('select')){return;}	
					jQuery('select').selectpicker();
				}
				
				/* set Countdown */
				var setCountDown = function(){
					if(!checkSelectorExistence('.countdown')){return;}
					var currentDate = new Date();
					var months = ["January", "February", 
									  "March", "April", 
									  "May", "June", 
									  "July", "August", 
									  "September", "October", 
									  "November", "December"];
					currentDate.setDate(currentDate.getDate() + 10);
					currentDate =  currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear(); 
					/*You can use this format : 01 January 2019 */
					$('.countdown').countdown({date: currentDate+' 23:5'});
				}
				
				/* Stylish Scroll */
				var setStylishScroll = function(){
					if(!checkSelectorExistence('.content-scroll')){return;}
					$(".content-scroll").mCustomScrollbar({
						setWidth:false,
						setHeight:false,
						axis:"y"
					});	
				}
				
				/* WOW ANIMATION */
				var wowAnimation = function(){
					/*
					boxClass: Class name that reveals the hidden box when user scrolls.

					animateClass: Class name that triggers the CSS animations (â€™animatedâ€™ by default for the animate.css library)

					offset: Define the distance between the bottom of browser viewport and the top of hidden box.
							When the user scrolls and reach this distance the hidden box is revealed.
					
					mobile: Turn on/off wow.js on mobile devices.
					
					live: constantly check for new WOW elements on the page. 
					*/
					if(!checkSelectorExistence('.wow')){return;}
					var wow = new WOW(
					{
					  boxClass:     'wow',      
					  animateClass: 'animated', 
					  offset:       10,          
					  mobile:       false,       
					  live:         true
					});
					wow.init();	
				}
				
				/* Left Side Menu */
				var manageLeftSideMenu = function(){
					jQuery('.menuicon').unbind().on('click',function(){
						$(this).toggleClass('open');
					});
					
					if(windowSize <= 991 ){
						jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
								//e.preventDefault();
								if(jQuery(this).parent().hasClass('open'))
								{
									jQuery(this).parent().removeClass('open');
								}
								else{
									jQuery(this).parent().parent().find('li').removeClass('open');
									jQuery(this).parent().addClass('open');
								}
							});
						}
						
					jQuery('.contact-sidebtn').on('click',function(){
						jQuery('.contact-sidebar').toggleClass('open');
					});	
				}
				
				
				var managePlaceholderStyle = function()
				{
					if(!checkSelectorExistence('.placeani')){return;}
					$('.placeani input, .placeani textarea').focus(function(){
					  $(this).parents('.form-group').addClass('focused');
					});
					
					$('.placeani input, .placeani textarea').blur(function(){
					  var inputValue = $(this).val();
					  if ( inputValue == "" ) {
						$(this).removeClass('filled');
						$(this).parents('.form-group').removeClass('focused');  
					  } else {
						$(this).addClass('filled');
					  }
					});
				}
				
				var manageLoader = function() {
					setTimeout(function(){
						jQuery('#loading-icon-bx').remove();
					}, 0);
				}
				
				var isScrolledIntoView = function (elem){
					var $elem = $(elem);
					var $window = $(window);

					var docViewTop = $window.scrollTop();
					var docViewBottom = docViewTop + $window.height();

					var elemTop = $elem.offset().top;
					var elemBottom = elemTop + $elem.height();

					return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
				}
				
				var splitImageAnimation = function (){
					
					$(window).on('scroll',function(){
						$('.split-box').each(function(){
							if(isScrolledIntoView($(this))){
								$(this).addClass('split-active');
							}
						});
					});
				}
				
				/* handle Bootstrap Touch Spin ============ */
				var handleBootstrapTouchSpin = function(){
					if(!checkSelectorExistence('#quantity')){return;}
					jQuery("input[name='quantity']").TouchSpin({
					  verticalbuttons: true,
					  verticalupclass: 'fa fa-caret-up',
					  verticaldownclass: 'fa fa-caret-down'
					});
					
				}
				
				
				
				var cartButton = function(){
					$(".item-close").on('click',function(){
						$(this).closest(".cart-item").hide('500');
					});
					$('.cart-btn').unbind().on('click',function(){
						$(".cart-list").slideToggle('slow');
					})
					
				}  
				
				var manageSkillBars = function(){
					if(jQuery('.skillbar').length > 0)
					{
						$('.skillbar').appear();
						$('.skillbar').skillBars({
							from: 0,
							speed: 4000,
							interval: 100,
							decimals: 0
						});
						jQuery(document.body).on('appear', '.skillbar', function (e) {
							// this code is executed for each appeared element
							if (!$(this).hasClass('appear')) {
								$(this).addClass('appear');
								$(this).find('.skillbar-bar').css("width", "0%");
								$(this).skillBars({
									from: 0,
									speed: 4000,
									interval: 100,
									decimals: 0
								});
							}
						});
					}
					
				}
				
				var mobileFilter = function(){
					$(".filter-btn").on('click',function(){
						$('.filter-left').toggleClass("filter-on").toggleClass("filter-off");
					});
				}
				
				var codeSecurity = function() {
					document.onkeydown = function(e) {
                        if (e.keyCode === 123 || (e.ctrlKey && 
                            (e.keyCode === 67 || 
                             e.keyCode === 115 ||
                             e.keyCode === 99 ||
                             e.keyCode === 85 || 
                             e.keyCode === 117))) {
                            return false;
                        } else {
                            return true;
                        }
                    };
                	
                	document.addEventListener("contextmenu", function(e){
                      e.preventDefault();
                    }, false);
                    
                    $(document).keypress("u",function(e) {
                      if(e.ctrlKey){return false;}
                      else {return true;}
                    });
				}
				
				/* Function ============ */
				return {
					initialHelper:function(){
						wowAnimation();
						scrollPageLayout();
						setHeaderHeight();
						searchBar();
						magnificPopupImageView();
						pageScrollToTop();
						managePlaceholderStyle();
						setFooterHeight();
						setStickyheader();
						setCountDown();
						setStylishScroll();
						manageLeftSideMenu();
						setResizeMargin();
						codeSecurity();
						cartButton();
						splitImageAnimation();
						btnAware();
						manageSkillBars();
						mobileFilter();
					},
					
					afterLoadThePage:function(){
						setBootstrapDropDown();
						setCounterUp();
						masonryLayout();
						handleBootstrapTouchSpin();
						manageLoader();
					},
					
					changeTheScreen:function(){
						setWindowSizeVar();
						manageLeftSideMenu();
						setHeaderHeight();
						setResizeMargin();
						mobileFilter();
					}
				}
		
	}(jQuery);

	/* jQuery ready  */	
	jQuery(document).ready(function() {ThemeBuilder.initialHelper();BasicFunction.initialHelper();});
	/* jQuery Window Load */
	jQuery(window).on("load", function (e) {ThemeBuilder.afterLoadThePage();});
	/* Screen Resize */
	jQuery(window).on('resize',function(){ThemeBuilder.changeTheScreen();});
	
})(jQuery);