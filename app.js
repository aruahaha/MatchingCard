var game = document.getElementById("game");
var playSec = document.getElementById("play-section");
var playBtn = document.getElementById("play-btn");

playBtn.onclick = function() {
    playSec.classList.add("fadeOut");
    game.classList.replace("fadeOut", "fadeIn");
}