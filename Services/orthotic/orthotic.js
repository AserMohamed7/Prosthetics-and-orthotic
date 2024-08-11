document.addEventListener('DOMContentLoaded', () => {
    const enButton = document.getElementById('en-button');
    const arButton = document.getElementById('ar-button');
    
    function setLanguage(lang) {
        document.body.setAttribute('lang', lang);
        
        document.querySelectorAll('[data-en]').forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
    }
    
    enButton.addEventListener('click', () => setLanguage('en'));
    arButton.addEventListener('click', () => setLanguage('ar'));
    
    // Set the default language
    setLanguage('en');
});
