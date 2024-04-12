var video=document.querySelector('.video');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay=false;
	video.loop=false;
	console.log("Auto play is set to", false);
	console.log("Loop is set to", false);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	if (video.playbackRate>0) { /*check if the video is not paused*/
		video.playbackRate *= 0.9; 
	}
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	if (video.playbackRate>0) { /*check if the video is not paused*/
		video.playbackRate /= 0.9;
	}
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime+10<video.duration) {
		video.currentTime+=10;
	}
	else {
		video.currentTime=0;
	}
	console.log("Video current time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";
		console.log("Unmute");
	}
	else {
		video.muted=true;
		document.querySelector("#mute").innerHTML="Unmute";
		console.log("Mute");
	}
});

var volume_value=document.querySelector("#volume");
var volume_slider=document.querySelector("#slider");

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Change Volume");
	volume_value.innerHTML=volume_slider.value+"%";
	console.log("The current value is", volume_slider.value);
	video.volume=volume_slider.value/100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Styled");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});