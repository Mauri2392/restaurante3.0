document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // Todas las secciones del documento
    const navLinks = document.querySelectorAll('.nav-link'); // Todos los enlaces del navbar
    const navbar = document.querySelector('.navbar-container'); // Contenedor del navbar

    const observerOptions = {
        root: null,
        threshold: 0,
        rootMargin: '-50px 0px -90% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Elimina la clase "active" de todos los enlaces
                navLinks.forEach((link) => link.classList.remove('active'));

                // Encuentra el enlace correspondiente a la sección activa
                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );
                if (activeLink) {
                    activeLink.classList.add('active');

                    // Desplaza el navbar para centrar el enlace activo
                    activeLink.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                    });
                }
            }
        });
    }, observerOptions);

    // Observa cada sección
    sections.forEach((section) => observer.observe(section));
}); 



document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el mapa centrado en una ubicación específica
    const map = L.map('map').setView([38.361644879769486, -0.49196990855116524], 14); // Coordenadas de Madrid, España

    // Añade un mapa base desde OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añade un marcador en el centro del mapa
    L.marker([38.361644879769486, -0.49196990855116524]).addTo(map)
        .bindPopup('Estamos aquí.<br>¡Visítanos!')
        .openPopup();
});
