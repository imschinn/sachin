
document.getElementById('goBackBtn').addEventListener('click', function() {
    history.back();
});


// --------------------------------------------------------------------------
function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const educationSection = document.getElementById('education');
    const gridItems = document.querySelectorAll('.grid-item');

    // Function to check if element is in viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle scroll event
    function handleScroll() {
      if (isElementInViewport(educationSection)) {
        gridItems.forEach((item) => {
          item.classList.add('visible'); // Add class to make items visible
        });
        // Remove event listener after items are shown
        window.removeEventListener('scroll', handleScroll);
      }
    }

    // Initial check in case the section is already in viewport
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Contact Info visibility
const contactSection = document.getElementById('contact');
const toggleContactBtn = document.getElementById('toggle-contact');

toggleContactBtn.addEventListener('click', function() {
    if (contactSection.style.display === "none") {
        contactSection.style.display = "block";
        toggleContactBtn.textContent = "Hide Contact Info";
    } else {
        contactSection.style.display = "none";
        toggleContactBtn.textContent = "Show Contact Info";
    }
});

// Scroll-triggered animation for sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 1.2;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});