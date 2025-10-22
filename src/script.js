import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to initialize navbar scroll trigger
export function initNavbarScrollTrigger() {
  // Check if we're on mobile view (screen width <= 768px)
  const isMobile = () => window.innerWidth <= 768;
  
  // Create the scroll trigger
  ScrollTrigger.create({
    trigger: '.hero', // Target the hero section
    start: '80% top', // Start when 80% of hero section has scrolled past the top
    end: 'bottom top', // End when hero section is completely past the top
    onEnter: () => {
      // Only apply fixed positioning on mobile
      if (isMobile()) {
        const navbar = document.querySelector('.nav');
        if (navbar) {
          navbar.classList.add('nav-fixed-mobile');
        }
      }
    },
    onLeave: () => {
      // Keep navbar fixed even after leaving hero section on mobile
      if (isMobile()) {
        const navbar = document.querySelector('.nav');
        if (navbar) {
          navbar.classList.add('nav-fixed-mobile');
        }
      }
    },
    onEnterBack: () => {
      // Re-apply fixed positioning when scrolling back up
      if (isMobile()) {
        const navbar = document.querySelector('.nav');
        if (navbar) {
          navbar.classList.add('nav-fixed-mobile');
        }
      }
    },
    onLeaveBack: () => {
      // Remove fixed positioning only when scrolling back above 80% of hero section
      if (isMobile()) {
        const navbar = document.querySelector('.nav');
        if (navbar) {
          navbar.classList.remove('nav-fixed-mobile');
        }
      }
    }
  });

  // Handle window resize to update the trigger
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}

// Function to clean up ScrollTrigger instances
export function cleanupScrollTrigger() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}
