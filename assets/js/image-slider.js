function autoScrollSlider() {
    const slider = document.querySelector('.slider');
    const scrollAmount = slider.scrollWidth / slider.children.length;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
    } else {
        slider.scrollLeft += scrollAmount;
    }
}
setInterval(autoScrollSlider, 4500);
