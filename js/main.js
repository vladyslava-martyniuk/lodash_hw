document.addEventListener("DOMContentLoaded", function () {
  const sliderInput = document.querySelector('.slider__input');
  const sliderImage = document.querySelector('.slider__image');
  function resizeImage() {
      const scaleValue = sliderInput.value / 50; // Нормалізуємо значення (50 = 1.0)
      sliderImage.style.transform = `scale(${scaleValue})`;
  }
  const debouncedResizeImage = _.debounce(resizeImage, 100);

  sliderInput.addEventListener('input', debouncedResizeImage);
});


const box = document.querySelector('.box');

function mousemove(event) {
  console.log('mousemove');
  let x = event.clientX;
  let y = event.clientY;
  box.style.left = x + 'px';
  box.style.top = y + 'px';
}
const debouncedBoxImage = _.debounce(mousemove, 100);
box.addEventListener('mousemove', mousemove);
