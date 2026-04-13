/**
 * Bodega Lomé - Script Premium
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation AOS est faite dans le HTML via script tag
    
    // Navbar Scroll Effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // Dans cette version premium, on pourrait ouvrir un overlay plein écran
            console.log('Toggle mobile menu');
        });
    }

    // Sécurité: Sanitisation factice et validation de formulaire
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const button = newsletterForm.querySelector('button');
            
            if (input.value && input.value.includes('@')) {
                const originalText = button.innerText;
                button.innerText = "MERCI !";
                button.disabled = true;
                button.classList.add('bg-[#20B2AA]');
                
                input.value = "";
                
                setTimeout(() => {
                    button.innerText = originalText;
                    button.disabled = false;
                    button.classList.remove('bg-[#20B2AA]');
                }, 3000);
            }
        });
    }

    // Smooth Scroll interactif
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
