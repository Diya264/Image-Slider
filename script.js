// initialize the current index of slide to 0
var currentIndex = 0;


function moveSlide(step) {
    var slides = document.querySelector(".items"); // get the container with all slides
    var totalImages = slides.children.length; // get total number of images
    currentIndex = (currentIndex + step + totalImages) % totalImages; // calculate the new index based on step and wrap around if necessarty
    var num = -currentIndex * 100; // calculate the percentage to translate the container
    slides.style.transform = `translateX(${num}%)`; // apply translation to move slide
}

// for moving the slide automatically every 6 seconds (6000 milliseconds)
setInterval(function () {
    moveSlide(1);
},6000);
