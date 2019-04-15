jQuery(document).ready(function($) {
	//$(".ai_window_button").on('click', function() { $("#ai-accessibility").toggle(); });
	//$("#ai-accessibility .close").on('click', function() { $("#ai-accessibility").toggle(); });

	/* Link underline - Start */
	$(".webacc-func-links").on('click', function() {
		$("a").toggleClass("webaccset-underline"); 
		$(this).toggleClass("webion-active-func");
	});
	/* Link underline - End */
	
	/* Zoom - Start */
	var webaccscale = $('body').css("zoom") * 1;
	$(".webacc-func-zoomin").on('click', function() {
		webaccscale += 0.1;
		$('body').css({ "zoom": webaccscale * 100 + "%" });
		if(webaccscale > 1) {
			$(".webacc-func-zoomin").addClass("webion-active-func");
		}
	});
	$(".webacc-func-zoomout").on('click', function() {
		webaccscale -= 0.1;
		$('body').css({ "zoom": webaccscale * 100 + "%" });
		if(webaccscale == 1) {
			$(".webacc-func-zoomin").removeClass("webion-active-func");
		}

	});
	$(".webacc-func-zoomreset").on('click', function() {
		webaccscale = 1;
		$('body').css({ "zoom": webaccscale * 100 + "%" });
		if(webaccscale == 1) {
			$(".webacc-func-zoomin").removeClass("webion-active-func");
		}
	});
	/* Zoom - End */

	/* Focused Item - Start */
	var webaccfocus = false;
	
	$(".webacc-func-navhighlight").on('click', function() {
		if(webaccfocus) {
			webaccfocus=false;
			$(".webacc-func-navhighlight").removeClass("webion-active-func");
		}
		else {
			webaccfocus=true;
			$(".webacc-func-navhighlight").addClass("webion-active-func");
		}
	});
	
	document.addEventListener('focus',function(e){
		var focused = $(':focus');
		if(webaccfocus==false)
			return;
		focused.addClass('webaccset-focused');
		focused.focusout( function() {
			$(this).removeClass('webaccset-focused');
		});
	}, true);
	/* Focused Item - End */

	/* Font Size - Start */
	var font_level = 0;
	
	function fontToggle() {
		if(font_level >= 1) {
			$(".webacc-func-fontinc").addClass("webion-active-func");
			$(".webacc-func-fontdec").removeClass("webion-active-func");
		}
		else if (font_level <= -1) {
			$(".webacc-func-fontdec").addClass("webion-active-func");
			$(".webacc-func-fontinc").removeClass("webion-active-func");
		}
		else {
			$(".webacc-func-fontinc").removeClass("webion-active-func");
			$(".webacc-func-fontdec").removeClass("webion-active-func");
		}
	}
	$(".webacc-func-fontinc").click(function(){
		if(font_level > 7) return;
		
		$('*').each(function (i, obj) {
			var originalFontSize = $(obj).css('font-size');
			var originalFontNumber = parseFloat(originalFontSize, 10);
			var newFontSize = originalFontNumber*1.05;
			$(this).css('font-size',newFontSize+'px');
		});
		
		font_level++;
		fontToggle();
	});
	
	$(".webacc-func-fontdec").click(function(){
		if(font_level < -7) return;
		
		$('*').each(function (i, obj) {
			var originalFontSize = $(obj).css('font-size');
			var originalFontNumber = parseFloat(originalFontSize, 10);
			var newFontSize = originalFontNumber/1.05;
			$(this).css('font-size',newFontSize+'px');  
		});
		
		font_level--;
		fontToggle();
	});
	$(".webacc-func-fontreset").click(function(){
		if(font_level != 0) {
			$('*').each(function (i, obj) {
				var originalFontSize = $(obj).css('font-size');
				var originalFontNumber = parseFloat(originalFontSize, 10);
				
				if(font_level > 0)
					var newFontSize = originalFontNumber/(1+0.05*font_level+0);
				else if(font_level < 1)
					var newFontSize = originalFontNumber/(1+0.05*font_level+0);
				$(this).css('font-size',newFontSize+'px');
			});
			font_level=0;
		}
		fontToggle();
	});
	/* Font Size - End */
	
	/* Screen Color - Start */
	$(".webacc-func-grayscale").click(function() {
		$('.webacc-func-grayscale').toggleClass("webion-active-func");
		$('html').toggleClass("webaccset-grayscale");

		$('.webacc-func-invert').removeClass("webion-active-func");
		$('html').removeClass("webaccset-invert");
	});

	$(".webacc-func-invert").click(function() {
		$('.webacc-func-invert').toggleClass("webion-active-func");
		$('html').toggleClass("webaccset-invert");
		
		$('.webacc-func-grayscale').removeClass("webion-active-func");
		$('html').removeClass("webaccset-grayscale");
	});

	$(".webacc-func-origcolors").click(function(){
		$('.webacc-func-invert').removeClass("webion-active-func");
		$('.webacc-func-grayscale').removeClass("webion-active-func");
		$('html').removeClass("webaccset-invert");
		$('html').removeClass("webaccset-grayscale");
	});
	/* Screen Color - End */

	/* Title Mark - Start */
	$(".webacc-func-titlemark").click(function(){
		$('.webacc-func-titlemark').toggleClass("webion-active-func");
		$('h1, h2, h3, h4, h5, h6').toggleClass("webaccset-titlemark");
	});
	/* Title Mark - End */

	/* Stop Animation - Start */
	$(".webacc-func-stopanim").click(function(){
		$('.webacc-func-stopanim').toggleClass("webion-active-func");
		$('*').toggleClass("webaccset-stopanimation");
	});
	/* Stop Animation - End */
	
	/* Decleration - Start */
	$(".webacc-func-declaration").click(function(){
		$('.webacc-func-declaration').toggleClass("webion-active-func");
		$('div.webacc-declaration').toggleClass("webacc-showdec");
	});
	
	$(".webacc-declaration div.close").click(function(){
		$('.webacc-func-declaration').toggleClass("webion-active-func");
		$('div.webacc-declaration').toggleClass("webacc-showdec");
	});
	/* Decleration - End */

	/* Open Bar - Start */
	$(".webion-accessibility-botton").click(function(){
		$('div.webion-accessibility-bar').toggleClass("activebar");
		$('div.webion-accessibility-botton').toggleClass("activebar");
	});
	
	
	/* Reset - Start */
	$(".webacc-func-reset").click(function(){
		$(".webacc-body").children().removeClass("webion-active-func"); 
		$("a").removeClass("webaccset-underline"); 
		$(".webacc-func-zoomreset").click();
		$(".webacc-func-fontreset").click();
		$('html').removeClass("webaccset-grayscale");
		$('html').removeClass("webaccset-invert");
		$('.webacc-func-titlemark').removeClass("webion-active-func");
		$('h1, h2, h3, h4, h5, h6').removeClass("webaccset-titlemark");
		$('*').removeClass("webaccset-stopanimation");
	});
	/* Reset - End */
	
	
});