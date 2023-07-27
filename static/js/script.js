const navbar = document.querySelector('.navbar');

// Function to prevent over-scrolling from the top
function preventOverScroll(event) {
  if (window.scrollY === 0 && event.deltaY < 0) {
    event.preventDefault();
  }
}

// Attach the 'wheel' event listener to the window
window.addEventListener('wheel', preventOverScroll);