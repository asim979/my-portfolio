function createRain() {
    const rainContainer = document.getElementById('rain');
    if (!rainContainer) return; // Exit if no container

    rainContainer.innerHTML = ''; // Clear previous drops
    const dropsCount = 250;

    for (let i = 0; i < dropsCount; i++) {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');

        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDelay = `${Math.random() * 5}s`;
        drop.style.animationDuration = `${1 + Math.random() * 2}s`;
        drop.style.height = `${10 + Math.random() * 20}px`;

        rainContainer.appendChild(drop);
    }
}

// Smooth scroll with error handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize after DOM is fully loaded
document.addEventListener('DOMContentLoaded', createRain);