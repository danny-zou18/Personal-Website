var btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // Remove "active" class from the currently active button
    var currentBtn = document.querySelector(".btn.active");
    if (currentBtn) {
      currentBtn.classList.remove("active");
    }
    // Add "active" class to the clicked button
    this.classList.add("active");

    // Get the index of the clicked button
    var index = Array.from(btns).indexOf(this);

    // Find the corresponding div using the index
    var divs = document.getElementsByClassName("divs");
    for (let j = 0; j < divs.length; j++) {
      // Remove "current" class from all divs
      divs[j].classList.remove("current");
      // Add "current" class to the div with the same index as the clicked button
      if (j === index) {
        divs[j].classList.add("current");
      }
    }
  });
}

const modal_overlay = document.getElementById("modal-overlay");

const first_personal = document.getElementById("first-personal");
const modal_first_personal = document.getElementById("modal-first-personal");
const close_first_personal = document.getElementById("close-first-personal");

/* Do this once with a for-loop for each card next time, loop through each project and then assign each with a indiviudal number,
  then call a function with (i) as a argument to determine which modal matches the current card and also which close-button matches the modal */

first_personal.addEventListener("click", () => {
  modal_first_personal.style.display = "block";
  modal_overlay.style.display = "block";

  var carousel = document.querySelector(".carousel");
  var arrowBtns = document.querySelectorAll(".modal-images i");
  const addPixels = 12;
  var ImageWidth = carousel.querySelector(".modal-img").offsetWidth;
  const firstImageWidth = ImageWidth + addPixels;

  let isDragging = false,
    startX,
    startScrollLeft;

  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id === "left") {
        console.log("left");
        console.log(ImageWidth);
        // Scroll left by one image width
        carousel.scrollLeft -= firstImageWidth;
      } else if (btn.id === "right") {
        console.log("right");
        console.log(firstImageWidth);
        // Scroll right by one image width
        carousel.scrollLeft += firstImageWidth;
      }
    });
  });
  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  });
  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) {
      return;
    }
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  });
});
close_first_personal.addEventListener("click", () => {
  modal_first_personal.style.display = "none";
  modal_overlay.style.display = "none";
});
