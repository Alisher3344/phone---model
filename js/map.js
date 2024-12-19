let daraja = document.querySelector('.batareaq');
let time_elem =document.querySelector(".time_elem")
console.log(daraja);


let batteryPromise = navigator.getBattery();

batteryPromise.then((batteryObject) => {

  let a =batteryObject.level;
  daraja.textContent=`${a*100}`;

});
navigator.geolocation.getCurrentPosition(
  ({ coords: { latitude, longitude } }) => {
    console.log(latitude);
    console.log(longitude);
  }
);




let stopInterval = setInterval(() => {
    const hozirgiVaqt = new Date();
const soat = hozirgiVaqt.getHours();
const daqiqa = hozirgiVaqt.getMinutes();
let minut="";
if (daqiqa<10) {
    minut+="0"+`${daqiqa}`
}
else{
    minut=daqiqa 
}

let batteryPromise = navigator.getBattery();

batteryPromise.then((batteryObject) => {

  let a =batteryObject.level;
  daraja.textContent=`${a*100}`;

});
time_elem.textContent=`${soat}:${minut}`;
  }, 1);
