function cookies() {
    console.log("Checking for Google Tag Manager script...");

    function enableGTM() {
        console.log("Enabling Google Tag Manager...");

        if (!document.querySelector(`script[src*="googletagmanager.com/gtm.js"]`)) {
            console.log("Google Tag Manager script not found, adding it...");
            const scriptTag = document.createElement("script");
            scriptTag.async = true;
            scriptTag.src = "https://www.googletagmanager.com/gtm.js?id=GTM-W6JBKGTK";
            document.head.appendChild(scriptTag);

            scriptTag.onload = function () {
                console.log("Google Tag Manager script loaded.");
            };
        } else {
            console.warn("Google Tag Manager script already exists.");
        }
    }

    function trackPhoneClick() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'click',
            'event_category': 'Phone',
            'event_label': '+48 664 502 750',
            'value': 1
        });
        console.log('Phone number clicked');
    }

    function showCookieBanner() {
        const banner = document.getElementById("cookieBanner");
        if (banner) {
            banner.classList.add("visible");
            banner.classList.remove("hidden");
            console.log("Cookie banner shown.");
        } else {
            console.error("Cookie banner not found.");
        }
    }

    function closeCookieBanner() {
        const banner = document.getElementById("cookieBanner");
        if (banner) {
            banner.classList.add("hidden");
            banner.classList.remove("visible");
            console.log("Cookie banner hidden.");
        }
    }

    function acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        closeCookieBanner();
        enableGTM();
        console.log("Cookies accepted.");
    }

    function rejectCookies() {
        localStorage.setItem('cookiesAccepted', 'false');
        closeCookieBanner();
        console.log("Cookies rejected.");
    }

    function checkedCookies() {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');

        if (!cookiesAccepted) {
            console.log("Showing cookie banner after 4 seconds...");
            setTimeout(showCookieBanner, 4000);
        } else if (cookiesAccepted === 'true') {
            enableGTM();
        }
    }

    window.acceptCookies = acceptCookies;
    window.rejectCookies = rejectCookies;
    window.closeCookieBanner = closeCookieBanner;
    window.trackPhoneClick = trackPhoneClick;

    document.addEventListener("DOMContentLoaded", () => {
        checkedCookies();
        console.log('Cookies script initialized');

        const phoneLink = document.querySelector('.nav__item--tel');
        if (phoneLink) {
            phoneLink.addEventListener('click', trackPhoneClick);
        } else {
            console.error("Phone link not found.");
        }
    });
}

export default cookies;