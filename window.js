var div = document.getElementById('image');
div.innerHTML = '<img src="sample1.jpg">';
div.addEventListener('click', function(){
	console.log('next photo');
}, false);
