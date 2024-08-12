document.addEventListener('DOMContentLoaded', () => {
    const englishSwitch = document.getElementById('english-switch');
    const arabicSwitch = document.getElementById('arabic-switch');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');
    const body = document.body;

    // Function to set the language
    function setLanguage(lang) {
        localStorage.setItem('language', lang);

        // Update content for all elements including the navbar
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        if (lang === 'ar') {
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
            body.classList.add('rtl');
        } else {
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
            body.classList.remove('rtl');
        }
    }

    // Function to change the language
    function changeLanguage(lang) {
        setLanguage(lang);
    }

    // Event listener for English language switch
    englishSwitch.addEventListener('click', (event) => {
        event.preventDefault();
        changeLanguage('en');
    });

    // Event listener for Arabic language switch
    arabicSwitch.addEventListener('click', (event) => {
        event.preventDefault();
        changeLanguage('ar');
    });

    // Retrieve saved language preference from localStorage
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // Toggle functionality for showing/hiding the navbar links on smaller screens
    navbarToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('show');
        navbarToggle.classList.toggle('active'); // Toggle the active class for background color
        body.classList.toggle('content-bg-matched'); // Toggle content background to match navbar
    });
});
