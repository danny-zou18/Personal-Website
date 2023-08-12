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