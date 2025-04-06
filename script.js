document.getElementById("gameImage").src = "./image_game.jpg";
document.getElementById("qrImage").src = "./qr.png";

document.getElementById("gameBox").addEventListener("click", function() {
    window.location.href = "./games/games.html"; 
});
document.getElementById("qr-code-box").addEventListener("click", function() {
    window.location.href = "./QR_CODE_GEN/index.html"; 
});
document.getElementById("coming-soon-box").addEventListener("click", function() {
    window.location.href = "./coming soon/index.html"; 
});
