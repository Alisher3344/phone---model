// Elementlarni tanlab olish
const video = document.getElementById('video');
const snapButton = document.getElementById('snap');
 
let daraja =document.querySelector(".batareaq")

// Kamerani yoqish
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream; // Videoni kameradan stream qilish
  })
  .catch(err => {
    console.error('Kamera topilmadi yoki ruxsat berilmagan:', err);
  });

// Rasmga olish va yuklab olish
snapButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Canvas o'lchamlarini video oqim o'lchamlariga moslash
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Canvasga rasmni chizish
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Rasmni ma'lumot URL formatida olish
  const imageData = canvas.toDataURL('image/png');

  // Rasmni yuklab olish uchun link yaratish
  const link = document.createElement('a');
  link.href = imageData;
  link.download = 'rasm.png';
  link.click();
});
let stopInterval = setInterval(() => {
    
  let batteryPromise = navigator.getBattery();

  batteryPromise.then((batteryObject) => {
    let foiz =("Percentage", batteryObject.level);
  daraja.textContent=`${foiz*100}`
   
  });
}, 1);