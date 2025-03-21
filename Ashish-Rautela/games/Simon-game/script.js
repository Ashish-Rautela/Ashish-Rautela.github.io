document.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
    startProgram();
});

async function startProgram() {
    console.log("started");
    let idx = 1;

    let title = document.getElementById("level-title");
    title.textContent = `Level ${idx}`;

    function addGlow(element) {
        return new Promise((resolve) => {
            element.classList.add("glow");
            setTimeout(() => {
                element.classList.remove("glow");
                resolve();
            }, 500);
        });
    }

    function playSound(audioId) {
        return new Promise((resolve) => {
            let audio = document.getElementById(audioId);
            audio.play();
            audio.onended = resolve;
        });
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    let ele = ["green", "red", "yellow", "blue"];
    let eles = ["myAudio", "myAudio1", "myAudio2", "myAudio3"];

    for (let i = 0; i < 10; i++) {
        let diff_ele = [];
        let ans = [];
        let l = 0;

        for (let j = 0; j <= i; j++) {
            diff_ele[j] = getRandomInt(0, 3);
        }

        for (let k = 0; k <= i; k++) {
            await new Promise((resolve) => setTimeout(resolve, 600));
            await addGlow(document.getElementById(ele[diff_ele[k]]));
            await playSound(eles[diff_ele[k]]);
        }

        await new Promise((resolve) => {
            function handleClick(colorIndex) {
                return function () {
                    addGlow(document.getElementById(ele[colorIndex]));
                    playSound(eles[colorIndex]);
                    ans.push(colorIndex);

                    if (ans.length === diff_ele.length) {
                        if (arraysEqual(diff_ele, ans)) {
                            title.textContent = `Level ${i + 2}`;
                            removeEventListeners();
                            resolve();
                        } else {
                            alert("You lost!");
                            location.reload();
                        }
                    }
                };
            }

            function removeEventListeners() {
                green.removeEventListener("click", handleClick(0));
                red.removeEventListener("click", handleClick(1));
                yellow.removeEventListener("click", handleClick(2));
                blue.removeEventListener("click", handleClick(3));
            }

            let green = document.getElementById("green");
            let red = document.getElementById("red");
            let yellow = document.getElementById("yellow");
            let blue = document.getElementById("blue");

            green.addEventListener("click", handleClick(0));
            red.addEventListener("click", handleClick(1));
            yellow.addEventListener("click", handleClick(2));
            blue.addEventListener("click", handleClick(3));
        });
    }
}
