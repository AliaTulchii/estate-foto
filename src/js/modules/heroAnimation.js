import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function heroAnimation() {

    document.addEventListener("DOMContentLoaded", function() {
        const hero = document.querySelector(".hero");
        const heroTitle = document.querySelector(".hero__title");
        
        // Затримка перед зміною фону
        setTimeout(() => {
            // Створюємо новий елемент для другого фону
            const newBackground = document.createElement("div");
            newBackground.style.backgroundImage = "url('../../img/hero/photo.jpg')";
            newBackground.style.position = "absolute";
            newBackground.style.top = 0;
            newBackground.style.left = 0;
            newBackground.style.width = "100%";
            newBackground.style.height = "100%";
            newBackground.style.backgroundSize = "cover";
            newBackground.style.backgroundPosition = "center";
            newBackground.style.opacity = 0; // Початкова непрозорість
            newBackground.style.transition = "opacity 3s ease-in-out"; // Змінили тривалість переходу на 5 секунд
            hero.appendChild(newBackground); // Додаємо новий елемент у секцію
            
            // Анімація появи нового фону
            setTimeout(() => {
                newBackground.style.opacity = 1;
                heroTitle.style.transition = "color 3s ease-in-out"; // Add smooth color transition
                heroTitle.style.color = "var(--page-bg)";
            }, 50); // Невелика затримка для активації анімації
        }, 200); // 1000 мс = 1 секунда затримки перед зміною фону
    });
}

export default heroAnimation;
