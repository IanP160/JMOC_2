// Smooth scroll to form when clicking the arrow
function scrollToForm() {
    document.getElementById("mega-form").scrollIntoView({ behavior: "smooth" });
}

// Gallery Slideshow Logic
let slides = document.querySelectorAll(".large-slideshow img");
let smallSlides = document.querySelectorAll(".small-slideshow img");
let index = 0;

function changeSlide() {
    slides.forEach(s => s.classList.remove("active"));
    smallSlides.forEach(s => s.classList.remove("active"));
    
    slides[index].classList.add("active");
    smallSlides[index].classList.add("active");

    index = (index + 1) % slides.length;
}

// Auto change slides every 3 seconds
setInterval(changeSlide, 3000);
