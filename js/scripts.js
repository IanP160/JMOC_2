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
function loadGoogleForm() {
  const value = document.getElementById("service-select").value;
  const container = document.getElementById("google-form-container");

  const formMap = {
    garbage: "https://docs.google.com/forms/d/e/1FAIpQLSeitk6qVdVCrpG8KCTd-Pqs2bFpQENa90B7vyMxGaivt9suwQ/viewform?embedded=true",
    pressure: "https://docs.google.com/forms/d/e/1FAIpQLScd593nR5DJau-RJc4xvEy4-ky4-URgqYdkXniZ0iZeFr-J3g/viewform?embedded=true",
    window: "https://docs.google.com/forms/d/e/1FAIpQLScazZUpNiqCkME4Gl1dEOy8YvOPMt3XmgeFz4WP76kPdfMUVw/viewform?embedded=true",
    landscaping: "https://docs.google.com/forms/d/e/1FAIpQLScbwadbOpNYJkbSqVYcW6lFbRXJcTl3xHW7wiC_677xITtrwQ/viewform?embedded=true"
    // snow & odd can be added when you have them
  };

  if (formMap[value]) {
    container.innerHTML = `
      <iframe 
        src="${formMap[value]}" 
        width="100%" 
        height="1000px" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
        Loading…
      </iframe>`;
  } else {
    container.innerHTML = "";
  }
}
// Auto change slides every 3 seconds
setInterval(changeSlide, 3000);
