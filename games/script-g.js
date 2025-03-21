function createBox(imageSrc, text, link) {
    const boxContainer = document.getElementById('boxContainer');

    const box = document.createElement('div');
    box.classList.add('box');

    // Make the entire box clickable
    box.addEventListener('click', function() {
        window.location.href = link; // Redirect to the game page
    });

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = text;

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    box.appendChild(img);
    box.appendChild(paragraph);
    boxContainer.appendChild(box);
}

// Adding game boxes dynamically
createBox('./images/simon-game.png', 'Simon Game', './Simon-game/index.html');
createBox('./images/dice-game.png', 'Dice Game', './Dicee-game/dicee.html');
