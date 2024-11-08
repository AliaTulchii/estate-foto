function mobileOpninions(){
    const cards = document.querySelectorAll('.opinions__card');

    cards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    card.style.transform = `translateY(-${index * 80}%)`;
                    card.style.zIndex = cards.length - index;
                }
            });
        }, {
            threshold: 0.1, 
        });
    
        observer.observe(card);
    });
    
}

export default mobileOpninions;