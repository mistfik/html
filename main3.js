const fullscreenSliderContainer = document.querySelector('.fullscreen-slider-container');
const fullscreenSliderWrapper = document.querySelector('.fullscreen-slider-wrapper');
const fullscreenSlides = document.querySelectorAll('.fullscreen-slide');
const fullscreenPrevButton = document.querySelector('.fullscreen-slider-arrow.prev');
const fullscreenNextButton = document.querySelector('.fullscreen-slider-arrow.next');

let fullscreenSlideWidth = fullscreenSliderContainer.offsetWidth;
let fullscreenSlideIndex = 0;

function fullscreenSlideTo(index) {
    fullscreenSliderWrapper.style.transform = `translateX(-${index * fullscreenSlideWidth}px)`;
}

fullscreenPrevButton.addEventListener('click', () => {
    fullscreenSlideIndex = (fullscreenSlideIndex > 0) ? fullscreenSlideIndex - 1 : fullscreenSlides.length - 1;
    fullscreenSlideTo(fullscreenSlideIndex);
});

fullscreenNextButton.addEventListener('click', () => {
    fullscreenSlideIndex = (fullscreenSlideIndex < fullscreenSlides.length - 1) ? fullscreenSlideIndex + 1 : 0;
    fullscreenSlideTo(fullscreenSlideIndex);
});

window.addEventListener('resize', () => {
    fullscreenSlideWidth = fullscreenSliderContainer.offsetWidth;
    fullscreenSlideTo(fullscreenSlideIndex);
});

window.addEventListener('resize', () => {
    fullscreenSlideWidth = fullscreenSliderContainer.offsetWidth;
    fullscreenSlideTo(fullscreenSlideIndex); // Пересчитываем позицию слайда при изменении размера
});