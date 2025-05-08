// Loader - Placeholder for when the page resources loads
// Hide loader when page is fully loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => loader.style.display = "none", 500);
  }
});


// Image slider auto-scroll
let slider = document.getElementById("slider");
let scrollAmount = 0;

function autoScrollSlider() {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
    scrollAmount = 0;
  } else {
    scrollAmount += 250;
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
}

setInterval(autoScrollSlider, 3000);

// Contact form validation
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  } else {
    alert("Message sent! We’ll get back to you soon.");
  }
});
