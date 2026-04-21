document.addEventListener('DOMContentLoaded', () => {
    console.log('ERBD 2026 Mini-course site loaded.');

    // Add subtle hover animations or tracking if needed
    const materialCards = document.querySelectorAll('.material-card');
    
    materialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Potential for sound effects or additional info reveal
        });
    });

    // Handle smooth navigation if any internal links are added later
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });
});
