function formValidation(){
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        let valid = true;

        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Wpisz prawidłowy adres e-mail.");
            valid = false;
        }

        const message = document.getElementById("message").value.trim();
        if (message.length < 5) {
            alert("Wiadomość musi zawierać co najmniej 5 znaków.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        } else {
            setTimeout(() => {
                form.reset();
            }, 100);
        }
    });
}

export default formValidation;