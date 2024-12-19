document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('resize', function() {
      let productCards = document.querySelectorAll('.product-cardd');
      productCards.forEach(card => {
          if (window.innerWidth <= 700) {
              card.classList.remove('product-cardd');
              card.classList.add('product-card');
          } else {
              card.classList.remove('product-card');
              card.classList.add('product-cardd');
          }
      });
  });

  // Trigger the resize event when the page loads
  window.dispatchEvent(new Event('resize'));

  // Set the footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});


let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

// Ensure the navbar is fixed at the top by applying the correct position CSS.
navbar.style.position = "fixed";
navbar.style.top = "0";
navbar.style.width = "100%";  // Ensure it spans the entire width.

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide navbar when scrolling down, show when scrolling up
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-70px";  // Adjust height to the height of your navbar
    } else {
        // Scrolling up
        navbar.style.top = "0";  // Show the navbar again
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});
