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

    // Sticky Header Implementation
    const header = document.getElementById('masthead');
    if (!header) return; // Exit if header doesn't exist
    
    // Variables
    let lastScrollTop = 0;
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
    }
    
    // Scroll handler
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add fixed class when scrolling down past header height
        if (scrollTop > headerHeight) {
            header.classList.add('fixed-header');
            spacer.classList.add('active');
            
            // Show header when scrolling up, hide when scrolling down
            if (scrollTop < lastScrollTop) {
                header.classList.add('show-header');
            } else {
                header.classList.remove('show-header');
            }
        } else {
            header.classList.remove('fixed-header', 'show-header');
            spacer.classList.remove('active');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Hover handler for reveal zone
    revealZone.addEventListener('mouseenter', function() {
        if (header.classList.contains('fixed-header')) {
            header.classList.add('show-header');
        }
    });
    
    // Add initial classes
    if (window.pageYOffset > headerHeight) {
        header.classList.add('fixed-header');
        spacer.classList.add('active');
    }
});