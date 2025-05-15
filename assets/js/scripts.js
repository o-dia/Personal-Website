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
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    const spacer = document.querySelector('.site-header-spacer');
    let headerHeight = header.offsetHeight;
    let scrollPosition = window.pageYOffset;
    let ticking = false;

    // Initialize header state
    function initHeader() {
        headerHeight = header.offsetHeight;
        spacer.style.height = headerHeight + 'px';
        checkScrollPosition();
    }

    // Check scroll position and update header
    function checkScrollPosition() {
        if (scrollPosition > headerHeight) {
            header.classList.add('fixed');
            spacer.classList.add('active');
            
            // Show header when near top of page
            if (scrollPosition < headerHeight * 2) {
                header.classList.add('show');
            } else {
                header.classList.remove('show');
            }
        } else {
            header.classList.remove('fixed');
            spacer.classList.remove('active');
        }
    }

    // Scroll event handler with requestAnimationFrame for performance
    window.addEventListener('scroll', function(e) {
        scrollPosition = window.pageYOffset;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkScrollPosition();
                ticking = false;
            });
            
            ticking = true;
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        initHeader();
    });

    // Also make header visible when hovering over content near the top
    header.addEventListener('mouseenter', function() {
        if (header.classList.contains('fixed')) {
            header.classList.add('show');
        }
    });

    // Initialize
    initHeader();
});