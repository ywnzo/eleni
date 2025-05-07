const image = document.querySelector('#image')
const text_wrapper = document.querySelector('#text-wrapper')

var isShown = false;

function onMouseMove() {
    if(isShown) {
        return;
    }
    text_wrapper.style.transform = 'translateX(0px)';
    isShown = true;
}

function main() {
    image.style.opacity = 1;
    setTimeout(() => {
        document.addEventListener('mousemove', onMouseMove);
    }, 300);
}


main();