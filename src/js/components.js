const header = document.querySelector('header');
let recalcAccordionHeight;

window.addEventListener('load', () => {
    // Custom VH
    let vh = window.innerHeight * 0.01;
    let vw = document.documentElement.clientWidth;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        let vw = document.documentElement.clientWidth;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    });

    if (header) {
        document.documentElement.style.setProperty('--header-height', `${header.clientHeight}px`);
    }


})

// Remove class
function removeClass(nodes, className) {
    nodes.forEach(node => {
        node.classList.remove(className);
    })
}

function addClass(nodes, className) {
    nodes.forEach(node => {
        node.classList.add(className);
    })
}
const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;


window.addEventListener('load', () => {
    const parallaxImagesSmall = document.querySelectorAll('.parallax-image.small');
    const parallaxImagesBig = document.querySelectorAll('.parallax-image.big');


    window.scrollTo({
        top: 9999,
        behavior: 'smooth'
    })

    if (parallaxImagesSmall.length > 0) {
        parallaxImagesSmall.forEach(parallaxImageSmall => {
            gsap.to(parallaxImageSmall, {
                y: "-100%",
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxImageSmall.closest('section'),
                    start: "top center",
                    end: () => `+=${window.innerHeight}`,
                    scrub: 2,
                    // markers: true,
                }
            })
        })
    }

    if (parallaxImagesBig.length > 0) {
        parallaxImagesBig.forEach(parallaxImageBig => {
            gsap.to(parallaxImageBig, {
                y: "50%",
                // duration: 5,
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxImageBig.closest('section'),
                    start: "-=40% center",
                    end: () => `+=${window.innerHeight}`,
                    // scrub: true,
                    scrub: 2,
                    // markers: true,
                }
            })
        })
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.navigation');
    const blocks = document.querySelectorAll('.js-section');
    let currentBlockIndex = 0; // Індекс блоку, який зараз на екрані

    const observerOptions = {
        root: null, // Вікно браузера
        rootMargin: '0px',
        threshold: 0.5, // 50% блоку має бути видно
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentBlockIndex = Array.from(blocks).indexOf(entry.target);

                header.classList.remove('dark', 'light', 'first-section', 'last-section');
                header.classList.add(entry.target.dataset.theme);

                if (entry.target.dataset.first === '') {
                    header.classList.add('first-section');
                }

                if (entry.target.dataset.last === '') {
                    header.classList.add('last-section');
                }
            }
        });
    }, observerOptions);

    // Спостереження за кожним блоком
    blocks.forEach((block) => observer.observe(block));


    // Функція прокрутки до блоку
    const scrollToBlock = (index) => {
        if (index >= 0 && index < blocks.length) {
            blocks[index].scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };


    if (document.querySelector('.js-scroll-top')) {
        document.querySelector('.js-scroll-top').addEventListener('click', () => {
            scrollToBlock(currentBlockIndex - 1);
        })
    }

    if (document.querySelector('.js-scroll-bottom')) {
        document.querySelector('.js-scroll-bottom').addEventListener('click', () => {
            scrollToBlock(currentBlockIndex + 1);
        })
    }
});

const logoSvg = document.querySelector('.logo-svg');
if (logoSvg) {
    let curRotate = 0;
    
    setInterval(() => {
        curRotate += 90;
        logoSvg.style.transform = `rotate(-${curRotate}deg)`
    }, 3000)
}


