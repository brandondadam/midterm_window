$(document).onload(function(){
	setInterval(function(){
		//get current active image
		var active = $('#images .active');
		//if there is another images left then make that images next
		//if not then go back to image 1
		if(active.next().length > 0){
			var next = active.next();
		} else{
			var next = $('#images img:first');
		}
		//get the next image ready by using z-index
		next.css('z-index','2');
		//fading out the class
		active.fadeOut(1500,function(){
			//move active image back, show it and remove the class
			active.css('z-index', '1').show().removeClass('active');
			//make next image the active one
			next.css('z-index','3').addClass('active');
		});
	},5000);
});
