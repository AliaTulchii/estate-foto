import gsap from "gsap";

function scrollImg() {
    // Отримуємо всі зображення з класом services__img
const images = document.querySelectorAll('.services__img');

// Додаємо обробник події для прокрутки
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Отримуємо позицію прокрутки

    images.forEach((img, index) => {
        // Обчислюємо обертання на основі позиції прокрутки
        const rotation = scrollY * 0.1; // Множник для контролю швидкості обертання
        gsap.to(img, {
            rotation: rotation,
            ease: "power1.out",
            duration: 0.3 // Тривалість анімації
        });
    });
});
}

export default scrollImg;