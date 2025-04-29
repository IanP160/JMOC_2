// ============================
// PRELOAD, MOBILE MENU, SMOOTH SCROLL, HEADER ANIMATION
// ============================
(function($) {

  var $window = $(window),
      $body = $('body'),
      $wrapper = $('#page-wrapper'),
      $banner = $('#banner'),
      $header = $('#header');

  // Breakpoints
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: [null, '480px']
  });

  // Initial animations
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Mobile?
  if (browser.mobile)
    $body.addClass('is-mobile');
  else {
    breakpoints.on('>medium', function() {
      $body.removeClass('is-mobile');
    });
    breakpoints.on('<=medium', function() {
      $body.addClass('is-mobile');
    });
  }

  // Scrolly.
  $('.scrolly')
    .scrolly({
      speed: 1500,
      offset: $header.outerHeight()
    });

  // Mobile Menu
  $('#menu')
    .append('<a href="#menu" class="close"></a>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'right',
      target: $body,
      visibleClass: 'is-menu-visible'
    });

  // Header toggle
  if ($banner.length > 0 && $header.hasClass('alt')) {
    $window.on('resize', function() { $window.trigger('scroll'); });

    $banner.scrollex({
      bottom: $header.outerHeight() + 1,
      terminate: function() { $header.removeClass('alt'); },
      enter: function() { $header.addClass('alt'); },
      leave: function() { $header.removeClass('alt'); }
    });
  }

})(jQuery);

// ============================
// GALLERY SLIDESHOW LOGIC
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
  "images/Gallery1.webp",
  "images/Gallery2.webp",
  "images/Gallery3.webp",
  "images/Gallery4.webp",
  "images/Gallery5.webp",
  "images/Gallery6.webp",
  "images/Gallery7.webp"
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

  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;
  window.changeImage = changeImage;

  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Auto-rotate every 3 seconds
});

// ============================
// GOOGLE FORM LOADER FUNCTION
// ============================
function loadGoogleForm() {
  const value = document.getElementById("service-select").value;
  const container = document.getElementById("google-form-container");

  const formMap = {
    garbage: "https://docs.google.com/forms/d/e/1FAIpQLSeitk6qVdVCrpG8KCTd-Pqs2bFpQENa90B7vyMxGaivt9suwQ/viewform?embedded=true",
    pressure: "https://docs.google.com/forms/d/e/1FAIpQLScd593nR5DJau-RJc4xvEy4-ky4-URgqYdkXniZ0iZeFr-J3g/viewform?embedded=true",
    window: "https://docs.google.com/forms/d/e/1FAIpQLScazZUpNiqCkME4Gl1dEOy8YvOPMt3XmgeFz4WP76kPdfMUVw/viewform?embedded=true",
    landscaping: "https://docs.google.com/forms/d/e/1FAIpQLScbwadbOpNYJkbSqVYcW6lFbRXJcTl3xHW7wiC_677xITtrwQ/viewform?embedded=true"
    // Add snow, odd job, etc.
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

// ============================
// SCROLL DOWN ARROW LOGIC
// ============================
function scrollToForm() {
  const formSection = document.getElementById("mega-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
}
