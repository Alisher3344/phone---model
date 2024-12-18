let BigTime = document.querySelector(".big_time");
let BlockScreen = document.querySelector(".bac_phone_big_2");
let bottomScreen = document.querySelector(".open_screen_anderBoard");
let daraja = document.querySelector(".batareaq");
let daraja2 =document.querySelector(".batareaddd")
let open_screen =document.querySelector(".open_screen");
let time_small_top=document.querySelector(".small_top_time");

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
    BigTime.textContent=`${soat}:${minut}`;
    time_small_top.textContent=`${soat}:${minut}`;
    
    batteryPromise.then((batteryObject) => {
    let a =batteryObject.level;    
    daraja.textContent=`${a*100}`;
    daraja2.textContent= `${a*100}`;
    });
  }, 1);

  BigTime.addEventListener("click", myFunction);

function myFunction() {
BlockScreen.setAttribute("style", "top:-750px;"); 
bottomScreen.setAttribute("style", "display: flex;justify-content: center;align-items: center;"); 
open_screen.setAttribute("style","display: block;")
}
 
navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      console.log(latitude);
      console.log(longitude);
    }
  );

  let batteryPromise = navigator.getBattery();
   
  

  