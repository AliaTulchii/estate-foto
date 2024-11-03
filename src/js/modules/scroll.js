import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function scroll() {
    let swiper; // Оголошуємо змінну для Swiper

    function initSwiper() {
        swiper = new Swiper('.swiper-container', {
            modules: [Navigation, Pagination],
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    function destroySwiper() {
        if (swiper) {
            swiper.destroy(true, true); // Зупиняє та очищає Swiper
            swiper = null;
        }
    }

    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        if (window.innerWidth >= 769) {
            destroySwiper();
            initSwiper(); // Ініціалізуємо Swiper

            // Анімація карток для екранів від 769px
            gsap.utils.toArray('.card').forEach((card) => {
                gsap.fromTo(
                    card,
                    { x: 100, opacity: 0, rotate: gsap.getProperty(card, 'rotate') },
                    {
                        x: 0,
                        opacity: 1,
                        rotate: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            end: 'top 20%',
                            scrub: true,
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        } else {
            destroySwiper(); // Знищуємо Swiper для екранів до 769px

            // Stack анімація для карток, що накладаються одна на одну на 80%
            const cards = gsap.utils.toArray('.card');
            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { y: index * 100, opacity: 0 },
                    {
                        y: index * -350, // Накладання кожної картки на 80%
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            end: '+=200',
                            scrub: true,
                        },
                    }
                );
            });
        }
    }

    document.addEventListener('DOMContentLoaded', initAnimations);

    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Очищуємо попередні ScrollTriggers
        initAnimations(); // Заново ініціалізуємо анімації
    });
}

export default scroll;



// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// function scroll() {
//     let swiper; // Оголошуємо змінну для Swiper

//     function initSwiper() {
//         swiper = new Swiper('.swiper-container', {
//             modules: [Navigation, Pagination],
//             slidesPerView: 3,
//             spaceBetween: 20,
//             navigation: true,
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//         });
//     }

//     function destroySwiper() {
//         if (swiper) {
//             swiper.destroy(true, true); // Зупиняє та очищає Swiper
//             swiper = null;
//         }
//     }

//     function initAnimations() {
//         gsap.registerPlugin(ScrollTrigger);

//         // Перевірка ширини екрану
//         if (window.innerWidth >= 769) {
//             destroySwiper(); // Знищуємо Swiper при ширині від 769px
//             initSwiper(); // Ініціалізуємо Swiper

//             // Анімація карток при прокрутці
//             gsap.utils.toArray('.card').forEach((card) => {
//                 gsap.fromTo(
//                     card,
//                     { x: 100, opacity: 0, rotate: gsap.getProperty(card, 'rotate') },
//                     {
//                         x: 0,
//                         opacity: 1,
//                         rotate: 0,
//                         duration: 1,
//                         ease: 'power3.out',
//                         scrollTrigger: {
//                             trigger: card,
//                             start: 'top 80%',
//                             end: 'top 20%',
//                             scrub: true,
//                             toggleActions: 'play none none reverse',
//                         },
//                     }
//                 );
//             });
//         } else {
//             // Stack анімація карток для екранів до 769px
//             destroySwiper(); // Знищуємо Swiper, щоб він не активувався на маленьких екранах

//             gsap.utils.toArray('.card').forEach((card, index) => {
//                 gsap.fromTo(
//                     card,
//                     { y: index * 50, opacity: 0, scale: 0.9 },
//                     {
//                         y: 0,
//                         opacity: 1,
//                         scale: 1,
//                         duration: 0.5,
//                         ease: 'power3.out',
//                         scrollTrigger: {
//                             trigger: card,
//                             start: 'top bottom',
//                             end: 'top center',
//                             scrub: true,
//                             toggleActions: 'play none none reverse',
//                         },
//                     }
//                 );
//             });
//         }
//     }

//     // Запускаємо анімації після завантаження DOM
//     document.addEventListener('DOMContentLoaded', initAnimations);

//     // Додаємо слухача події зміни розміру
//     window.addEventListener('resize', () => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Очищуємо попередні ScrollTriggers
//         initAnimations(); // Заново ініціалізуємо анімації
//     });
// }

// export default scroll;





// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Імпорт GSAP і ScrollTrigger
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// function scroll() { 
    
// gsap.registerPlugin(ScrollTrigger);

// // Ініціалізація Swiper
// const swiper = new Swiper('.swiper-container', {
//     modules: [Navigation, Pagination],
//     slidesPerView: 3,
//     spaceBetween: 20,
//     navigation: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     // Інші налаштування за потреби
// });

// // Анімація карток при прокрутці
// gsap.utils.toArray('.card').forEach((card) => {
//     gsap.fromTo(
//         card,
//         { x: 100, opacity: 0, rotate: gsap.getProperty(card, 'rotate') },
//         {
//             x: 0,
//             opacity: 1,
//             rotate: 0,
//             duration: 1,
//             ease: 'power3.out',
//             scrollTrigger: {
//                 trigger: card,
//                 start: 'top 80%',
//                 end: 'top 20%',
//                 scrub: true,
//                 toggleActions: 'play none none reverse'
//             }
//         }
//     );
// });
// }

// export default scroll