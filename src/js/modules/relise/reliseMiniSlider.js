import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function reliseMiniSlider() {
    gsap.registerPlugin(ScrollTrigger);

    const miniList = document.querySelector(".relise__list--mini");

    ScrollTrigger.create({
        trigger: ".relise__container",
        start: "top top",
        end: "bottom bottom", 
        pin: ".relise__list--mini",
        pinSpacing: false,
    });

    ScrollTrigger.create({
        trigger: ".relise__container",
        start: "bottom bottom", 
        onEnter: () => {
            gsap.to(miniList, { opacity: 0, duration: 1, ease: "power4.inOut" });
        },
        onLeaveBack: () => {
            gsap.to(miniList, { opacity: 1, duration: 1, ease: "power4.inOut" });
        }
    });

    const images = document.querySelectorAll(".relise__img");
    const miniImages = document.querySelectorAll(".relise__img-mini");

    function scrollToImage(imageId) {
        const targetImage = document.querySelector(`#${imageId}`);
        if (targetImage) {
            gsap.to(window, {
                duration: 6,  
                scrollTo: {
                    y: targetImage,
                    offsetY: 10, 
                },
                ease: "power4.inOut"
            });
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const imgId = entry.target.id;
            const relatedMiniImg = document.querySelector(`a[href="#${imgId}"] img`);

            if (entry.isIntersecting) {
                miniImages.forEach(miniImg => miniImg.classList.remove("relise__img-mini--active"));
                if (relatedMiniImg) {
                    relatedMiniImg.classList.add("relise__img-mini--active");
                }
            }
        });
    }, { threshold: 0.5 });

    images.forEach(img => observer.observe(img));
}

export default reliseMiniSlider;