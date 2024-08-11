document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map and set its view to Cairo
    var map = L.map('map').setView([30.0444, 31.2357], 12); // Coordinates for Cairo

    // Add a tile layer to the map (you can customize the tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Coordinates for Maadi and Imbaba
    var maadiLatLng = [29.9604, 31.2554];
    var imbabaLatLng = [30.0668, 31.2045];

    // Event listener for Maadi branch button
    document.getElementById('w-c-s-bgc_p-1-dm-id-2').addEventListener('click', function (e) {
        e.preventDefault();
        map.setView(maadiLatLng, 14); // Zoom in to Maadi
        L.marker(maadiLatLng).addTo(map).bindPopup("Maadi, Cairo").openPopup();
    });

    // Event listener for Imbaba branch button
    document.getElementById('w-c-s-bgc_p-1-dm-id-3').addEventListener('click', function (e) {
        e.preventDefault();
        map.setView(imbabaLatLng, 14); // Zoom in to Imbaba
        L.marker(imbabaLatLng).addTo(map).bindPopup("Imbaba, Cairo").openPopup();
    });

    // Language switch functionality
    document.getElementById('en-button').addEventListener('click', function() {
        document.documentElement.setAttribute('lang', 'en');
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });
    });

    document.getElementById('ar-button').addEventListener('click', function() {
        document.documentElement.setAttribute('lang', 'ar');
        document.querySelectorAll('[data-ar]').forEach(el => {
            el.textContent = el.getAttribute('data-ar');
        });
    });
});
