const burger_opened = document.querySelector('#burger-opened');
const burger_closed = document.querySelector('#burger-closed');
const burger_menu = document.querySelector('#burger-menu');

function onBurgerClick(to_open, to_close) {
    to_close.style.scale = 0.7;
    setTimeout(() => {
        to_close.style.display = 'none';
        to_open.style.display = 'flex';
        to_open.style.scale = 1;
    }, 200)

    if(to_open === burger_opened) {
        burger_menu.style.transform = 'translateY(0)';
    } else {
        burger_menu.style.transform = 'translateY(-400vh)';
    }
}

function main() {
    burger_opened.addEventListener('click', () => {
        onBurgerClick(burger_closed, burger_opened);
    })

    burger_closed.addEventListener('click', () => {
        onBurgerClick(burger_opened, burger_closed);
    })
}

main();