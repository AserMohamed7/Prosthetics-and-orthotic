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

// document.addEventListener('DOMContentLoaded' , function MakeItBold(){
//     const elements = document.querySelectorAll("[data-en]");
//     elements.forEach(element =>{
//         const Encontent = element.getAttribute('data-en');
//         const Arcontent = element.getAttribute('data-ar');
//         const  chosenContent = Encontent;
//
//         const precontent = Encontent.split(':')
//         if(precontent>1){
//             element.innerHTML = `<strong>${precontent[0]}:</strong>${precontent[1]}`;
//         }
//         else {
//             element.textContent = Encontent;
//         }
//
//     });
// } )

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.getElementById('lang-container');

    elements.forEach(element => {
        // Get the content from the data attribute
        const contentEn = element.getAttribute('data-en');
        const contentAr = element.getAttribute('data-ar');

        // Choose the language here (for example 'en' or 'ar')
        const chosenContent = contentEn; // Switch to contentAr for Arabic

        // Split the content into the part you want bold
        const parts = chosenContent.split(":");
        if (parts.length > 1) {
            // Set the inner HTML with the first part bold
            element.innerHTML = `<strong>${parts[0]}:</strong> ${parts[1]}`;
        } else {
            // If there's no colon, just set the full text
            element.textContent = chosenContent;
        }
    });
});
