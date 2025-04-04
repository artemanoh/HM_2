// Task 1
const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image")

sliderInput.addEventListener('input', _.debounce((event) => {
sliderImage.style.width = `${sliderInput.value * 4}px`
}, 300)
);
// Task 2
const movingBox = document.querySelector('#box')

window.addEventListener('mousemove', _.debounce((event) => {
movingBox.style.left = event.clientX + "px"
movingBox.style.top =  event.clientY + "px"
}, 200)
);