// Create rain effect
function createRain() {
    const rainContainer = document.getElementById('rain');
    const dropsCount = 250;

    for (let i = 0; i < dropsCount; i++) {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');

        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 1 + Math.random() * 2;
        const length = 10 + Math.random() * 20;

        drop.style.left = `${left}%`;
        drop.style.animationDelay = `${delay}s`;
        drop.style.animationDuration = `${duration}s`;
        drop.style.height = `${length}px`;

        rainContainer.appendChild(drop);
    }  
}

// Initialize rain on DOM load
document.addEventListener('DOMContentLoaded', createRain);

// Optional: Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
