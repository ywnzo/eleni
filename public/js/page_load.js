const image = document.querySelector('#image')
const text_wrappers = document.querySelectorAll('.text-wrapper')

function main() {
    image.style.opacity = 1;
    setTimeout(() => {
        text_wrappers.forEach(wrapper => {
            wrapper.style.transform = 'translateX(0px)';
        })
    }, 300);
}


main();