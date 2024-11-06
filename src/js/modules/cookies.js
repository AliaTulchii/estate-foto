// function cookies() {
//     function showCookieBanner() {
//         document.getElementById("cookieBanner").style.display = "block";
//     }
    
//     // Функція для приховування попапа
//     function closeCookieBanner() {
//         document.getElementById("cookieBanner").style.display = "none";
//     }
    
//     // Функція для прийняття cookies
//     function acceptCookies() {
//         // Зберегти налаштування cookies
//         localStorage.setItem('cookiesAccepted', 'true');
//         // Включити аналітику та персоналізацію
//         closeCookieBanner();
//     }
    
//     // Функція для відмови від cookies
//     function rejectCookies() {
//         // Зберегти налаштування cookies
//         localStorage.setItem('cookiesAccepted', 'false');
//         closeCookieBanner();
//     }
    
//     // Перевірити, чи вже була надана згода
//     window.onload = function() {
//         const cookiesAccepted = localStorage.getItem('cookiesAccepted');
//         if (!cookiesAccepted) {
//             showCookieBanner(); // Показати банер, якщо згоди не було
//         } 
//     };

    
// }

// export default cookies;

function showCookieBanner() {
    document.getElementById("cookieBanner").style.display = "block";
}

// Функція для приховування банера
function closeCookieBanner() {
    document.getElementById("cookieBanner").style.display = "none";
}

// Функція для прийняття cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    closeCookieBanner();
}

// Функція для відмови від cookies
function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    closeCookieBanner();
}

// Основна функція, яка перевіряє згоду користувача
function cookies() {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
        showCookieBanner();
    }
}

// Додаємо функції до глобального контексту для використання в HTML
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;
window.closeCookieBanner = closeCookieBanner;

export default cookies;