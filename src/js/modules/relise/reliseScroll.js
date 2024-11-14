import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function reliseScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll(".relise__img");

    images.forEach((img, index) => {
        if (index % 2 === 0) {
            img.style.zIndex = 2;
        }
        const randomY = (Math.random() - 1) * 100; 

        gsap.to(img, { 
            y: randomY,
            duration: 6,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: img,
                start: "top 90%",   
                end: "bottom 10%",
                scrub: 5, 
                toggleActions: "restart none none reverse",
            }
        });
    });
}

export default reliseScroll;

