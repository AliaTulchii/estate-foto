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

// function showCookieBanner() {
//     document.getElementById("cookieBanner").style.display = "block";
// }

// // Функція для приховування банера
// function closeCookieBanner() {
//     document.getElementById("cookieBanner").style.display = "none";
// }

// // Функція для прийняття cookies
// function acceptCookies() {
//     localStorage.setItem('cookiesAccepted', 'true');
//     closeCookieBanner();
// }

// // Функція для відмови від cookies
// function rejectCookies() {
//     localStorage.setItem('cookiesAccepted', 'false');
//     closeCookieBanner();
// }

// // Основна функція, яка перевіряє згоду користувача
// function cookies() {
//     const cookiesAccepted = localStorage.getItem('cookiesAccepted');
//     if (!cookiesAccepted) {
//         showCookieBanner();
//     }
// }

// // Додаємо функції до глобального контексту для використання в HTML
// window.acceptCookies = acceptCookies;
// window.rejectCookies = rejectCookies;
// window.closeCookieBanner = closeCookieBanner;

// export default cookies;

// function enableAnalytics() {
//     // Створюємо тег <script> для завантаження Google Analytics
//     const scriptTag = document.createElement("script");
//     scriptTag.async = true;
//     scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-9QB40339F4";
//     document.head.appendChild(scriptTag);

//     // Додаємо конфігурацію Google Analytics
//     scriptTag.onload = function () {
//         window.dataLayer = window.dataLayer || [];
//         function gtag() { dataLayer.push(arguments); }
//         gtag('js', new Date());
//         gtag('config', 'G-9QB40339F4');
//     };
// }

// // Показ банера cookie
// function showCookieBanner() {
//     const banner = document.getElementById("cookieBanner");
//     banner.classList.add("visible"); // Додаємо клас видимості
//     banner.classList.remove("hidden");
// }

// // Функція для приховування банера
// function closeCookieBanner() {
//     const banner = document.getElementById("cookieBanner");
//     banner.classList.add("hidden"); // Додаємо клас для приховування
//     banner.classList.remove("visible");
// }

// // Функція для прийняття cookies
// function acceptCookies() {
//     localStorage.setItem('cookiesAccepted', 'true');
//     closeCookieBanner();
//     enableAnalytics(); // Вмикаємо аналітику після прийняття cookies
// }

// // Функція для відмови від cookies
// function rejectCookies() {
//     localStorage.setItem('cookiesAccepted', 'false');
//     closeCookieBanner();
// }

// // Основна функція для показу банера з затримкою
// function cookies() {
//     const cookiesAccepted = localStorage.getItem('cookiesAccepted');

//     // Показуємо банер через 4 секунди, якщо згоду ще не було надано
//     if (!cookiesAccepted) {
//         setTimeout(showCookieBanner, 4000);
//     } else if (cookiesAccepted === 'true') {
//         enableAnalytics(); // Якщо згода вже була дана, запускаємо аналітику відразу
//     }
// }

// // Додаємо функції до глобального контексту для використання в HTML
// window.acceptCookies = acceptCookies;
// window.rejectCookies = rejectCookies;
// window.closeCookieBanner = closeCookieBanner;

// // Запускаємо основну функцію cookies при завантаженні сторінки
// cookies();

// export default cookies;

function enableAnalytics() {
    console.log("Analytics enabled");
    const scriptTag = document.createElement("script");
    scriptTag.async = true;
    scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-9QB40339F4";
    document.head.appendChild(scriptTag);

    scriptTag.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-9QB40339F4');
        console.log("Analytics loaded");
    };
}

// Показ банера cookie
function showCookieBanner() {
    const banner = document.getElementById("cookieBanner");
    if (banner) {
        banner.classList.add("visible"); // Додаємо клас видимості
        banner.classList.remove("hidden");
        console.log("Cookie banner shown.");
    } else {
        console.error("Cookie banner not found.");
    }
}

// Функція для приховування банера
function closeCookieBanner() {
    const banner = document.getElementById("cookieBanner");
    if (banner) {
        banner.classList.add("hidden");
        banner.classList.remove("visible");
        console.log("Cookie banner hidden.");
    }
}

// Функція для прийняття cookies
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    closeCookieBanner();
    enableAnalytics();
    console.log("Cookies accepted.");
}

// Функція для відмови від cookies
function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    closeCookieBanner();
    console.log("Cookies rejected.");
}

// Основна функція для показу банера з затримкою
function cookies() {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted) {
        console.log("Showing cookie banner after 4 seconds...");
        setTimeout(showCookieBanner, 4000);
    } else if (cookiesAccepted === 'true') {
        enableAnalytics();
    }
}

// Додаємо функції до глобального контексту для використання в HTML
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;
window.closeCookieBanner = closeCookieBanner;

// Запускаємо основну функцію cookies при завантаженні сторінки
document.addEventListener("DOMContentLoaded", cookies);

export default cookies;