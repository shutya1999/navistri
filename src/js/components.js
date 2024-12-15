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
                    start: "top center",
                    end: () => `+=${window.innerHeight}`,
                    // scrub: true,
                    scrub: 2,
                    // markers: true,
                }
            })
        })
    }




    




});

