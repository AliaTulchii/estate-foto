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