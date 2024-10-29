import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function reliseScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll(".relise__img");

    images.forEach((img, index) => {
        // Встановлюємо z-index для парних елементів
        if (index % 2 === 0) {
            img.style.zIndex = 2;
        }

    
        // Рандомний зсув для осей X та Y
        // const randomX = (Math.random() - 0.5) * 20; // зсув вліво/вправо
        const randomY = (Math.random() - 1) * 100; // зсув вгору/вниз

        gsap.to(img, {
            // x: randomX, 
            y: randomY,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",   
                end: "bottom 20%",
                scrub: 2, // плавне пересування разом із прокруткою
                toggleActions: "restart none none reverse",
            }
        });
    });
}

export default reliseScroll;

