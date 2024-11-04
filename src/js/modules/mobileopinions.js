function mobileOpninions(){
    const cards = document.querySelectorAll('.opinions__card');

    cards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Overlap each card over the previous one by translating upwards
                    card.style.transform = `translateY(-${index * 80}%)`;
                    card.style.zIndex = cards.length - index; // Ensures stacking order
                }
            });
        }, {
            threshold: 0.1, // Start animation when 10% of the card enters the viewport
        });
    
        observer.observe(card);
    });
    
}

export default mobileOpninions;