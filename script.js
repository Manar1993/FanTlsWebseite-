// Slider alle 4 Sekunden wechseln
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let current = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 4000);
    }

    // Kontaktformular (Demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Vielen Dank für Ihre Nachricht! (Demo: Die Daten werden nicht wirklich versendet.)');
            contactForm.reset();
        });
    }

    // Preis-Anfrage Formular (Demo)
    const pricingForm = document.getElementById('pricingForm');
    if (pricingForm) {
        pricingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen. (Demo)');
            pricingForm.reset();
        });
    }
});
