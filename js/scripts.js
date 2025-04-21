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

// Auto rotate
setInterval(nextSlide, 3000);

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

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


