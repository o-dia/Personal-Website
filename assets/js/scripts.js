/**
 * Main JavaScript file for the Personal Website
 */
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', 
                menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Header Implementation - HOVER ONLY
    const header = document.getElementById('masthead');
    if (!header) return; // Exit if header doesn't exist
    
    const headerHeight = header.offsetHeight;
    
    // Create spacer if it doesn't exist
    let spacer = document.querySelector('.header-spacer');
    if (!spacer) {
        spacer = document.createElement('div');
        spacer.className = 'header-spacer';
        header.parentNode.insertBefore(spacer, header);
    }
    spacer.style.height = headerHeight + 'px';
    
    // Create reveal zone if it doesn't exist
    let revealZone = document.querySelector('.header-reveal-zone');
    if (!revealZone) {
        revealZone = document.createElement('div');
        revealZone.className = 'header-reveal-zone';
        document.body.appendChild(revealZone);
        // Set height to match header
        revealZone.style.height = headerHeight + 'px';
}
    
    // Scroll handler - ONLY handle basic positioning, not showing
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add fixed class when scrolling down past header height
        if (scrollTop > headerHeight) {
            header.classList.add('fixed-header');
            spacer.classList.add('active');
            // We're NOT adding show-header class here anymore
        } else {
            header.classList.remove('fixed-header', 'show-header');
            spacer.classList.remove('active');
        }
    });
    
    // Hover handlers for revealing/hiding the header

    // When mouse enters the reveal zone at top of page
    revealZone.addEventListener('mouseenter', function() {
        if (header.classList.contains('fixed-header')) {
            header.classList.add('show-header');
        }
    });

    // When mouse leaves the reveal zone
    revealZone.addEventListener('mouseleave', function() {
        if (header.classList.contains('fixed-header')) {
            header.classList.remove('show-header');
        }
    });
    
    // Also handle direct header hovering
    // When mouse enters the header itself (after it's shown)

    header.addEventListener('mouseenter', function() {
        if (header.classList.contains('fixed-header')) {
            header.classList.add('show-header');
        }
    });

    // When mouse leaves the header
    header.addEventListener('mouseleave', function() {
        if (header.classList.contains('fixed-header')) {
            header.classList.remove('show-header');
        }
    });
});