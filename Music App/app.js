window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds');

    window.addEventListener('keydown', function(e) {
        this.console.log(e.keyCode);
        sounds.forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
        if (e.keyCode == 65) {
            sounds[0].play();
            playAnimation();
        }
        else if (e.keyCode == 83) {
            sounds[1].play();
        }
        else if (e.keyCode == 68) {
            sounds[2].play();
        }
        else if (e.keyCode == 70) {
            sounds[3].play();
        }
        else if (e.keyCode == 71) {
            sounds[4].play();
        }
        else if (e.keyCode == 72) {
            sounds[5].play();
        }
        else if (e.keyCode == 73) {
            sounds[6].play();
        }
    });
});

function playAnimation() {
    const bubble = document.createElement("div");
    const visual = document.querySelector(".visual");

    visual.appendChild(bubble);
    bubble.style.animation = "jump 1s ease";

    bubble.addEventListener('animationend', function() {
        visual.removeChild(this);
    });
    
}