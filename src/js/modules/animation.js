import gsap from "gsap";


function heroAnimation() {
    const maskContainer = document.querySelector(".mask-container");
    const numBlobs = 15; // Кількість плям

    // Створення плям
    for (let i = 0; i < numBlobs; i++) {
        const mask = document.createElement("div");
        mask.classList.add("mask");
        maskContainer.appendChild(mask);
        
        // Випадкові розміри та позиції плям
        const size = `${Math.random() * 50 + 30}px`; // Випадковий розмір
        const topPos = `${Math.random() * 100}%`; // Випадкова позиція
        const leftPos = `${Math.random() * 100}%`; // Випадкова позиція
        
        // Задаємо початкові стилі для плями
        gsap.set(mask, {
            width: size,
            height: size,
            top: topPos,
            left: leftPos,
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Прозорий колір
        });

        // Анімація плям
        gsap.to(mask, {
            clipPath: "circle(100% at 50% 50%)", // Відкриваємо пляму
            opacity: 1,
            duration: 1.5,
            delay: Math.random() * 2, // Випадкова затримка
            onComplete: () => {
                // Після завершення анімації змінюємо фон
                if (i === numBlobs - 1) {
                    // Тут можна додати щось, коли всі плями з'являться
                }
            }
        });
    }
}
export default heroAnimation;
