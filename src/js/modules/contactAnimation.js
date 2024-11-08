import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function contactAnimation() {
    const contactImg = document.querySelector(".contact__img");

    ScrollTrigger.create({
        trigger: "#contact",
        start: "top center", 
        end: "bottom top", 
        onEnter: () => animateToColor(), 
        onLeaveBack: () => resetToSketch(), 
        toggleActions: "play none none reverse" 
    });

    function animateToColor() {
        const newBackground = document.createElement("div");
        newBackground.classList.add("new-background");

        newBackground.style.position = "absolute";
        newBackground.style.top = "0";
        newBackground.style.left = "0";
        newBackground.style.width = "100%";
        newBackground.style.height = "100%";
        newBackground.style.backgroundImage = "url('../../img/contact/photo.jpg')";
        newBackground.style.backgroundSize = "cover";
        newBackground.style.backgroundPosition = "center";
        newBackground.style.opacity = "0";
        newBackground.style.transition = "opacity 2s ease-in-out";

        contactImg.appendChild(newBackground);

        setTimeout(() => {
            newBackground.style.opacity = "1";
        }, 50);
    }

    function resetToSketch() {
        const newBackground = contactImg.querySelector(".new-background");

        if (newBackground) {
            newBackground.style.opacity = "0";
            setTimeout(() => {
                newBackground.remove(); 
            }, 2000); 
        }
    }
}

export default contactAnimation;
