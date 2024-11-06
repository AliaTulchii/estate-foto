import gsap from "gsap";

function scrollImg() {
    const images = document.querySelectorAll('.services__img, .pricecard__img, .pricecard__iconmobile');
    let baseDuration = 40;  
    let fastDuration = 5;   
    let currentDuration = baseDuration; 

    
    function setRotationSpeed(duration) {
        images.forEach((img) => {
            gsap.to(img, {
                duration: duration,
                rotation: "+=360",
                repeat: -1,
                ease: "linear",
                paused: false 
            });
        });
    }


    setRotationSpeed(currentDuration);

    window.addEventListener('scroll', () => {

        if (currentDuration !== fastDuration) {
            currentDuration = fastDuration;
            setRotationSpeed(currentDuration);
        }

        
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
            
            if (currentDuration !== baseDuration) {
                currentDuration = baseDuration;
                setRotationSpeed(currentDuration);
            }
        }, 100); 
    });
}

export default scrollImg;
