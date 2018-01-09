var video = $("#player-embed")[0]; //non-jquery-object
var progressBar = $("#player-playback-progressbar");
var progressBarIndicator = $("#player-playback-progress");
var soundMute = $("#player-sound > img")[0]; //non-jquery-object
// var mute = true;

function playPause(){
    if(video.paused) video.play();
    else video.pause();
}

// video.onended = function(){
//     video.src = "src/video2.mp4";
// }

// if(mute){
//     video.onmouseover = function(){
//         video.muted = false;
//         $("#player-sound > img")[0].src = "src/volume-high.png"
//     }

//     video.onmouseleave = function(){
//         video.muted = true;
//         $("#player-sound > img")[0].src = "src/volume-off.png"
//     }
// }

// function muteToggle(){
//     if(mute) mute = false;
//     else mute = true;
// }

window.setInterval(function progress(){
    progressBarIndicator.width(((progressBar.width()/video.duration)*video.currentTime));
}, 33);

$("#slider-indicator").children().click(function(){
    $(".slide").removeClass("slide-active");
    $($(".slide")[$("#slider-indicator").children("li.active").index()]).addClass("slide-active");
    $("li").removeClass("active");
    $(this).addClass("active");
    console.log($("#slider-indicator").children("li.active").index());
});