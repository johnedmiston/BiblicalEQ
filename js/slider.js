//Declared variables for creating slider
var slides = document.getElementsByClassName('slide'),
slider = document.getElementById('slider'),
cursor = 0,
slideWidth = 0,
topHeight = 0,
slideCount = slides.length;

var sliderInterval = null;
var sliderTimeout = null;


//Defining slide width
function positionSlides() {
    slideWidth = slides[0].offsetWidth; // Always recalculate for responsiveness
    for (var i = 0; i < slideCount; i++) {
        slides[i].style.left = ((i - cursor) * slideWidth) + 'px';
    }
}

// Function to initialize the slider
function initializeSlider() {
    calculateTallestSlide();
    positionSlides();

}

// Attach load event to each image
var images = document.querySelectorAll('.slide img');
var imagesLoaded = 0;

images.forEach(function(image) {
    image.addEventListener('load', function() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            initializeSlider();
        }
    });
});

// Call initializeSlider on window load as a fallback


// --- Slider Interval Logic ---

function startSliderInterval() {
    sliderInterval = setInterval(function() {
        if (cursor < slideCount - 1) {
            moveSlides('forward');
        } else {
            moveSlides('go to beginning');
        }
    }, 6000);
}

function resetSliderIntervalWithDelay() {
    // Clear any running interval or timeout
    if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
    }
    if (sliderTimeout) {
        clearTimeout(sliderTimeout);
        sliderTimeout = null;
    }
    // Wait 6 seconds, then restart the interval
    sliderTimeout = setTimeout(function() {
        startSliderInterval();
    }, 6000);
}

// Start the interval initially
startSliderInterval();

//Button Event Listeners Go Here
document.getElementById('next').addEventListener('click', function(event){
    event.preventDefault();

    if(cursor < slideCount - 1){
        moveSlides('forward');
    } else {
        moveSlides('go to beginning');
    };
    resetSliderIntervalWithDelay();
});
document.getElementById('prev').addEventListener('click', function(event){
    event.preventDefault();

    if(cursor > 0){
        moveSlides('backward');
    } else {
        moveSlides('go to end');
    };
    resetSliderIntervalWithDelay();
});

//END Button Event Listeners

//Recalculates size based on the window resizing
window.addEventListener('resize', function(){
    positionSlides();
    //Recalculating the height of the tallest size for screen resize
    calculateTallestSlide();
});

// Calculates the positioning of slides when they will be moving
function moveSlides(direction) {
    if (direction === 'forward') {
        cursor = (cursor + 1) % slideCount;
    } else if (direction === 'backward') {
        cursor = (cursor - 1 + slideCount) % slideCount;
    } else if (direction === 'go to beginning') {
        cursor = 0;
    } else if (direction === 'go to end') {
        cursor = slideCount - 1;
    }
    positionSlides();
}


// Function calculating the height of the tallest slide
function calculateTallestSlide() {
    topHeight = 0; // Reset topHeight before calculation
    for (var i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }
    slider.style.height = topHeight + 'px';
}