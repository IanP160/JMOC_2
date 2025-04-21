// Run all JS when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // === Gallery Setup ===
  const galleryImages = [
    "https://via.placeholder.com/500x300?text=Image+1",
    "https://via.placeholder.com/500x300?text=Image+2",
    "https://via.placeholder.com/500x300?text=Image+3"
  ];

  let currentSlide = 0;
  const largeImage = document.getElementById("large-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  function showSlide(index) {
    currentSlide = index;
    largeImage.src = galleryImages[currentSlide];

    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    showSlide(currentSlide);
  }

  function changeImage(index) {
    showSlide(index);
  }

  // Expose to global scope if you're using onclick="..." in HTML
  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;
  window.changeImage = changeImage;

  showSlide(currentSlide);
  setInterval(nextSlide, 3000);
});

// === Google Form Loader (leave outside of DOMContentLoaded so it’s globally available) ===
function loadGoogleForm() {
  const value = document.getElementById("service-select").value;
  const container = document.getElementById("google-form-container");

  const formMap = {
    garbage: "https://docs.google.com/forms/d/e/1FAIpQLSeitk6qVdVCrpG8KCTd-Pqs2bFpQENa90B7vyMxGaivt9suwQ/viewform?embedded=true",
    pressure: "https://docs.google.com/forms/d/e/1FAIpQLScd593nR5DJau-RJc4xvEy4-ky4-URgqYdkXniZ0iZeFr-J3g/viewform?embedded=true",
    window: "https://docs.google.com/forms/d/e/1FAIpQLScazZUpNiqCkME4Gl1dEOy8YvOPMt3XmgeFz4WP76kPdfMUVw/viewform?embedded=true",
    landscaping: "https://docs.google.com/forms/d/e/1FAIpQLScbwadbOpNYJkbSqVYcW6lFbRXJcTl3xHW7wiC_677xITtrwQ/viewform?embedded=true"
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
