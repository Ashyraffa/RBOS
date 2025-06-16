const startButton = document.getElementById('start-button');
const startMenuOverlay = document.getElementById('start-menu-overlay');

startButton.addEventListener('click', function (e) {
  e.stopPropagation();
  if (startMenuOverlay.style.display === 'none') {
    startMenuOverlay.style.display = 'block';
  } else {
    startMenuOverlay.style.display = 'none';
  }
});

startMenuOverlay.addEventListener('click', function () {
  startMenuOverlay.style.display = 'none';
});

document.querySelector('.start-menu').addEventListener('click', function (e) {
  e.stopPropagation();
});