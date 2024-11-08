import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function scroll() { 
    
gsap.registerPlugin(ScrollTrigger);


const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

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
                toggleActions: 'play none none reverse'
            }
        }
    );
});
}

export default scroll