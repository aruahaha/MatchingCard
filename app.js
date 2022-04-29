// Fade Animation
var game = document.getElementById("game");
var playSec = document.getElementById("play-section");
var playBtn = document.getElementById("play-btn");

playBtn.onclick = function () {
    playSec.classList.add("fadeOut");
    game.classList.replace("fadeOut", "fadeIn");
}

//shuffling cards
var cards = document.querySelectorAll(".cards");
var images = document.querySelectorAll(".img");

const imgArr = [
    "images/batman.png",
    "images/captain amereca.png",
    "images/hulk.png",
    "images/ironman.png",
    "images/joker.png",
    "images/ninja turtle.png",
    "images/superman.png",
    "images/wonder women.png",
    "images/batman.png",
    "images/captain amereca.png",
    "images/hulk.png",
    "images/ironman.png",
    "images/joker.png",
    "images/ninja turtle.png",
    "images/superman.png",
    "images/wonder women.png"
];

let haveIt = [];

function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}

images.forEach(image => {
    var randomNum = generateUniqueRandom(16);
    image.src = imgArr[randomNum];
});

