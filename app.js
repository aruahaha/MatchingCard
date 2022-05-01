// Fade Animation
var game = document.getElementById("game");
var playSec = document.getElementById("play-section");
var playBtn = document.getElementById("play-btn");

playBtn.onclick = function () {
    playSec.classList.add("fadeOut");
    game.classList.replace("fadeOut", "fadeIn");
}

//shuffling cards
var images = document.querySelectorAll(".no");
var cards = document.querySelectorAll(".cards");

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

    if (!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if (haveIt.length < maxNr) {
            //Recursively generate number
            return generateUniqueRandom(maxNr);
        } else {
            console.log('No more numbers available.')
            return false;
        }
    }
}

let counter = 0;
let firstCard = "";
let secondCard = "";

images.forEach(image => {
    var randomNum = generateUniqueRandom(15.5);
    image.src = imgArr[randomNum];
    image.onclick = function () {
        image.classList.replace("blank", "img");

        if (counter === 0) {
            firstCard = image.src;
            counter++;
        } else {
                secondCard = image.src;
                counter = 0;

            if (firstCard === secondCard) {
                const correctCard = document.querySelectorAll(".img");

                correctCard[0].classList.add("checked");
                correctCard[0].classList.remove("img");
                correctCard[1].classList.add("checked");
                correctCard[1].classList.remove("img");
            } else {
                const incorrectCard = document.querySelectorAll(".img");

                setTimeout(() => {
                    incorrectCard[0].classList.add("blank");
                    incorrectCard[0].classList.remove("img");
                    incorrectCard[1].classList.add("blank");
                    incorrectCard[1].classList.remove("img");
                }, 500)
            }
        }
    }
});


// LOGIKKKKK

var img1 = document.getElementById("1");
var img2 = document.getElementById("2");
var img3 = document.getElementById("3");
var img4 = document.getElementById("4");
var img5 = document.getElementById("5");
var img6 = document.getElementById("6");
var img7 = document.getElementById("7");
var img8 = document.getElementById("8");
var img9 = document.getElementById("9");
var img10 = document.getElementById("10");
var img11 = document.getElementById("11");
var img12 = document.getElementById("12");
var img13 = document.getElementById("13");
var img14 = document.getElementById("14");
var img15 = document.getElementById("15");
var img16 = document.getElementById("16");
