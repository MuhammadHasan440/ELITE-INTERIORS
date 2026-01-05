// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Gallery Filtering with animation
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        galleryItems.forEach((item, index) => {
            if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                // Add delay for staggered animation
                setTimeout(() => {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, 10);
                }, index * 100);
            } else {
                item.classList.remove('visible');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Enhanced Gallery Hover Effect
const beforeAfterContainers = document.querySelectorAll('.before-after-container');

beforeAfterContainers.forEach(container => {
    // Add touch events for mobile
    container.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.classList.add('hover-active');
    });
    
    container.addEventListener('touchend', function() {
        this.classList.remove('hover-active');
    });
    
    // Click to toggle for mobile
    container.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            this.classList.toggle('hover-active');
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const projectType = document.getElementById('project-type').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    const originalBg = submitBtn.style.background;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Enquiry Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
    submitBtn.disabled = true;
    
    // In a real implementation, you would send this data to a server
    console.log({
        name, phone, email, projectType, message
    });
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = originalBg;
        submitBtn.disabled = false;
        contactForm.reset();
    }, 3000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.gallery-item, .feature, .contact-item').forEach(el => {
    observer.observe(el);
});

// Floating animation for trust badges
const badges = document.querySelectorAll('.badge');
badges.forEach((badge, index) => {
    badge.style.animationDelay = `${index * 0.2}s`;
});

// Initialize all gallery items as visible
window.addEventListener('load', () => {
    galleryItems.forEach(item => {
        item.classList.add('visible');
    });
});