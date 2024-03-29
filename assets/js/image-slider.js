function autoScrollSlider() {
    const slider = document.querySelector('.slider');
    const scrollAmount = slider.scrollWidth / slider.children.length;

    // Check if slider has reached the end
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        // Scroll back to the beginning
        slider.scrollLeft = 0;
    } else {
        // Scroll to the next position
        slider.scrollLeft += scrollAmount;
    }
}
setInterval(autoScrollSlider, 6500);