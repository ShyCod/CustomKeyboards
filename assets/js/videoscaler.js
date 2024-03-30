function adjustIFrameHeight() {
    var iframe = document.querySelector('.video-container iframe');
    var windowHeight = window.innerHeight;
    var newHeight = windowHeight / 2;
    iframe.style.height = newHeight + 'px';
}

// Call the function initially and on window resize
adjustIFrameHeight();
window.addEventListener('resize', adjustIFrameHeight);