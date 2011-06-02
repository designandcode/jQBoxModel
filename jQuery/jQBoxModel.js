jQuery.fn.jQBoxModel = function(options) {


var height = {height : false}


var options = $.extend(height, options);
    return this.each(function() {

	var container = $('.layout-helper');
		var containerCount = container.length;
		var divs = $('.layout-helper > div');
		var divsCount = divs.length;

		container.append('<p class="Clear"></p>');
		$('.Clear').css({ clear: "both", width:"1px", height: 0, overflow: "hidden", margin:"0" });
		
		
		
		$('.layout-helper > div').css({float:"left",margin:0,padding:0,border:0});
		
		for (i=0;i<containerCount;i++) {
				var childDivs = $('.layout-helper').eq(i).children();
				var childDivsCount = childDivs.length;
			for (j=0;j<childDivsCount ;j++) {
				
				
				var declaredDiv = childDivs.eq(j).attr('class');
				
				
				var declaredNumber = declaredDiv.search(/^w\d+$/);
				if (declaredNumber == 0) {
					var declaredWidth = declaredDiv.match(/\d+/);
				}
				
				var siblingsCount = $('.layout-helper').eq(i).children('.w'+declaredWidth).siblings('div').length;
				var remainingWidth = (100 - declaredWidth) / siblingsCount;
				
				$('.layout-helper').eq(i).children('.w'+declaredWidth).css({width:declaredWidth+"%"}).siblings().css({width:remainingWidth+"%"});
			}
		}
		
		if (options.height == true) {
		setHeights = function(index){
			for (i=0;i<containerCount;i++) {
				var height = container.eq(i).height();
				container.eq(i).children("div").css({height:height+"px"});
			}
		};
		
			setHeights();	
		}
		
		
});
		





};

/* Default */
$(function(){
	$('body').jQBoxModel();
});