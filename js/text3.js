function videoChangeH(id) {
	var pauseAll = document.getElementsByTagName('video');
	for(var i = 0; i < pauseAll.length; i++){
	   pauseAll[i].pause();
	}

	var videoNew = document.getElementById(id);
	videoNew.play();
	videoNewT.muted=false;
	videoNewT.volume=0.6;
};

document.addEventListener('DOMContentLoaded',function(e){
var hist = Popcorn( '#jp_audio_2');

/////////////// !CHAPTER 1

hist.code({
	start: .1,
	onStart: function( options ) {         
		$.smoothScroll({
			scrollTarget: '#chapter3'
		});
		return false;
	}
	
});

hist.code({
	start: 1,
	end: 1.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#c3-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
	
});


hist.text({
start: .1,
end: 64,
text:'',
target:'disco',
effect: 'applyclass',
applyclass: 'active'
});

hist.text({
start: 5.5,
end: 326,
text:'',
target:'c3-intro',
effect: 'applyclass',
applyclass: 'color'
});



/////////////// !photo 1

hist.code({
	start: 6,
	end: 28.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#3photo3'
		});
		videoChangeH('3photo3v');
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 3

hist.code({
	start: 30,
	end: 45.5,
	onStart: function( options ) {   
		$.smoothScroll({
			speed: 2500,
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#3photo5'
		});
		videoChangeH('3photo5v');
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 4

hist.code({
	start: 46,
	end: 60,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#3photo6'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 5

hist.code({
	start: 60	,
	end: 80,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#3photo7'
		});
		videoChangeH('3photo7v');
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 6

hist.code({
	start: 80,
	end: 100,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			speed: 4500,
			scrollElement: $('#chapter8'),
			scrollTarget: '#3photo8'
		});
		videoChangeH('3photo8v');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 7

hist.code({
	start: 100,
	end: 105,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#c4-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
});


hist.code({
	start: 105,
	end: 120,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#3photo1'
		});
		videoChangeH('3photo1v');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 8

hist.code({
	start: 120,
	end: 140,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#3photo2'
		});
		videoChangeH('3photo2v');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !CHAPTER 2

hist.text({
start: 140,
end: 160,
text:'',
target:'wit',
effect: 'applyclass',
applyclass: 'active'
});

/////////////// end     
},false);
