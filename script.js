

/*
// Array of sound files for each key
const sounds = {
    65: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'), // A
    83: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'), // S
    68: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'), // D
    70: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'), // F
    71: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'), // G
    72: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'), // H
    74: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'), // J
    75: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'), // K
    76: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3')  // L
};

// Function to play sound based on key press or click
function playSound(e) {
    const keyCode = e.keyCode || e.target.getAttribute('data-key'); // Handle keyCode for keypress or click
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!key) return;

    const sound = sounds[keyCode];
    if (sound) {
        sound.currentTime = 0; // Reset sound to the start
        sound.play();
    }

    // Add class to animate the key press or click
    key.classList.add('playing');
}

// Event listener for keydown event to detect key presses
window.addEventListener('keydown', playSound);

// Event listener for clicks on keys
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', playSound);
});

// Optional: Remove 'playing' class after animation ends
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('transitionend', () => {
        key.classList.remove('playing');
    });
});
*/




const keys = document.querySelectorAll(".key")

function removeTransition(e){
    if(e.propertyName!=='transform')
        return;
    this.classList.remove("playing")
    // e.target.classList.remove("playing")
}
keys.forEach(key=>key.addEventListener("transitionend",removeTransition))
window.addEventListener("keydown",playSound)

function playSound(e){
    const code = e.keyCode
    const audio = document.querySelector(audio[data-key="${code}"])
    const key = document.querySelector(div[data-key="${code}"])

    if(!audio){
        return;
    }
    key.classList.add("playing")
    audio.currentTime = 0
    audio.play()
}