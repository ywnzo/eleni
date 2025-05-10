const image = document.querySelector('#image')
const text_wrapper = document.querySelector('.text-wrapper')

const slide_left = document.querySelector('#slide-left');
const slide_right = document.querySelector('#slide-right');

var slides = [
    {
        'header': 'Carry me please - Geodes',
        'img': 'carrymeplease.png',
        'text': `<p>This video explores a relationship of love, but also of unhealthy dependence. The girl cannot stand on her own and needs him to carry her, which ultimately drags both of them down.</p>
                 <p>The entire dance unfolds in her mind during a kiss. It is like a fleeting thought that she could hurt him—so quick that she almost forgets it immediately afterwards.</p>
                 <p>They are somewhat like geodes: smooth and round on the outside, but shimmering and sharp within. Yet, when one geode carries the other, neither can truly see the inside of the other.</p>`,
    },
    {
        'header': 'Elies',
        'img': 'olives.png',
        'text': `<p>I found this little poem written by my grandmother:</p>
                 <p>"Im giving you this photograph taken by a machine, and if I die, it will be your souvenir."</p>
                 <p>This video is dedicated to my grandmother. It depicts how we live in a colorful present while always staying in touch with memories of all kinds—those we create and later rediscover when opening our notebooks and sketch pads.</p>`,
    },
    {
        'header': 'Loopholes',
        'img': 'hair.png',
        'text': `<p>This video represents one of those existential moments we sometimes go through</p>
                 <p>What does one feel in a black hole? What is nothingness?</p>
                 <p>Small looping dances encapsulate the effort of thinking and rethinking questions that will most likely remain unanswered.</p>
                 <p>The darkness between these looping thoughts symbolizes nothingness—but only barely, because if it is black, then isnt it still something?</p>`,
    },
    {
        'header': 'Aptos ouranos',
        'img': 'ufo.png',
        'text': `<p>In this video, I dance in front of a tangible cardboard sky. The viewer and I travel through a galaxy where things are slower, calmer.</p>
                 <p>Floating between the planets, we are immense and significant, united in this adventure. 'Life as one,' as the voice accompanying us is singing.</p>`,
    },
    {
        'header': 'ICDNIFOTC',
        'img': 'icdn.png',
        'text': `<p>I can’t do anything in front of the camera is an ironic video.</p>
                 <p>The title is actually a phrase I said after the first take of this video, and the result directly contradicts it—since, in reality, I did many things in front of the camera.</p>
                 <p>It is about the joy of dancing, which can even outweigh the stress of being watched, as well as the disappointment I sometimes feel toward the results of my creations—when they do not align with my initial vision but instead evolve and come to life on their own.</p>`
    },
    {
        'header': 'Twinkling stutter',
        'img': 'shadow.png',
        'text': `<p>A dance performance of two molecules interacting and traveling with jerky movements. Created cooperatively with Lilian Kostadima</p>`,
    },
]

var currentIndex = 0;

async function wait(time) {
    setTimeout(() => {
        return true;
    }, time)
}

async function loadSlide(value) {
    if(value < 0) {
        if(currentIndex + value < 0) {
            currentIndex = slides.length;
        }
    } else {
        if(currentIndex + value > slides.length - 1) {
            currentIndex = -1;
        }
    }
    currentIndex += value;

    text_wrapper.style.opacity = 0;
    
    var slide = slides[currentIndex];
    if(!slide) {
        return alert('No slide found!');
    }

    image.style.opacity = 0;
    setTimeout(() => {
        image.style.opacity = 1;
        image.src = 'public/img/' + slide['img'];
    }, 300);

    setTimeout(() => {
        text_wrapper.innerHTML = '';
        text_wrapper.innerHTML += '<h1>' + slide['header'] + '</h1>';
        text_wrapper.innerHTML += slide['text'];
        text_wrapper.style.opacity = 1;
    }, 300)
}

function main() {
    loadSlide(1);
    image.style.opacity = 1;
    setTimeout(() => {
        text_wrapper.style.transform = 'translateX(0px)';
    }, 300);

    slide_left.addEventListener('click', () => loadSlide(-1))
    slide_right.addEventListener('click', () =>  loadSlide(1))
}


main();