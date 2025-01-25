//dark and light toggle
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");

    // Check if the user has a preferred theme stored
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === "dark-mode") {
            sunIcon.style.display = "none";
            moonIcon.style.display = "inline";
        } else {
            sunIcon.style.display = "inline";
            moonIcon.style.display = "none";
        }
    }

    // Toggle dark/light mode
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        let theme = "light-mode";
        if (body.classList.contains("dark-mode")) {
            theme = "dark-mode";
            sunIcon.style.display = "none";
            moonIcon.style.display = "inline";
        } else {
            sunIcon.style.display = "inline";
            moonIcon.style.display = "none";
        }
        // Save the user's preference to localStorage
        localStorage.setItem("theme", theme);
    });
});


//-------------------------------------------------------------------------------------------------------------------------

//scroll to top
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("scrollToTopBtn").style.display = "block";
} else {
document.getElementById("scrollToTopBtn").style.display = "none";
}
}

function scrollToTop() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//-------------------------------------------------------------------------------------------------------------------------

// Mock data for images and titles for each slideshow

let slideIndexes = [1, 1, 1, 1, 1]; // One index per slideshow

// Initialize the first slideshow
showSlides(1, 1);

function plusSlides(n, slideshow) {
  showSlides(slideIndexes[slideshow - 1] += n, slideshow);
}

function showSlides(n, slideshow) {
  let slides = document.querySelectorAll(`#slideshow${slideshow} .mySlides`);
  
  if (slides.length === 0) return;

  if (n > slides.length) slideIndexes[slideshow - 1] = 1;
  if (n < 1) slideIndexes[slideshow - 1] = slides.length;
  
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndexes[slideshow - 1] - 1].style.display = "block";
}

function showSlideshow(n) {
  let slideshows = document.getElementsByClassName("slideshow-container");
  
  for (let i = 0; i < slideshows.length; i++) {
    slideshows[i].style.display = "none"; // Hide all slideshows
  }

  let selectedSlideshow = document.getElementById("slideshow" + n);
  if (selectedSlideshow) {
    selectedSlideshow.style.display = "block"; // Show the selected slideshow
    showSlides(1, n); // Reset to first slide
  }
}

//-------------------------------------------------------------------------------------------------------------------------



// auto Scroll op het einde van de animatie.

function onPlayerStateChange(event) {
  // Check if the video has finished playing
  if (event.data == YT.PlayerState.ENDED) {
    // Scroll to a section of the page after the video ends
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
  }
}

// This function initializes the YouTube iframe player API
function onYouTubeIframeAPIReady() {
  var player = new YT.Player('video', {
    events: {
      'onStateChange': onPlayerStateChange  // Trigger onPlayerStateChange when the player's state changes
    }
  });
}

// Load YouTube Iframe API asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//-------------------------------------------------------------------------------------------------------------------------