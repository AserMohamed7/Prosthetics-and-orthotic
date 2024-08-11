// contactus.js

document.addEventListener('DOMContentLoaded', function () {
    const enButton = document.getElementById('en-button');
    const arButton = document.getElementById('ar-button');
    
    const elementsToTranslate = document.querySelectorAll('[data-en]');
    function translateToLanguage(language) {
        elementsToTranslate.forEach(element => {
            element.textContent = element.getAttribute(`data-${language}`);
        });

        // Optional: Change directionality based on language
        document.body.style.direction = language === 'ar' ? 'rtl' : 'ltr';
    }

    enButton.addEventListener('click', () => translateToLanguage('en'));
    arButton.addEventListener('click', () => translateToLanguage('ar'));

    
    // Default language
    translateToLanguage('en');
});
