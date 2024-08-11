// language-switcher.js

document.addEventListener('DOMContentLoaded', () => {
    const enButton = document.getElementById('en-button');
    const arButton = document.getElementById('ar-button');
    
    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        
        // Update text content for h2, p, and ul elements
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerHTML = el.getAttribute(`data-${lang}`);
        });
    }
    
    enButton.addEventListener('click', () => setLanguage('en'));
    arButton.addEventListener('click', () => setLanguage('ar'));
    
    // Set the language based on localStorage or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
