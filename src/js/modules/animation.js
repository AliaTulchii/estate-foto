import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function heroAnimation() {
    // const hero = document.querySelector(".hero");

    // // Анімація при завантаженні сторінки
    // animateHero();

    // // ScrollTrigger для майбутнього використання, якщо буде потрібно
    // ScrollTrigger.create({
    //     trigger: hero,
    //     start: "top 80%", // Це залишайте для можливого використання в майбутньому
    //     onEnter: () => animateHero() // Якщо ви хочете, щоб анімація запускалася знову при повторному скролі
    // });

    // function animateHero() {
    //     // Додаємо клас для кольорового фону
    //     hero.classList.add("visible");

    //     // // Додаємо ефект мерехтіння з невеликим повторенням для "проявлення"
    //     // gsap.fromTo(
    //     //     hero,
    //     //     { opacity: 0.8 },
    //     //     {
    //     //         opacity: 1,
    //     //         duration: 1.5,
    //     //         ease: "power2.inOut",
    //     //         repeat: 3,
    //     //         yoyo: true
    //     //     }
    //     // );

    //     // Основна анімація переходу до кольорового
    //     gsap.to(hero, {
    //         filter: "grayscale(0%)",
    //         duration: 2,
    //         delay: 0.2,
    //         ease: "power2.inOut"
    //     });
    // }

    document.addEventListener("DOMContentLoaded", function() {
        const hero = document.querySelector(".hero");
        
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
                newBackground.style.opacity = 1; // Змінюємо непрозорість на 1
            }, 50); // Невелика затримка для активації анімації
        }, 200); // 1000 мс = 1 секунда затримки перед зміною фону
    });
}

export default heroAnimation;
