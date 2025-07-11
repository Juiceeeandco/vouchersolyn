const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg'
];

document.getElementById('spin').addEventListener('click', () => {
  const wheel = document.getElementById('wheel');
  const result = document.getElementById('result');

  const spinDegrees = 360 * 5 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${spinDegrees}deg)`;

  const prizeIndex = Math.floor((spinDegrees % 360) / 60);

  setTimeout(() => {
    const selectedImage = images[prizeIndex];
    result.innerHTML = `
      <p>🌟 Bạn nhận được phần thưởng sau:</p>
      <img src="${selectedImage}" width="200"><br><br>
    `;

    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = selectedImage.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 3100);
});

