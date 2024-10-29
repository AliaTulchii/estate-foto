import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function reliseMiniSlider() {
    gsap.registerPlugin(ScrollTrigger);

    // Закріплення блоку relise__list--mini до верху екрану
    ScrollTrigger.create({
        trigger: ".relise",
        start: "top top",
        end: "bottom bottom",
        pin: ".relise__list--mini",
        pinSpacing: false
    });

    // Відстеження активного зображення
    const images = document.querySelectorAll(".relise__img");
    const miniImages = document.querySelectorAll(".relise__img-mini");

    // Створюємо IntersectionObserver для відстеження входження зображень у видиму область
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const imgId = entry.target.id; // Отримуємо ID зображення
            const relatedMiniImg = document.querySelector(`a[href="#${imgId}"] img`);

            if (entry.isIntersecting) {
                // Додаємо клас для виділення мініатюри
                miniImages.forEach(miniImg => miniImg.classList.remove("relise__img-mini--active"));
                if (relatedMiniImg) {
                    relatedMiniImg.classList.add("relise__img-mini--active");
                }
            }
        });
    }, { threshold: 0.5 }); // Спрацьовує, коли половина зображення видима

    // Відстежуємо всі зображення
    images.forEach(img => observer.observe(img));
}

export default reliseMiniSlider