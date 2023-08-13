var overlay_active = document.querySelector("modal-overlay");

if (overlay_active.display === "block") {
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
}
