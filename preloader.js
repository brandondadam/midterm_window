function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<timeLapse/>')[0].src = this;
		console.log('hello');
		// Alternatively you could use:
		// (new Image()).src = this;
	});
}
preload([
	'timeLapse/image1.jpg',
	'timeLapse/image2.jpg',
	'timeLapse/image3.jpg',
	'timeLapse/image4.jpg',
	'timeLapse/image5.jpg',
	'timeLapse/image6.jpg',
	'timeLapse/image7.jpg',
	'timeLapse/image8.jpg',
	'timeLapse/image9.jpg',
	'timeLapse/image10.jpg',
	'timeLapse/image11.jpg',
	'timeLapse/image12.jpg',
	'timeLapse/image13.jpg',
	'timeLapse/image14.jpg',
	'timeLapse/image15.jpg',
	'timeLapse/image16.jpg',
	'timeLapse/image17.jpg',
	'timeLapse/image18.jpg',
	'timeLapse/image19.jpg',
	'timeLapse/image20.jpg'
]);
