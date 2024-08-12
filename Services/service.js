document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    const langIcon = document.getElementById('lang-icon');
    const currentLang = document.getElementById('current-lang');

    function setLanguage(lang) {
        // Save the language preference in localStorage
        localStorage.setItem('language', lang);

        // Update text content based on language, excluding the navbar
        document.querySelectorAll('[data-en]').forEach(el => {
            if (!el.closest('.navbar')) {
                el.textContent = el.getAttribute(`data-${lang}`);
            }
        });

        // Update the navbar links text content based on language
        document.querySelectorAll('.navbar a').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        // Update the direction and alignment based on the language
        if (lang === 'ar') {
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
            langIcon.textContent = '🇲🇦'; // Arabic flag
            currentLang.textContent = 'عربي'; // Arabic text
        } else {
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
            langIcon.textContent = '🇬🇧'; // English flag
            currentLang.textContent = 'English'; // English text
        }
    }

    // Add event listeners for language selection from dropdown
    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const lang = item.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Set the language based on localStorage or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
