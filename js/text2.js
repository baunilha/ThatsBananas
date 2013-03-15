function videoChange(id) {
	var pauseAll = document.getElementsByTagName('video');
	for(var i = 0; i < pauseAll.length; i++){
	   pauseAll[i].pause();
	}

	var videoNew = document.getElementById(id);
	videoNew.play();
	videoNew.loop=true;
	videoNew.muted=true;
};

document.addEventListener('DOMContentLoaded',function(e){
var fac = Popcorn( '#jp_audio_1');


/////////////// !CHAPTER 1

fac.code({
	start: .1,
	onStart: function( options ) {         
		$.smoothScroll({
			scrollTarget: '#chapter2'
		});
		return false;
	}
	
});

fac.code({
	start: 1,
	end: 1.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#c2-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
	
});


fac.text({
start: .1,
end: 161,
text:'',
target:'wit',
effect: 'applyclass',
applyclass: 'active'
});

fac.text({
start: 5.5,
end: 326,
text:'',
target:'c2-intro',
effect: 'applyclass',
applyclass: 'color'
});


/////////////// ! filter

fac.code({
	start: 2,
	end: 9.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#filter'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! insect bite

fac.code({
	start: 10,
	end: 16,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#bite'
		});
		videoChange('bite2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! shoes

fac.code({
	start: 16.5,
	end: 20.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#shoes'
		});
		videoChange('shoes2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! ink

fac.code({
	start: 21,
	end: 22.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#ink'
		});
		videoChange('ink2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! remove scratches

fac.code({
	start: 23,
	end: 24.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#cd'
		});
		videoChange('cd2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! bikini girl

fac.code({
	start: 25,
	end: 27.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#bikini'
		});
		videoChange('bikini2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! sad boy

fac.code({
	start: 29,
	end: 30.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#sadboy'
		});
		videoChange('sadboy2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! boy without head

fac.code({
	start: 31,
	end: 32.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#guyWithoutHead'
		});
		videoChange('guyWithoutHead2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! monkey

fac.code({
	start: 33,
	end: 36.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#monkey'
		});
		videoChange('monkey2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! russian teachs

fac.code({
	start: 37,
	end: 40.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#russian'
		});
		videoChange('russian2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! stop motion bananas

fac.code({
	start: 41,
	end: 55,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#stopmotion'
		});
		videoChange('stopmotion2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! taste better

fac.code({
	start: 55.5,
	end: 60,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#tasty'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! feeling great daddy

fac.code({
	start: 60.5,
	end: 65,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#daddy'
		});
		videoChange('daddy2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! feeling great gang

fac.code({
	start: 65.5,
	end: 70,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#gang'
		});
		videoChange('gang2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! feeling great costume

fac.code({
	start: 70.5,
	end: 75,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#costume'
		});
		videoChange('costume2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! feeling great moon

fac.code({
	start: 75.5,
	end: 80,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#moon'
		});
		videoChange('moon2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! feeling great field

fac.code({
	start: 80.5,
	end: 85,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#field'
		});
		videoChange('field2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! feeling great child

fac.code({
	start: 85.5,
	end: 90,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#child'
		});
		videoChange('child2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! feeling sad window

fac.code({
	start: 90.5,
	end: 95,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#sadbanana'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! drunkie friends

fac.code({
	start: 95.5,
	end: 97.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#drunkies'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! banana drunk

fac.code({
	start: 98,
	end: 100.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#bananadrunk'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! radioactive potassio

fac.code({
	start: 101,
	end: 104.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#radioactive'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! hangover

fac.code({
	start: 105,
	end: 111,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#hangover'
		});
		videoChange('hangover2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! don't forget

fac.code({
	start: 111.5,
	end: 113,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#dontforget'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! ship of bananas

fac.code({
	start: 113.5,
	end: 115,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#ship'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// ! sailor's superstition

fac.code({
	start: 115.5,
	end: 119,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#flying'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! banana boat sunscreen

fac.code({
	start: 119.5,
	end: 121,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#boat'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! banana republic

fac.code({
	start: 121.5,
	end: 123,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#republic'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! no bananas sign

fac.code({
	start: 123.5,
	end: 125,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#nobananas'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! falling people 1

fac.code({
	start: 125.5,
	end: 128,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#fallboat'
		});
		videoChange('fallboat2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! falling people 2

fac.code({
	start: 128.5,
	end: 130,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#fallpeople'
		});
		videoChange('fallpeople2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! boat falls

fac.code({
	start: 130.5,
	end: 133.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#boatfalls'
		});
		videoChange('boatfalls2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! old boat

fac.code({
	start: 134,
	end: 142,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#oldboat'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! deteriorate

fac.code({
	start: 142.5,
	end: 150,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#song'
		});
		videoChange('song2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! deteriorate

fac.code({
	start: 150.5,
	end: 154,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#bananaboatfall'
		});
		videoChange('bananaboatfall2');
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// ! going to hanna chapter

fac.code({
	start: 158,
	end: 160,
	onStart: function( options ) {    
		$.smoothScroll({
			speed: 800,
			scrollTarget: '#chapter3',
			afterScroll: function() {$("#hist-audio").jPlayer("play", 0);}
			});
			var pauseAll = document.getElementsByTagName('video');
			for(var i = 0; i < pauseAll.length; i++){
			   pauseAll[i].pause();
			   pauseAll[i].load();
		};
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// end     
},false);




