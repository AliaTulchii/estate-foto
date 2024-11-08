function requiredInput() {
    const inputs = document.querySelectorAll('.contact__input, .contact__textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                console.log("Додається клас filled"); 
                input.classList.add('filled');
            } else {
                console.log("Видаляється клас filled"); 
                input.classList.remove('filled');
            }
        });
    });
}

export default requiredInput;
