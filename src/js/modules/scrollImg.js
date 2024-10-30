import gsap from "gsap";

function scrollImg() {
    const images = document.querySelectorAll('.services__img, .pricecard__img');
    let baseDuration = 40;  // Базова тривалість обертання в секундах
    let fastDuration = 5;   // Тривалість обертання під час скролу
    let currentDuration = baseDuration; // Поточна тривалість обертання

    // Функція для налаштування швидкості обертання
    function setRotationSpeed(duration) {
        images.forEach((img) => {
            gsap.to(img, {
                duration: duration,
                rotation: "+=360",
                repeat: -1,
                ease: "linear",
                paused: false // Пауза не потрібна, щоб уникнути проблем
            });
        });
    }

    // Запуск обертання з базовою швидкістю
    setRotationSpeed(currentDuration);

    // Додаємо обробник події прокрутки
    window.addEventListener('scroll', () => {
        // Якщо прокрутка активна, пришвидшуємо обертання
        if (currentDuration !== fastDuration) {
            currentDuration = fastDuration;
            setRotationSpeed(currentDuration);
        }

        // Очищуємо таймер затримки
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
            // Повертаємо до базової швидкості після зупинки скролу
            if (currentDuration !== baseDuration) {
                currentDuration = baseDuration;
                setRotationSpeed(currentDuration);
            }
        }, 100); // Затримка перед поверненням до базової швидкості
    });
}

export default scrollImg;
