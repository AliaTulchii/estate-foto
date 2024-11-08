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
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",   
                end: "bottom 20%",
                scrub: 2, 
                toggleActions: "restart none none reverse",
            }
        });
    });
}

export default reliseScroll;

