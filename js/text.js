function videoChangeT(id) {
	var pauseAll = document.getElementsByTagName('video');
	for(var i = 0; i < pauseAll.length; i++){
	   pauseAll[i].pause();
	}

	var videoNewT = document.getElementById(id);
	videoNewT.muted=false;
	videoNewT.volume=1;
	videoNewT.play();
};


document.addEventListener('DOMContentLoaded',function(e){
var pop = Popcorn( '#jp_audio_0');

/////////////// !CHAPTER 1

pop.code({
	start: .1,
	onStart: function( options ) {         
		$.smoothScroll({
			scrollTarget: '#chapter1'
		});
		return false;
	}
	
});

pop.code({
	start: 1,
	end: 1.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#c1-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
	
});


pop.text({
start: .1,
end: 64,
text:'',
target:'disco',
effect: 'applyclass',
applyclass: 'active'
});

pop.text({
start: 5.5,
end: 326,
text:'',
target:'c1-intro',
effect: 'applyclass',
applyclass: 'color'
});



/////////////// !photo 1

pop.code({
	start: 8,
	end: 8.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo1'
		});
		videoChangeT('videozena');
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// end     
},false);

