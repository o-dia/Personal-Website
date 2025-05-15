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

    // COMPLETELY REVISED STICKY HEADER IMPLEMENTATION
    console.log("Initializing sticky header...");
    
    // 1. Get elements
    const header = document.querySelector('.site-header') || document.getElementById('masthead');
    if (!header) {
        console.warn("Header element not found!");
        return;
    }
    
    console.log("Found header:", header);
    
    // 2. Create the hover trigger zone
    const hoverZone = document.createElement('div');
    hoverZone.id = 'header-hover-trigger';
    hoverZone.style.position = 'fixed';
    hoverZone.style.top = '0';
    hoverZone.style.left = '0';
    hoverZone.style.width = '100%';
    hoverZone.style.height = '40px';
    hoverZone.style.zIndex = '999';
    hoverZone.style.pointerEvents = 'none'; // Start with no pointer events
    document.body.appendChild(hoverZone);
    
    // 3. Create a spacer for when header becomes fixed
    const headerHeight = header.offsetHeight;
    const spacer = document.createElement('div');
    spacer.id = 'header-spacer';
    spacer.style.height = headerHeight + 'px';
    spacer.style.display = 'none';
    header.parentNode.insertBefore(spacer, header);
    
    console.log("Created hover zone and spacer");
    
    // 4. Track scroll position
    let lastScrollTop = 0;
    let headerVisible = false;
    let isAtTop = true;
    
    // 5. Scroll handler
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        isAtTop = scrollTop <= 10;
        
        // At the top - normal header
        if (isAtTop) {
            header.classList.remove('sticky-header');
            header.classList.remove('show-sticky-header');
            header.style.position = '';
            header.style.top = '';
            header.style.width = '';
            header.style.zIndex = '';
            spacer.style.display = 'none';
            hoverZone.style.pointerEvents = 'none';
            headerVisible = false;
            
        // Scrolled down - prepare sticky header
        } else {
            // If we haven't added the class yet
            if (!header.classList.contains('sticky-header')) {
                header.classList.add('sticky-header');
                spacer.style.display = 'block';
                hoverZone.style.pointerEvents = 'auto';
            }
            
            // Show header when scrolling up
            if (scrollTop < lastScrollTop && !headerVisible) {
                header.classList.add('show-sticky-header');
                headerVisible = true;
            } 
            // Hide header when scrolling down
            else if (scrollTop > lastScrollTop + 5 && headerVisible) {
                header.classList.remove('show-sticky-header');
                headerVisible = false;
            }
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 6. Hover handlers
    hoverZone.addEventListener('mouseenter', function() {
        console.log("Hover zone entered");
        if (!isAtTop) {
            header.classList.add('show-sticky-header');
            headerVisible = true;
        }
    });
    
    header.addEventListener('mouseleave', function() {
        if (!isAtTop && !hoverZone.matches(':hover')) {
            header.classList.remove('show-sticky-header');
            headerVisible = false;
        }
    });
    
    // 7. Initial state check
    if (window.pageYOffset > 10) {
        header.classList.add('sticky-header');
        spacer.style.display = 'block';
        hoverZone.style.pointerEvents = 'auto';
    }
    
    console.log("Sticky header initialization complete");
});