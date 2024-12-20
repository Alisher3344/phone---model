const video = document.getElementById('video');
const snapButton = document.getElementById('snap');
let daraja =document.querySelector(".batareaq")
let qaytishTugmasi= document.querySelector('.prev');


qaytishTugmasi.addEventListener("click", () => {
  history.go(-1);
});

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Kamera topilmadi yoki ruxsat berilmagan:', err);
  });

snapButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageData = canvas.toDataURL('image/png');

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
console.log(history);