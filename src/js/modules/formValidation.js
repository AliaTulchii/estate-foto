function formValidation(){
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        let valid = true;

        // Валідація email
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Wpisz prawidłowy adres e-mail.");
            valid = false;
        }

        // Валідація повідомлення (мінімум 5 символів)
        const message = document.getElementById("message").value.trim();
        if (message.length < 5) {
            alert("Wiadomość musi zawierać co najmniej 5 znaków.");
            valid = false;
        }

        // Якщо валідація не пройшла, зупиняємо відправку форми
        if (!valid) {
            event.preventDefault();
        } else {
            // Якщо валідація пройшла, очищаємо форму після відправки
            setTimeout(() => {
                form.reset();
            }, 100); // Додаємо невелику затримку для завершення відправки
        }
    });
}

export default formValidation;