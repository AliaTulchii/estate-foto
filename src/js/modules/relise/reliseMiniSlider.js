// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// function reliseMiniSlider() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Закріплення блоку relise__list--mini до верху екрану
//     ScrollTrigger.create({
//         trigger: ".relise",
//         start: "top top",
//         end: "bottom bottom",
//         pin: ".relise__list--mini",
//         pinSpacing: false,
//         onUpdate: (self) => {
//             // Check if only 5% of the #relise section's bottom is visible
//             if (self.progress > 0.75) {
//                 miniList.style.opacity = 0; // Hide .relise__list--mini
//             } else {
//                 miniList.style.opacity = 1; // Show .relise__list--mini
//             }
//         }
//     });


//     // Відстеження активного зображення
//     const images = document.querySelectorAll(".relise__img");
//     const miniImages = document.querySelectorAll(".relise__img-mini");

//     // Створюємо IntersectionObserver для відстеження входження зображень у видиму область
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             const imgId = entry.target.id; // Отримуємо ID зображення
//             const relatedMiniImg = document.querySelector(`a[href="#${imgId}"] img`);

//             if (entry.isIntersecting) {
//                 // Додаємо клас для виділення мініатюри
//                 miniImages.forEach(miniImg => miniImg.classList.remove("relise__img-mini--active"));
//                 if (relatedMiniImg) {
//                     relatedMiniImg.classList.add("relise__img-mini--active");
//                 }
//             }
//         });
//     }, { threshold: 0.5 }); // Спрацьовує, коли половина зображення видима

//     // Відстежуємо всі зображення
//     images.forEach(img => observer.observe(img));
// }

// export default reliseMiniSlider

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
            gsap.to(miniList, { opacity: 0, duration: 0.3, ease: "power1.out" });
        },
        onLeaveBack: () => {
            gsap.to(miniList, { opacity: 1, duration: 0.3, ease: "power1.out" });
        }
    });

    const images = document.querySelectorAll(".relise__img");
    const miniImages = document.querySelectorAll(".relise__img-mini");

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