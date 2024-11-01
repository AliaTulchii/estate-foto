import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function contactAnimation() {
    const contactImg = document.querySelector(".contact__img");

    ScrollTrigger.create({
        trigger: "#contact",
        start: "top center", // Start the animation when the top of #contact is in the center of the viewport
        end: "bottom top", // End the animation when #contact leaves the viewport
        onEnter: () => animateToColor(), // Fade in new image on enter
        onLeaveBack: () => resetToSketch(), // Fade back to sketch on leave back
        toggleActions: "play none none reverse" // Controls play and reverse actions
    });

    function animateToColor() {
        const newBackground = document.createElement("div");
        newBackground.classList.add("new-background");

        // Set up the new background style
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
        
        // Append the new background to contactImg
        contactImg.appendChild(newBackground);

        // Trigger the fade-in effect
        setTimeout(() => {
            newBackground.style.opacity = "1";
        }, 50);
    }

    function resetToSketch() {
        const newBackground = contactImg.querySelector(".new-background");

        if (newBackground) {
            newBackground.style.opacity = "0"; // Fade out the new background
            setTimeout(() => {
                newBackground.remove(); // Remove element after fade out completes
            }, 2000); // Match this with the fade-out duration
        }
    }
}

export default contactAnimation;
