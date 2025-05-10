const image = document.querySelector('#image')

const slide_left = document.querySelector('#slide-left');
const slide_right = document.querySelector('#slide-right');

var images = [
    'disco.png',
    'paper_running.png', 'preparations.png', 'slow_fight.png', 'stupid.png', 't-pose.png', 'weird.png', 'writing.png'
];

var currentIndex = 0;
var isShown = false;

function loadImage(value) {
    if(value < 0) {
        if(currentIndex + value < 0) {
            currentIndex = images.length;
        }
    } else {
        if(currentIndex + value > images.length - 1) {
            currentIndex = -1;
        }
    }
    currentIndex += value;
    
    var img = images[currentIndex];    
    image.style.opacity = 0;
    setTimeout(() => {
        image.src = '';
        image.style.opacity = 1;
        image.src = 'public/img/' + img;
    }, 300);
}

function main() {
    image.style.filter = 'none';
    image.style.objectFit = 'contain';
    loadImage(1);

    slide_left.addEventListener('click', () => loadImage(-1))
    slide_right.addEventListener('click', () =>  loadImage(1))
}

main();