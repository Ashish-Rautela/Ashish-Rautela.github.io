let refresh = document.getElementById("refresh");
let refreshb = document.getElementById("refreshb");
refreshb.addEventListener("click", () => {
    location.reload();
});

let dice = document.getElementById("dice");
let dice1 = document.getElementById("image-container1");
let dice2 = document.getElementById("image-container2");

let imageUrls = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInt1 = getRandomInt(0, 5);
let randomInt2 = getRandomInt(0, 5);

let img1 = document.getElementById("img1");
img1.src = imageUrls[randomInt1];
img1.width = 200;
img1.height = 200;

let img2 = document.getElementById("img2");
img2.src = imageUrls[randomInt2];
img2.width = 200;
img2.height = 200;