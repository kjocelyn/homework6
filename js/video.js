var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML= video.volume * 100 + "%";
	console.log("Play Video");
	console.log(video)
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
		video.playbackRate*=0.8;
  	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate*=1.25;
	console.log("Speed is "+  video.playbackRate);
}

function skipAhead() {
	video.currentTime+= 60;
	if(video.currentTime >= video.duration){
		video.pause();
		video.currentTime = 0;
		video.playbackRate = 1;
		video.play();
	}
	console.log("Current location is " + video.currentTime);
}

function mute() {
	if (video.muted) {
	  		console.log("Changing to Unmuted");
				video.muted= false;
				document.querySelector('#mute').innerHTML = "Mute"
	}
	else {
	      console.log("Changing to Muted");
				video.muted=true;
				document.querySelector('#mute').innerHTML = "Unmute"
	}
}

function changeVolume() {
	var volume = document.querySelector('#volumeSlider').value/100;
	video.volume=volume
	document.querySelector("#volume").innerHTML = volume*100 + "%"
	console.log("Volume is " + volume *100);
}

function gray() {
	document.querySelector('#myVideo').classList.add("grayscale");
	console.log("In grayscale")
}

function color() {
	document.querySelector('#myVideo').classList.remove("grayscale");
	console.log("In color")
}
