const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg'
];

const spinButton = document.getElementById('spin');
const wheel = document.getElementById('wheel');
const result = document.getElementById('result');

// Xử lý quay
function spinWheel() {
  const spinDegrees = 360 * 5 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${spinDegrees}deg)`;

  const prizeIndex = Math.floor((spinDegrees % 360) / 60);

  setTimeout(() => {
    const selectedImage = images[prizeIndex];
    result.innerHTML = `
      <p>🎉 Chúc mừng! Bạn nhận được ảnh sau:</p>
      <img src="\${selectedImage}" width="200"><br><br>
    `;

    // Rung thiết bị
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

    // Tự động tải ảnh
    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = selectedImage.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 3100);
}

// Sự kiện nhấn nút
spinButton.addEventListener('click', spinWheel);

// Hỗ trợ vuốt lên để quay
let touchStartY = null;
document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].clientY;
});

document.addEventListener('touchend', (e) => {
  if (touchStartY !== null) {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50) {
      spinWheel();
    }
    touchStartY = null;
  }
});
