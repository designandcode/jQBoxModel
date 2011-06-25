jQuery.fn.jQBoxModel = function(options) {



var options = $.extend(/*height, debug, */options);
    return this.each(function() {

		var page = location.href;
		var qTestPattern = /\?/;
		var qTest = page.split(qTestPattern);
		
		
		if (qTest[1]) {
			var outline = (qTest[1].search(/debug=1/) != -1) ? "1px dotted #777" : "none";
		}
		
		
		var container = $('.layout-helper');
		container.append('<p class="Clear"></p>');
		$('.Clear').css({ clear: "both", width:"1px", height: 0, overflow: "hidden", margin:"0" });
		$('.layout-helper').children('div').css({float:"left",margin:0,padding:0,border:0,outline:outline});

	
	var jQBox = {
		init: function() {
				var dynamicDivs = $('div[id^=w_]'); //alert(dynamicDivs.eq(1).width());
		var dynamicDivsLength = dynamicDivs.length;
		for (var i=0; i<dynamicDivsLength; i++) {
			var dynamicDivWidth = parseInt(dynamicDivs.eq(i).width());
			var dynamicParent = dynamicDivs.eq(i).parent(); //alert(dynamicParent.attr("class"));
			var dynamicParentWidth = parseInt(dynamicParent.width());  //alert(dynamicParentWidth); 
			var dynamicDivWidthPercentage = parseInt((dynamicDivWidth / dynamicParentWidth) * 100); //alert(dynamicDivWidthPercentage);
			var dynamicSiblings = dynamicDivs.eq(i).siblings('div').length;
			var dynamicSiblingsWidth = parseInt((99.99 -  dynamicDivWidthPercentage) / dynamicSiblings); //alert(dynamicSiblingsWidth);
			$('div[id^=w_]').eq(i).siblings('div').css({width:dynamicSiblingsWidth+"%"});
		}
		
		
		var fixedDivs = $('div[id^=ew_]'); //alert(fixedDivs.eq(1).width());
		var fixedDivsLength = fixedDivs.length;
		for (var i=0; i<fixedDivsLength; i++) {
			var fixedDivWidth = parseInt(fixedDivs.eq(i).width()); //alert(fixedDivWidth);
			var fixedParent = fixedDivs.eq(i).parent('.layout-helper');
			var fixedParentWidth = parseInt(fixedParent.width());
			var fixedDivWidthPercent = parseInt((fixedDivWidth / fixedParentWidth) * 100); //alert(fixedDivWidthPercent);
			$('div[id^=ew_]').eq(i).siblings('div').css({width:fixedDivWidthPercent+"%"});
		}
		
		return;
		}
	}
	
	// Load plug-in on page load
	jQBox.init();
	
	// Re-load plugin on window resize
	$(window).resize(function() {
		jQBox.init();
	});
		
	
		
		
		
		
		$('.layout-helper > div').wrapInner('<div class="layout-group"></div>');
		
});
		





};

/* Default */
$(function(){
	$('body').jQBoxModel();
});