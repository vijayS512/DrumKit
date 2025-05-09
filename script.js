document.addEventListener('DOMContentLoaded', () => {
    // Get all the drum buttons
    const drumButtons = document.querySelectorAll('.drum');

    // Add click event listeners to each button
    drumButtons.forEach(button => {
        button.addEventListener('click', () => {
            playSound(button.classList[0]);
        });
    });

    // Function to play sound
    function playSound(key) {
        let audio;
        switch (key) {
            case 'w':
                audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'a':
                audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 's':
                audio = new Audio('sounds/tom-3.mp3');
                break;
            case 'd':
                audio = new Audio('sounds/tom-4.mp3');
                break;
            case 'j':
                audio = new Audio('sounds/snare.mp3');
                break;
            case 'k':
                audio = new Audio('sounds/crash.mp3');
                break;
            case 'l':
                audio = new Audio('sounds/kick-bass.mp3');
                break;
            default:
                console.log('Unknown key: ' + key);
        }
        if (audio) {
            audio.play();
        }
    }
});
