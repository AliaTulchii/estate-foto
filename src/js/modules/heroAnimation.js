import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function heroAnimation() {

    document.addEventListener("DOMContentLoaded", function() {
        const hero = document.querySelector(".hero");
        const heroTitle = document.querySelector(".hero__title");
        
        setTimeout(() => {
            const newBackground = document.createElement("div");
            newBackground.style.backgroundImage = "url('../../img/hero/photo.jpg')";
            newBackground.style.position = "absolute";
            newBackground.style.top = 0;
            newBackground.style.left = 0;
            newBackground.style.width = "100%";
            newBackground.style.height = "100%";
            newBackground.style.backgroundSize = "cover";
            newBackground.style.backgroundPosition = "center";
            newBackground.style.opacity = 0; 
            newBackground.style.transition = "opacity 3s ease-in-out"; 
            hero.appendChild(newBackground); 
            setTimeout(() => {
                newBackground.style.opacity = 1;
                heroTitle.style.transition = "color 3s ease-in-out"; 
                heroTitle.style.color = "var(--page-bg)";
            }, 50); 
        }, 200); 
    });
}

export default heroAnimation;
